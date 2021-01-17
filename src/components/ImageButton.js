import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import QuestLogo from '../assets/QuestLogo.png';

var sectionStyle = {
    //backgroundImage: `url(${QuestLogo})`,     // background image here
    backgroundColor: '#660909',
    backgroundSize: "cover",
    backgroundPosition: "center",

 }

// props.link -> redirect path
// website.com/{props.link}
// ex: props.link = student then image would redirect you to questwebsite.com/student

function ImageButton(props) {
    return (
        <Link to = {props.link}>
            <Button style={sectionStyle} variant="outline-light">
                QUEST RESOURCE HERE
            </Button>
        </Link>
    )
}

export default ImageButton;