import React, { useEffect, useState } from "react";
import { useParams , useNavigate} from "react-router-dom";


const Members = () => {


  const navigat = useNavigate();
  const {id}  = useParams();
  const [isPending, setIsPending] = useState(true);
    
  const [post, SetPost] = useState("");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw Error("Could not fetch")
        
      }
      return res.json();
    })
    .then((data)=>{
      SetPost(data)
      setIsPending(false);
    }).catch(()=>{navigat("*")})
    
    },[]);
  return (
    
    <>
    <center>
    { isPending && <div>Loading...</div> }
    <h1>user id:-{post.id}</h1>

      <h2 className="username">Name :- {post.name}</h2>
      <h2 className="email"> Email :-{post.email}</h2>
      <h4 className="email" >Username:- {post.username}</h4>
      <button className="backbtn" onClick={()=>{navigat("/Memberlist")}}> Go to Memberlist</button>

    </center>
     
    </>
    
  )
  }


  export default Members;