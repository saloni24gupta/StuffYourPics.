import React from 'react'
// import Avatar from 'react-avatar';
import Avatar from '@material-ui/core/Avatar';

export default function Post(props) {
//   const [username , setUsername] = useState(); 
//   const [name, setName] = useState();
//   const [post, setPost] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [] 

    return (
    <>
        <div className="container Post">
            <Avatar
        className="post__avatar"
        alt="Saloni Gupta"
        src="static/images/avatar/1.jpg"
        />
        <h3>{props.UserName}</h3>
        </div>

        <div className="img-sc">
            <img src="https://images.unsplash.com/photo-1632931612869-c1a971a02da4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="default image" />
        </div>
        <div className="form">
{/* <Input type="text"
placeholder="enter your name"
value={username}
onChange={(e) => setUsername(e.target.value)}
/>
<Input 
placeholder ="menter your email"
type="text"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
<Input
placeholder="password"
value={password}
type="password"
onchange={(e) => setPassword(e.target.value)}
/> */}
</div>
  </>
    

        
    )
}
// export default Post
