import React from 'react'


function Whyus() {
    return (
        <div>
            <div id='whyUs' className="wrapper row2">
                <section className="hoc container clear">

                    <div className="sectiontitle">
                        <h6 className="heading">Why Us?</h6>
                        <p className="nospace font-xs" style={{ textDecoration: "underline 3px  #BB0102" }}>Why choose avntika tours?</p>

                    </div>
                    <ul className="nospace group center">
                        <li className="one_third first whyUsImg">
                            <article><a href="#" onclick="return false;"><img src="../image/p1.jpg" alt=""/></a>
                                <br />
                                <br />
                                <br />
                                <h6 className="heading" style={{fontFamily:"Quicksand"}}>Professional Drivers</h6>
                                <p className="btmspace-30" style={{fontFamily:"Quicksand"}}>Officially approved drivers with proper driving documents . It will help you to reach the destination with safety and hospitality.  </p>


                            </article>
                        </li>
                        <li className="one_third whyUsImg">
                            <article><a href="#" onclick="return false;"><img src="../image/p3.jpg" alt="" /></a>
                                <br />
                                <br />
                                <h6 className="heading" style={{fontFamily:"Quicksand"}}>On-Time Service</h6>
                                <p className="btmspace-30" style={{fontFamily:"Quicksand"}}>Scheduling of cabs and arrangement of drivers are perfect , so that they can reach you on time and take you the destination on perfect time.
                                </p>

                            </article>
                        </li>
                        <li className="one_third whyUsImg">
                            <article><a href="#" onclick="return false;"><img src="../image/p2.jpg" alt="" /></a>
                                <br />
                                <br />
                                <h6 className="heading" style={{fontFamily:"Quicksand"}}>Safe &amp; Convenient Ride</h6>
                                <p className="btmspace-30" style={{fontFamily:"Quicksand"}}>There is a transparency of rides and customers to the company and the people connected to the service are resposible . So that you can have a worry free ride.</p>

                            </article>
                        </li>
                    </ul>

                </section>
            </div>
        </div>
    )
}

export default Whyus
