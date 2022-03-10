import React from 'react'
import './Sidebar.css'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from '@material-ui/core/Input';
import AddIcon from '@material-ui/icons/Add';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from './firebase'
import { useState } from 'react';
import SidebarChats from './SidebarChats';
import { Button } from '@material-ui/core';

function Sidebar() {

  const [channels] = useCollection(db.collection('rooms'));
  const [input, setInput] = useState('')

  const addChannel = (e) => {
    e.preventDefault();
    console.log('input', input)
    if (input) {
      db.collection('rooms').add({
        name: input,
      })
    }
    console.log('input', input)
    setInput('')

  }

  return (

    <div className='sidebar'>
      <div className="sidebar__search">
        <Input type='search' className='sidebar__searchInput' placeholder='Search' startAdornment={<InputAdornment position="start"> <SearchIcon /> </InputAdornment>} />
      </div>
      <form>
        <div className="sidebar__add"  >
          <AddIcon onClick={addChannel} />
          <input value={input} onChange={(e) => setInput(e.target.value)} className='sidebar__addInput' type="text" placeholder='Add Channel' onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Add Channel'} />
          <Button className='button' hidden type='submit' onClick={addChannel}>Submit</Button>
        </div>
      </form>
      

      <div className="sidebar__chats">
        {/* SidebarChats.js */}
        {channels?.docs.map(doc => (<SidebarChats key={doc.id} id={doc.id} channelName={doc.data().name} />))}
      </div>
    </div>
  )
}

export default Sidebar
