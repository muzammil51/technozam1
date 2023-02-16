import React, { Component } from 'react';
import { NavLink, Link} from 'react-router-dom'

import './Home.css';

class Fillblankqsnew extends Component {
    render() {
        return (
          
            <div>



          {/* <!-- ======= Generator Section ======= --> */}
    <section id="gen" class="about">

<div class="container" data-aos="fade-up">
  <div class="row gx-0">

    <div class="d-flex flex-column justify-content-center" data-aos="fade-up" >
    <div class="content">
              <h3>Fill-in-Blanks Generator</h3>            
              <p>We offer you to generate Fill-in-Blanks questions based on text using AI technology. You just have to add your content and questions will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
              <div class="text-center text-lg-start">
              </div>
            </div>
    </div>

  </div>
</div>
<div style={{ height:"600px",width:"1500px"}}>
          <iframe style={{height:"700px",width:"1500px"}} src='http://127.0.0.1:7861/'></iframe>
        <p class="getstarted btn-get-started"><a href="http://127.0.0.1:7861/" target="myFrame">Open in Full Screen</a></p>     
           </div> 

</section>

        </div>
        )
    }
}

export default Fillblankqsnew;