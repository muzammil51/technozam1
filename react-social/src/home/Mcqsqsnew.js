import React, { Component } from 'react';
import { NavLink, Link} from 'react-router-dom'

import './Home.css';

class Mcqsqsnew extends Component {

    state = {
        
    }
    render() {
        return (
          
            <div>

          {/* <!-- ======= Generator Section ======= --> */}
    <section id="gen" class="about">

<div class="container" data-aos="fade-up">
  <div class="row gx-0">

    <div class="d-flex flex-column justify-content-center" data-aos="fade-up" >
    <div class="content">
              <h3>Multiple Choice Question Generator</h3>            
              <p>We offer you to generate multiple choice questions based on text using AI technology. You just have to add your content and mcqs will be generated within seconds. Our goal is to generate efficient and accurate results to save your time & effort.</p>
              <div class="text-center text-lg-start">
              <div style={{ height:"600px",width:"100px"}}>
          <iframe style={{marginLeft:"140px", height:"550px",width:"1000px"}} src=' https://a342d42f7c089983.gradio.app'></iframe>
        <p class="getstarted btn-get-started"><a href=" https://a342d42f7c089983.gradio.app" target="myFrame">Open in Full Screen</a></p>     
           </div> 
              </div>
            </div>
    </div>

  </div>
</div>

</section>

        </div>
        )
    }
}

export default Mcqsqsnew;