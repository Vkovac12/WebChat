import Vale from "../images/Vale.png"
import Po from "../images/Po.jpg"
import Lala from "../images/Lala.jpg"
import Dipsy from "../images/Dipsy.jpg"
import TinkyWinky from "../images/TinkyWinky.jpg"
import Vacum from "../images/Vacum.jpg"
import Sun from "../images/Sun.jpg"
import ChatLogo from "../images/ChatLogo.png"
import { Link} from 'react-router-dom';
// import { useAlert } from 'react-alert'


const Landing = (props) => {
    console.log("member",props.member);
    // const alert = useAlert()
    return (

        <>
        <div className="start-page">
            <img 
            className='logo-vale'
            src={ChatLogo} 
            alt="Logo" />
            <div className='first-text-frontpage'>First type your chat name and pick an avatar</div>
            
            <input
            className='chat-name'
            type="text"
            placeholder="Your chat name"
            autofocus="true"
            onChange={props.handleNameChange}
            />
            <div className='second-text-frontpage'>Choose one from existing avatars</div>
            <div className="all-avatars">
            <img className="avatar" src={TinkyWinky} alt="" onClick={props.handleAvatarChange} />
            <img className="avatar" src={Dipsy} alt="" onClick={props.handleAvatarChange} />
            <img className="avatar" src={Lala} alt="" onClick={props.handleAvatarChange} />
            <img className="avatar" src={Po} alt="" onClick={props.handleAvatarChange} />
            <img className="avatar" src={Vacum} alt="" onClick={props.handleAvatarChange} />
            <img className="avatar" src={Sun} alt="" onClick={props.handleAvatarChange} />
            </div>
            <a href=""></a>
            {props.member.username
            ?<Link to="/ChatRoom" >{<button className='start-button'>Enter chat</button>}</Link>
            :<button className='start-button' 
            // onClick={() => {
            //     alert.show('Oh look, an alert!')
            //     }}
            >
            Enter chat
            </button>
            }
        </div>
        </>
    )
}

export default Landing