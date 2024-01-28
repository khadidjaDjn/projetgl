import Navbar from "./Navbar";
import Home from "./Home";
import './HomePage.css'

   const HomePage = () => {

    return ( 
        <>
           <div className="homePage">
           <Navbar />
           <Home/>
           </div>
           
        </>

     );
}
 
export default HomePage;

