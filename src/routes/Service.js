import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServImg from "../assets/night.jpg"
function Service (){
    return(
        <>
        <Navbar />
        <Hero 
          cName="hero-mid"
          heroImg={ServImg}
          title="Service"
          btnClass="hide"
        />

        </>
    )
}
export default Service;