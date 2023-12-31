import LandingPage from "./LandingPage";
import TOP from "./Top";
import About from "./About";
import Domains from "./Domains";
import Footer from "../footer";

const Home = () => {
    return ( 
        <>
           <LandingPage />
           <TOP />
           <About></About>
           <Domains></Domains>
           <Footer></Footer>
        </>

     );
}
 
export default Home;