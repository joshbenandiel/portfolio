import Navbar from "./Navbar"
import Main from "./Main"
import Who from "./WhoAmI"
import Portfolio from "./Portfolio"
import Contact from './Contact'
import ScrollToTop from "./ScrollToTop"
import "../styles/App.css"
import { useState } from "react"




const App: React.FC<any> = () => {

  const [toggleOn, setToggleOn] = useState<any | null>(false);

  const handleToggle = () => {
    setToggleOn(!toggleOn);
  }

  const [isLoading, setIsLoading] = useState<any | null>(false)
  return (
        <div className={toggleOn ? "App-on position-relative" : "App position-relative"}>
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
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            toggleOn={toggleOn}
          />
          <ScrollToTop/>
          {isLoading && (
            <div className='loading'>
            </div>
          )}
        </div>
      
  );
}

export default App;
