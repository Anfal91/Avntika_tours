import React from 'react'

function Steps() {
  return (
    <div>
      <div className="wrapper row3">
 <section className="hoc container clear">
    <div className="sectiontitle">
      <h6 className="heading">Cab Booking in easy steps</h6>
      <p className="nospace font-xs" style={{textDecoration: "underline 3px  #BB0102"}}>Why choose vatsal cabs?</p>
      
    </div>
    <ul id="stats" className="nospace group">
      <li><img src="image/q1.png" alt=""/>
      <br/>
        <br/>
        <h1><a href="#" onclick="return false;">Step 1</a></h1>
         <p className="btmspace-30">visit avntika tours website</p>
        
      </li>
      <li><img src="image/w.jpg" alt=""/>
      <br/>
        <br/>
        <h1><a href="#" onclick="return false;">Step 2</a></h1>
        <p className="btmspace-30">Enter kilometers</p>
        
      </li>
      <li><img src="image/e.jpg" alt=""/>
      <br/>
        <br/>
        <h1><a href="#" onclick="return false;">Step 3</a></h1>
        <p className="btmspace-30">Enter your details</p>
      </li>
      <li><img src="image/r.jpg" alt=""/>
      <br/>
        <br/>
        <h1><a href="#" onclick="return false; ">Enjoy Ride </a></h1>
        <p className="btmspace-30">See, It's just simlpe!!</p>
      </li>
    </ul>
  </section>
</div>
    </div>
  )
}

export default Steps;
