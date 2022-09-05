import React from 'react'
import Spinner from 'react-bootstrap/esm/Spinner'

export default function Home() {
  return (
    <div className='home'>
    <center>
      <h1>HOME PAGE</h1></center>
      <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio pariatur officia facilis, nobis itaque minus odit provident accusamus, reiciendis culpa recusandae error odio magni velit dolores illum, iste aperiam illo.
      </p>

      <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio pariatur officia facilis, nobis itaque minus odit provident accusamus, reiciendis culpa recusandae error odio magni velit dolores illum, iste aperiam illo.
      </p>

      <div className="container">
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
      </div>
    </div>
  )
}
