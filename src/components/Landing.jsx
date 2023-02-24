import Vale from "../images/Vale.png"
import Po from "../images/Po.png"
import Lala from "../images/Lala.png"
import Dipsy from "../images/Dipsy.png"
import TinkyWinky from "../images/TinkyWinky.png"

const Landing = () => {

    return (

        <>
        <img src={Vale} alt="" />
        <div>
            First type your chat name and pick an avatar 
        </div>
        <div>
            Choose one from existing avatars
        </div>

        <img src={Po} alt="" />
        <img src={Lala} alt="" />
        <img src={Dipsy} alt="" />
        <img src={TinkyWinky} alt="" />

        </>
    )
}

export default Landing