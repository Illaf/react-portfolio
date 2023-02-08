import './index.scss'
import React from 'react'
import Loader from 'react-loaders'
const Contact=()=>
{
    return(
        <>
        <div className="contact-page">
            <div className="text-zone">
                <h2>
                    Contact me
                </h2>
                <p>

                    Get creative and beautiful UI designs for any kind of educational,commercial and social websites. It will be a pleasure to work together and exploring different aspects of frontend engineering.
                </p>
                <p>Reach me at- <h4>ilafshafeeq@gmail.com</h4></p>
                <div className="leetcode"> leetcode profile:
<a id="link" href="https://leetcode.com/Ilaf"> leetcode.com/Ilaf</a>
</div>
<a href="https://www.canva.com/design/DAFLc62TdGA/LhzMRcFDgo_jcarRBJWZWg/view?utm_content=DAFLc62TdGA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
    
<button className='button'>
    My Resume
</button>
</a>
                <div className="contact-form">
                
                <div class="mb-3" id='one'>
  <label for="formGroupExampleInput" class="form-label">Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="enter your name here" />
</div>
<div class="mb-3" id='two'>
  <label for="formGroupExampleInput2" class="form-label">Context </label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
</div>
<div class="mb-3" id='three'>
  <label for="exampleFormControlInput1" class="form-label">Email </label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3" id='four'>
  <label for="exampleFormControlTextarea1" class="form-label"> textarea   </label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Contact