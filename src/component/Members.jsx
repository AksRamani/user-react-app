import React, { useEffect, useState } from "react";
import { useParams , useNavigate} from "react-router-dom";


const Members = () => {
  const navigat = useNavigate();

  const id  = useParams();

  let values = Object.values(id);
  console.log(values)



    
  const [post, SetPost] = useState("");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${values}`)
    .then((res) => {return res.json();
    })
    .then((data)=>{
      console.log(data)
      SetPost(data)
    });
    },[values]);
  return (
    
    <>
    <center>
    
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