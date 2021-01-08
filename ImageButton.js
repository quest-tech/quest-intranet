import { Link } from "react-router-dom";

// props.image -> image path
// props.link -> redirect path
// website.com/{props.link}
// ex: props.link = student then image would redirect you to questwebsite.com/student

function Header(props) {
    return (
        <Link to = {props.link}> <img src={props.image}></img></Link>
        )
}

export default Header;