import React, { Component } from "react";
import Slider from "react-slick";
import '../slikMenu/slick/slick.css'
import '../slikMenu/slick/slick-theme.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2500,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay:true,
      // autoplaySpeed:1000
    };
    return (
      <div>
        <div id="testimonials" class="sectiontitle mb-2">
      <h6 class="heading">Testimonial</h6>
      <p class="nospace font-xs">what our clients says about vatsal cabs</p>
    </div>
        <Slider {...settings}>
          <div className="px-5">
          <h6 style={{fontWeight: "bold"}}>Miss Priya John </h6>
              <p> Took the trip from Junagadh to Diu. It was good to have a person who was knowledgeable
                about the area. It was informative and the ride enjoyable. The service was good and the ride
                arrived early so time was not lost.</p>
          </div>
          <div className="px-5">
          <h6 style={{fontWeight: "bold"}}>Mr. Arjita Gupta</h6>
                <p> Good service.. Clean cars and on time.. Very polite behavior and accomodative.. We were
                  two females traveling alone from Somnath to rajkot and they helped us a lot with luggage,
                  refreshment purchase, and everythint. </p>
          </div>
          <div className="px-5">
          <h6 style={{fontWeight: "bold"}}>Mr. Honey Shukla </h6>
                  <p> One of the best services yet I've been get from the junagadh city till now...was best
                    experience till now to roam in Junagadh city and nearby locations.</p>
          </div>
          <div className="px-5">
          <h6 style={{fontWeight: "bold"}}>Mr. Ashok Dutta </h6>
                    <p>services of vatsal cabs are excellent. very well mannered professionals..</p>
          </div>
          <div className="px-5">
          <h6 style={{fontWeight: "bold"}}>Mr. Rahul Vayale</h6>
                      <p>We travelled with Jitesh Parmar from Vatsal Cab services from Keshod Airport to Somnath.
                        Experience was very good. Highly recommended for travel anywhere in Gujarat.</p>
          </div>
          <div className="px-5">
          <h6 style={{fontWeight: "bold"}}>Miss Gunjan Bhatt</h6>
                        <p>Overall dam good experience and even behavior and etiquette were also very good.</p>
          </div>
        </Slider>
      </div>
    );
  }
}