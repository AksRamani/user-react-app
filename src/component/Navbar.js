import {Link} from "react-router-dom" 


const Navbar = () => {
    return (
      <nav className="navMenu">
        <h1>Aks</h1>
        <div className="links">
          <Link to="/Home">Home</Link>
          <Link to="/Memberlist" >Members</Link>
        </div>

      </nav>
      
    );
  }
   
  export default Navbar;
  
  