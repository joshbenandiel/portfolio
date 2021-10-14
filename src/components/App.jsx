import Navbar from "./Navbar"
import Main from "./Main"
import Who from "./WhoAmI"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import ScrollToTop from "./ScrollToTop"
import "../styles/App.css"


const App = () => {
  return (
    
        <div className="App">
          <Navbar/>
          <Main/> 
          <Who/>
          <Portfolio/>
          <Contact/>
          <ScrollToTop/>
        </div>
     
  );
}

export default App;
