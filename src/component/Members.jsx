import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const Members = () => {
  const navigat = useNavigate();
  const { id } = useParams();
  const [isPending, setIsPending] = useState(true);

  const [post, SetPost] = useState("");
  useEffect(() => {
    document.title = "Member";
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch");
        }
        return res.json();
      })
      .then((data) => {
        SetPost(data);
        setIsPending(false);
      })
      .catch(() => {
        navigat("*");
        setIsPending(false);
      });
  }, []);
  return (
    <>
      <center>
        {isPending && <div className="loader"></div>}
        {post.id && <h1>user id:-{post.id}</h1>}
        {post.name && <h2 className="username">Name :- {post.name}</h2>}
        {post.email && <h2 className="email"> Email :-{post.email}</h2>}
        {post.username && <h4 className="email">Username:- {post.username}</h4>}
        <Link to={"/Memberlist"}>
          <h3 className="backbtn">Go to Memberlist</h3>
        </Link>
      </center>
    </>
  );
};

export default Members;
