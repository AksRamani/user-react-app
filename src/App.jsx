import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Error from "./Error";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Members from "./component/Members";
import Memberlist from "./component/Memberlist";
import Copyright from "./component/Copyright";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Memberlist" element={<Memberlist />} />
          <Route exact path="/Memberlist:id" element={<Members />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Copyright />
      </BrowserRouter>
    </>
  );
}

export default App;
