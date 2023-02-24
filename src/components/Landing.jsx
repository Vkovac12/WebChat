import Vale from "../images/Vale.png"
import Po from "../images/Po.png"
import Lala from "../images/Lala.png"
import Dipsy from "../images/Dipsy.png"
import TinkyWinky from "../images/TinkyWinky.png"
import { Link} from 'react-router-dom';

const Landing = (props) => {
    
    return (

        <>
        <div className="start-page">
            <img 
            className='logo-vale'
            src={Vale} 
            alt="Logo" />
            <div className='first-text-frontpage'>First type your chat name and pick an avatar</div>
            <div className='second-text-frontpage'>Choose one from existing avatars</div>
            <input
            className='chat-name'
            type="text"
            placeholder="Your chat name"
            autofocus="true"
            onChange={props.handleNameChange}
            />
            <div className="all-avatars">
            <img className="avatar" src={TinkyWinky} alt="" />
            <img className="avatar" src={Dipsy} alt="" />
            <img className="avatar" src={Lala} alt="" />
            <img className="avatar" src={Po} alt="" />
            </div>
            <a href=""></a>
            <Link to="/ChatRoom" >{<button className='start-button'>OK</button>}</Link>
        </div>
        </>
    )
}

export default Landing