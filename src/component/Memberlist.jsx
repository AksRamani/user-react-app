import React from 'react'
import { useState,useEffect  } from 'react'
import { Link } from 'react-router-dom';
// import Members from './component/Members';



export default function Memberlist() {
    const [user ,setUser]=useState(null)




    useEffect(() => {
        setTimeout(() => {
          fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
              return res.json();
            })
            .then((data) => {
              setUser(data);
            //   history.push('Members');
            })
        });
      },[]);

  return (
    <>
 
        {user !==null && user.map((user) => (
  <div
    className="column"
    key={user.id}
    id={user.id}
  >
    <div className="inner" style={{margin:"10px"}}>
      <div className="flex">
        <Link to={`/${user.id}`} id={user.id}>
        {/* {console.log(user.id)} */}
          <h2 className="btn">{user.name } </h2>
       
        </Link>
        
      </div>
    </div>
  </div>
    ))};
    </>
  )
    
  
}
