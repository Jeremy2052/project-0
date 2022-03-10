import { Avatar } from '@material-ui/core'
import React from 'react'

import './Messages.css'

function Messages({ message, timestamp, user, userImage, image }) {
  // console.log('image', image)

  return (
    <div className='messages'>

      <div className="messages__header">
        <div className="messages__left">
          <Avatar src={userImage} />
          <h3>{user}</h3>
        </div>

        <div className="messages__right">
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </div>
      </div>

      <h1 className='messages_message'>{message}</h1>
      {image && (<img src={image} alt="" />)}
      <hr />
    </div>
  )
}

export default Messages
