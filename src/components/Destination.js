import "./DestinationStyles.css"
import m1 from "../assets/1.jpg"
import m2 from "../assets/2.jpg"
import m3 from "../assets/3.jpg"
import m4 from "../assets/4.jpg"
const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot within a time frame</p>
            <div className="first-des">
                <div className="des-text">
                    <h2>Taal Volcano, Batangas</h2>
                    <p>The volcano is located about 50 kilometers 31m south of Manila, the capital of the Philippines.
                        Taal Volcano has had several violent eruptions in the past, causing 
                        deaths on the island and the populated areas surrounding the lake, with an overall death toll of about 6,000. Because of its proximity to populated areas and its eruptive history, the volcano was designated a Decade Volcano,
                        worthy of close study to prevent future natural disasters. All volcanoes in the Philippines are part of the Ring of Fire.
                        Taal Volcano was known as Bombou or Bombon in the 1800s.[6][7]

                        The municipality of Taal and the Taa-lan River (now known as Pansipit River) were named after the Taa-lan tree, which grows along the river. The tree also grew along the shore of Bombon Lake (now known as Taal Lake).[8][9] The Taa-lan River was a narrow channel that connects the present-day Taal Lake and Balayan Bay to each other.

                         Taal is a Tagalog word in the Batangueño dialect that means true, genuine, and pure.[10] 
                         Taal Volcano was known as Bombou or Bombon in the 1800s.
                    </p>
                </div>
                <div className="image">
                    <img alt="img" src={m1} />
                    <img alt="img" src={m4} />
                </div>
            </div>
        </div>
    )
}

export default Destination