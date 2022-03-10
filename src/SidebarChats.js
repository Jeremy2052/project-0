import { Avatar } from '@material-ui/core';
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { useDispatch } from 'react-redux'
import { enterRoom } from "./features/appSlice"
import { db } from './firebase';
import './SidebarChats.css'

function SidebarChats({ id, channelName }) {

  const dispatch = useDispatch();
  const [chatMessages] = useCollection(id && db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').limit(1));

  const selectChannel = () => {
    if (id) {
      dispatch(enterRoom({
        roomId: id
      }))
    }
  }

  return (
    <div className='sidebarChats' onClick={selectChannel}>
      <h3>{channelName}</h3>
      {chatMessages?.docs.map((doc) => {
        const { message, user, userImage } = doc.data();
        return (
          <div key={id} className='sidebarChats__messages'>
            <div className="sidebarChats__user">
              <Avatar src={userImage} />
              <h3>{user}</h3>
            </div>

            <div className="sidebarChats__message">
              <h5>{message}</h5>
            </div>
          </div>


        )
      })}
    </div>
  )
}

export default SidebarChats
