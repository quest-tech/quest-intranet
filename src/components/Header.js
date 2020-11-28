import QuestLogo from './assets/QuestLogo.png';
import Col from 'react-bootstrap/Col';
import './Header.css'

function Header(props) {
    var header;

    if (props.siteState === 'TWIQ') {
        header = 
        <div className="TWIQHeaderInternal">
            <img src={QuestLogo} className='QuestLogo'/>
            <h1 className='HeaderTextTWIQ'>This Week In Quest</h1>
            <h3 className='HeaderTextTWIQ'>Date</h3>
        </div>
        
    } else if (props.siteState === 'Calendar') {
        header =
        <h1 className='HeaderText'>
            Calendar
        </h1>
    }


    return (
        <Col className='Header'>
            {header}
        </Col>);
}

export default Header;
