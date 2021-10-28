import Navbar from "./Navbar"
import Main from "./Main"
import Who from "./WhoAmI"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import ScrollToTop from "./ScrollToTop"
import "../styles/App.css"
import { useState } from "react"
const App = () => {

  const [toggleOn, setToggleOn] = useState(false);

  const handleToggle = () => {
    setToggleOn(!toggleOn);
    console.log(toggleOn)
  }
  return (


        <div className={toggleOn ? "App-on" : "App"}>
          <Navbar
          toggleOn={toggleOn}
          handleToggle={handleToggle}
          />
          <Main
          toggleOn={toggleOn}
          /> 
          <Who
          toggleOn={toggleOn}
          />
          <Portfolio
          toggleOn={toggleOn}
          />
          <Contact
          toggleOn={toggleOn}
          />
          <ScrollToTop/>
        </div>
      
  );
}

export default App;
