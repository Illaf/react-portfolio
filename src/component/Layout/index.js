

import Sidebar from '../Sidebar'
import {Outlet} from 'react-router-dom'
//import './index.scss';
const Layout=()=>{
    return (
        <>
        <div className="App">
            <Sidebar/>
            <div className="Page">
<span className='tags top-tags'>&lt;body&gt;</span>
<Outlet/>


<span className="tags bottom-tags">&lt;body&gt;
<br />
<span className='bottom-tags'>&lt;/html&gt;</span>
</span>
            </div>
  
        </div>
        </>
    )
   
}
export default Layout