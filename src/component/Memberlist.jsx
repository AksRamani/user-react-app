import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
// import Members from './component/Members';

export default function Memberlist() {
  const navigat = useNavigate();
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    document.title = "Memberlist";

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setIsPending(false);
      })
      .catch(() => {
        navigat("*");
        setIsPending(false);
      });
  }, []);

  return (
    <>
      {isPending && (
        <div style={{ height: "0%" }}>
          {" "}
          <div className="ring">
            Loading
            <span></span>
          </div>
        </div>
      )}
      {user !== null &&
        user.map((user) => (
          <div key={user.id} id={user.id}>
            <div className="inner" style={{ margin: "10px" }}>
              <div className="flex">
                <Link to={`Memberlist/${user.id}`} id={user.id}>
                  <h2 className="btn">{user.name} </h2>
                </Link>
              </div>
            </div>
            <Spinner animation="grow" />
          </div>
        ))}
      ;
    </>
  );
}
