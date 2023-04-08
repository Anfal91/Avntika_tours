import React, { useState } from 'react'
// import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import '../js/code'


function Header() {

  const [show, setShow] = useState(false);
  const [km, setKm] = useState(null);
  const [print, setPrint] = useState(false);

  function getKm(val) {
    setKm(val.target.value);
  }
  function btnClick() {
    setPrint(true);
    document.getElementById("btn1").style.display = "block";
  }
  const [email, setEmail] = useState("")
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pickupAdd, setPickupAdd] = useState("");
  const [dropAdd, setDropAdd] = useState("");
  const [cabs, setCabs] = useState("");


  const sendEmail = async (e) => {
    e.preventDefault();
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify({
        email, name, phone, date, time, pickupAdd, dropAdd, cabs
      })
    })

    const data = await res.json();
    console.log(data);

    if (data.status === 401 || !data) {
      console.log("error")
    } else {
      setShow(true);
      setEmail("")
      setName("")
      setPhone("")
      setDate("")
      setTime("")
      setPickupAdd("")
      setDropAdd("")
      setCabs("")
      console.log("Email sent")
    }
  }

  function form1() {
    var form11 = document.getElementById("form11");
    form11.style.display = ("block")
  }

  return (

    <div>
      <div className="bgded overlay mainSlider">

        <header id="header" className="hoc clear">

          <div id="logo" className="one_quarter first">
            <a href="#"> <img src="../image/avntikaLogo.png" alt="" /></a>
          </div>
          <div className="three_quarter">
            <ul className="nospace clear">
              <li className="one_third first">
                <div id="checktic" className="block clear"><a href="#"><i className="fas fa-search"></i></a> <span><strong> Search Booking :</strong>click on icon</span></div>
              </li>
              <li className="one_third">
                <div className="block clear"><a href="https://gmail.com/"><i className="fas fa-envelope"></i></a> <span><strong>Customer Support Mail :</strong> vatsalcabsofficial@gmail.com</span></div>
              </li>
              <li className="one_third">
                <div className="block clear"><a href="tel:9067721616"><i className="fas fa-phone"></i></a> <span><strong>Call us on :</strong> +91 9067721616</span>

                </div>

              </li>
            </ul>
          </div>

        </header>

        <section id="navwrapper" className="hoc clear">

          <nav id="mainav">
            <ul className="clear">
              <li className="active"><a href="/">Home</a></li>
              <li><a href='#whyUs' onclick="about_us()">Why Us</a></li>

              <li><a href='#testimonials' onclick="reviews()">Testimonial</a></li>
              <li><a href='#aboutUs' onclick="about_us1()">About Us</a></li>
              <li><a href='#footer' onclick="Contact_Us()">Contact Us</a></li>

            </ul>

            <form action="#"><select><option selected="selected" value="">MENU</option><option value="/">Home</option><option>Why Us</option><option>Testimonial</option><option>About Us</option><option>Contact Us</option></select></form></nav>


        </section>

        <div id="pageintro" className="hoc clear">

          <article>
            <h3 className="heading">Welcome to Avntika Tours</h3>

          </article>

          <div className="form-popup" style={{ textAlign: "left" }} id="myForm">

            <div className='mt-2 col-lg-6'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <h3>Enter Kilometers</h3>
                <Form.Control type="number" name='name' onChange={getKm} placeholder="How much KM you want to travel" />
              </Form.Group>
              <Button variant="primary" onClick={btnClick}>
                Search
              </Button>
            </div>


          </div>

        </div>

      </div>

      <div className="wrapper row3">

        <section id="introblocks">
          <section className="hoc container clear">
            <ul className="nospace group" id="stats">





              <li className="">

                <figure><img src="image/1.png" />
                  <figcaption>
                    <h6 className="heading">AC Hatchback</h6>
                    <p> Available Cabs : Indica Vista, Suzuki Swift, Hyundai Eon, Toyota Liva, Duston Go, Hyundai I10.</p>
                    <p>Driver Allowance : Included</p>
                    <p>Toll Tax         : Included </p>
                    <p>State Tax        : Included</p>
                    <p>GST      : Included</p>
                    {
                      print ?
                        <spam style={{ fontSize: "large", fontWeight: "600" }}>Single : Rs. {km * 15}/-</spam>
                        : null
                    }
                    <br />
                    {
                      print ?
                        <spam style={{ fontSize: "large", fontWeight: "600" }}>Multi : Rs. {km * 15 * 2}/-</spam>
                        : null
                    }

                  </figcaption>

                </figure>
              </li>

              <li className="">
                <figure><img src="image/2.png" alt="" />
                  <figcaption>
                    <h6 class="heading">AC Suv</h6>
                    <p> Available Cabs : Toyota Innova, Mahindra Xylo, Tata Aria, Renault Lodgy, Nissan Evalia.</p>
                    <p>Driver Allowance : Included</p>
                    <p>Toll Tax : Included </p>
                    <p>State Tax : Included</p>
                    <p>GST      : Included</p>
                    <spam style={{ fontSize: "large", fontWeight: "600" }}>Single : Rs. 0000/-</spam>
                    <br/>
                    <spam style={{ fontSize: "large", fontWeight: "600" }}>Multi : Rs. 0000/-</spam>
                  </figcaption>
                </figure>
              </li>
              <li className="">
                <figure><img src="image/44.png" alt="" />
                  <figcaption>
                    <h6 class="heading">AC Sedan</h6>
                    <p> Available Cabs : Tata Indigo, Swift Dzire, Toyota Etios, Hyundai Xcent, Honda Amaze, Ford Figo.</p>
                    <p>Driver Allowance : Included</p>
                    <p>Toll Tax : Included </p>
                    <p>State Tax : Included</p>
                    <p>GST      : Included</p>
                    <spam style={{ fontSize: "large", fontWeight: "600" }}>Single : Rs. 0000/-</spam>
                    <br/>
                    <spam style={{ fontSize: "large", fontWeight: "600" }}>Multi : Rs. 0000/-</spam>
                  </figcaption>
                </figure>
              </li>
              <li className="">
                <figure><img src="image/4.png" alt="" />
                  <figcaption>
                    <h6 class="heading">Bus</h6>
                    <p> Available Cabs : Toyota Innova Crysta, Ford Endeavour, Toyota Fortuner, Mahindra Marazzo.</p>
                    <p>Driver Allowance : Included</p>
                    <p>Toll Tax : Included </p>
                    <p>State Tax : Included</p>
                    <p>GST      : Included</p>
                    <spam style={{ fontSize: "large", fontWeight: "600" }}>Single : Rs. 0000/-</spam>
                    <br/>
                    <spam style={{ fontSize: "large", fontWeight: "600" }}>Multi : Rs. 0000/-</spam>
                  </figcaption>
                </figure>
              </li>
            </ul>
            <button type="submit" className="btn mt-4" id="btn1" onClick={form1} value="11221" style={{height: "40px", width: "30%", display: "none", margin: "auto" }}>Select Ride</button>


            <li style={{ listStyle: "none", display: "none" }} id="form11" class="mt-5">
              <h1>Trip Details</h1>
              <div id="comments">
                <div className="d-flex justify-content-center">
                  <Form className='mt-2 col-lg-12'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <div className='d-flex'>
                      {/* <Form.Label>Enter Your name</Form.Label> */}
                      <Form.Control className='col-lg-6 mx-1' type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />

                      {/* <Form.Label>Enter Your Email</Form.Label> */}
                      <Form.Control className='col-lg-6 mx-1' type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />

                      </div>
                      <div className='d-flex'>
                      <Form.Control className='col-lg-6 mx-1' type="number" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter number" />

                      <Form.Control className='col-lg-6 mx-1' type="date" name='date' onChange={(e) => setDate(e.target.value)} placeholder="Enter Date" />

                      </div>
                      <Form.Select name='time' value={time} className='mt-4' onChange={(e) => setTime(e.target.value)} aria-label="select">
                        <option>Select pick-up time</option>
                        <option value="1:00">1:00</option>
                        <option value="2:00">2:00</option>
                        <option value="3:00">3:00</option>
                        <option value="4:00">4:00</option>
                        <option value="5:00">5:00</option>
                        <option value="6:00">6:00</option>
                        <option value="7:00">7:00</option>
                        <option value="8:00">8:00</option>
                        <option value="9:00">9:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
                        <option value="23:00">23:00</option>
                        <option value="24:00">24:00</option>
                      </Form.Select>

                      <Form.Control className='my-4' value={pickupAdd} onChange={(e) => setPickupAdd(e.target.value)} placeholder='Enter pckup addresss' as="textarea" rows={3} />

                      <Form.Control value={dropAdd} onChange={(e) => setDropAdd(e.target.value)} placeholder='Enter drop addresss' as="textarea" rows={3} />

                      <Form.Select name='cabs' value={cabs} className='mt-4' onChange={(e) => setCabs(e.target.value)} aria-label="select">
                        <option>Select cabs</option>
                        <option value="Ac Hatchblack">Ac Hatchback [Single: Rs.{km * 15}, Multi: Rs.{km * 15 * 2}]</option>
                        <option value="Ac SUV">Ac SUV</option>
                        <option value="Ac Sedan">Ac Sedan</option>
                        <option value="Bus">Bus</option>
                      </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={sendEmail}>
                      Send
                    </Button>
                  </Form>

                </div>
             
                { show ?
                  <Alert variant="success" onClose={() => setShow(false)} dismissible>
                    Your Registration Sent Succesfully
                </Alert> : ""
                }
              </div>

            </li>
          </section>
        </section>

      </div>

    </div>
  )
}

export default Header
