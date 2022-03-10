import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import './Chat.css'
import { selectRoomID } from './features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { db, storage } from './firebase';
import Messages from './Messages';
import { Button } from '@material-ui/core'
import firebase from 'firebase'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

function Chat() {

  const [user] = useAuthState(auth);
  const roomId = useSelector(selectRoomID);
  const [roomDetails] = useDocument(roomId && db.collection('rooms').doc(roomId))
  const [roomMessages, loading] = useCollection(roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc'))
  const [input, setInput] = useState('')
  const [image, setImage] = useState(null)
  const chatRef = useRef(null) //pass into chat input
  const filepickerRef = useRef(null)

  useEffect(() => {
    //a way to scroll to bottom automatically
    chatRef?.current?.scrollIntoView()
  }, [roomId, loading])

  const postImages = (e) => {
    // console.log('post image')
    // e.preventDefault();
    const reader = new FileReader();
    if (e.target.files[0]) {
      // setImage(URL.createObjectURL(e.target.files[0]))
      //read as a data url
      reader.readAsDataURL(e.target.files[0]);
    }
    //when it comes back return as a result as base 64 format
    reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result)
    }
    // console.log(image)
  }

  const removeImage = () => {
    setImage(null)
  }

  const sendMessage = (e) => {
    e.preventDefault();
    // console.log('test')

    if (!roomId) {
      return false;
    }

    // console.log('image before', image)

    db.collection('rooms').doc(roomId).collection('messages').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user?.displayName,
      userImage: user?.photoURL,
      // postImage: image,
    }).then(doc => {
      if (image) {
        const uploadTask = storage.ref(`messages/${doc.id}`).putString(image, 'data_url')
        removeImage();

        uploadTask.on('state_change', null, error => console.error(error), () => {
          //when upload completes
          storage.ref('messages').child(doc.id).getDownloadURL().then(url => {
            db.collection('rooms').doc(roomId).collection('messages').doc(doc.id).set({
              image: url
            }, { merge: true })
          })
        })

      }
    })
    // console.log('image after', image)
    //method to scroll to bootom of chat when entering a message
    chatRef.current.scrollIntoView({
      behavior: "smooth"
    });

    setInput('')
  };

  // maybe use useEffect for every change/render of roomId

  return (
    <div className='chat'>
      <div className="chat__header">
        <h3>{roomDetails?.data().name}</h3>
      </div>

      <hr />
      <div className="chat_messages">
        {roomMessages?.docs.map((doc) => {
          const { message, timestamp, user, userImage, image } = doc.data();
          return (<Messages key={doc.id} message={message} timestamp={timestamp} user={user} userImage={userImage} image={image} />)
        })}
        <div className="chatBottom" ref={chatRef} >
        <div className="chatInput">
        <form className='forms'>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Type a message' />
            <Button className='sendButton' hidden type='submit' onClick={sendMessage}>
              SEND
            </Button>
            <div onClick={() => filepickerRef.current.click()} className="attachment">
              <AttachFileIcon />
              <input ref={filepickerRef} onChange={postImages} type="file" />
            </div>

            {image && (
              <div className="preview__close">
                <img className='previewImage' src={image} alt="" /><h1 onClick={removeImage} className='removeImage'>X</h1>
              </div>)}
          </form>
        
      </div>
        </div>
      </div>

      

    </div>
  )
}

export default Chat
