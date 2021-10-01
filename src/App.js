import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Post from './Components/Post';
// import firebase from './Components/firebase';
import './Components/Post.css'
// import ModalUnstyled from '@mui/core/ModalUnstyled';
function App() {



  return (
    <><div>
      <Navbar />
      {/* <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
> {body}
</Modal > */}

    </div><div classNmae="app_header"
  >
        <Post  UserName="saloni gupta" />
        <Post  UserName="saloni gupta" />
        <Post  UserName="saloni gupta" />
        <Post  UserName="saloni gupta" />
      </div></>
  )
}
 export default App

  
      

