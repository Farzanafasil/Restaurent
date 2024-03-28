import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid" style={{ textAlign: 'justify', textAlignLast: 'left', display: 'inline-block', marginBottom: '25px' ,marginLeft: '20px'}} >
            Welcome to The Foodie, where culinary passion meets exceptional dining experiences.
            Founded with a commitment to redefining the gastronomic journey, The Foodie invites 
            you on a flavorful adventure like no other. With a dedication to sourcing the freshest
            ingredients locally, our talented team of chefs crafts each dish with creativity and 
            expertise. Beyond just a restaurant, The Foodie is a destination for those who appreciate
            the artistry of food and the warmth of hospitality. Join us and indulge in a symphony of
            flavors, where every bite tells a story and every moment is savored.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
