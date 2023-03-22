import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contImg from "../assets/2.jpg"
function Contact (){
    return(
        <>
        <Navbar />
        <Hero
         cName="hero-mid"
         heroImg={contImg}
         title="Contact"
         />
        </>
    )
}
export default Contact;