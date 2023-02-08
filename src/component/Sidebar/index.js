import './index.scss';
import {Link,NavLink} from 'react-router-dom'
import Elogo from '../../assets/images/Elogo.jpg'
import ee from '../../assets/images/ee.jpg'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const Sidebar=()=>(
    <div className='nav-bar'>
<Link className='logo' to='/'>
<img src={Elogo} alt="logo"></img>
<img className='logo-sub'src={ee} alt="elaf"></img>
</Link>
<nav>
    
    <NavLink exact='true' activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="4d4d4e"/>
    </NavLink>
    
    

    <NavLink exact='true' activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
    </NavLink>
    <NavLink exact='true' activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
    </NavLink>
</nav>
<ul><li>
   <a href="https://www.linkedin.com/in/elaf-shafeeq-7644420243">
        <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e"/>
       
        </a>
    </li>
    <li>
    <a  href="https://github.com/Illaf">
        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
    </a>
    </li><li>
    <a  href="https://www.instagram.com/illaf__">
        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
    </a>
    </li>
    </ul>
    </div>
)
export default Sidebar