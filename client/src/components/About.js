import React from 'react'

function About() {
  return (
    <div>
      <div id='aboutUs' class="wrapper row3">
     <section class="hoc container clear"> 
   
    <div class="sectiontitle">
      <h6 class="heading">About US</h6>
      <p class="nospace font-xs" style={{textDecoration: "underline 3px  #BB0102"}}>how we serve</p>
    </div>
    <ul class="nospace group latest">
      <li class="one_half first">
        <img src="image/aboutus.jpg" alt=""/>
        
      </li>
      <li class="one_half">
        <article class="aboutArtical">
            <ul style={{padding: "0px"}}>
          <h6 class="heading">About Avntika Tours</h6>
          
          <li class="btmspace-30" style={{fontFamily:'Quicksand'}}>avntika tours is one of the fastest growing cab services in Saurashtra. We believe in quality rides and customer satisfaction.</li>
          
          <li class="btmspace-30" style={{fontFamily:'Quicksand'}}>
              avntika tours is founded in the year 2017. We provide best transportations with affordable prices and we are superior in that.
          </li>
          
          <li class="btmspace-30" style={{fontFamily:'Quicksand'}}>
              choose your ride and please don't forget to give your precious feedback to us so that we can work on that to  improve our services.
          </li>
          
        </ul>
        </article>
      
      </li>
    </ul>

  </section>
</div>
    </div>
  )
}

export default About
