import React from 'react' 
import Loader from 'react-loaders'
import './index.scss'
const About=()=>{
    return(
        <>
        <div className="about-page">
            <div className="text-zone">
                <h2>About me</h2>
<p>I am a second year engineering student,a young enthusiast and a frontend developer. Learning new ideas and skills has always been  my passion.  </p>
<p>Coding is my main area of interest.I've been doing coding in java since eighth standard.I came to know about development in my first year of college. Since then I have been practicing Web development. </p>
<p>I enjoy making frontends of websites. These days I am learning Node . I aim to be a full stack MERN developer. For any kind of website designing,you are always welcome at my place.</p>
            </div>
           
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About