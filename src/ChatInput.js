import React from 'react'
import './ChatInput.css'

function ChatInput(channelName, channelId) {
  return (
    <div className='chatInput'>
      <form>
        <input type="text" placeholder='Type a message' />
      </form>
    </div>
  )
}

export default ChatInput
