import {Link} from 'react-router-dom'
import Loader from 'react-loaders'
import Elogo from '../../assets/images/Elogo.jpg'

import './index.scss'
const Home=()=>{
    return(
        <>
        <div className='container home-page'>
        <div className="text-zone">
            <h1>Hi,<br />I'm
            <img src={Elogo} alt="developer" />
            laf
            <br />
            Web developer
            </h1>
            <h2>Frontend Developer/electrical engineering undergraduate</h2>
<Link to="/contact" clasName='buttontwo' id='two'>CONTACT ME</Link>
        </div>
        </div>
        <Loader type='pacman'/>
      
       </>
    );
}

export default Home