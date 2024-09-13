import React from "react";
import "./ContactUs.css";
import Msg_Icon from "../../assets/msg-icon.png";
import Mail_Icon from "../../assets/mail-icon.png";
import Phone_Icon from "../../assets/phone-icon.png";
import Location_Icon from "../../assets/location-icon.png";
import White_Icon from "../../assets/white-arrow.png";

const ContactUs = () => {
  return (
    <>
      <section className="heroSection">
        <img
          src="https://justenergy.com/wp-content/uploads/2023/12/artificial-intelligence-in-energy-illustration.jpeg"
          alt="Hero"
          className="heroImage"
        />
        <h1 className="heroTitle">Contact Us</h1>
      </section>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send Nexus A Msg <img src={Msg_Icon} alt="" />{" "}
          </h3>
          <p>
            We are a team of skilled and experienced web developers dedicated to
            creating high-quality, responsive and user-friendly websites for our
            clients. From responsive designs to robust backend systems, we
            leverage a diverse skill set to deliver tailored web solutions.
          </p>
          <ul>
            <li>
              <img src={Mail_Icon} alt="" />
              hr@devconsoftware.com
            </li>
            <li>
              <img src={Phone_Icon} alt="" />
              +91 9112100663
            </li>
            <li>
              <img src={Location_Icon} alt="" />
              Our Address Office No. 4-B, Second Floor, Ganesham Commercial -A,
              Survey No. 21/18-21/24, BRTS Road, Pimple Saudagar, Pune- 411027
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form>
            <label>Your Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />

            <label>Your Mobile Number:</label>
            <input
              type="number"
              name="mobile"
              placeholder="Enter Mobile Number"
              required
            />

            <label>Your Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email ID"
              required
            />

            <label>Your Course:</label>
            <input
              type="text"
              name="course"
              placeholder="Enter Your Course"
              required
            />

            <label>Write Your Message Here:</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Enter Message"
              required
            />

            <button type="submit" className="btn dark-btn">
              Submit Now <img src={White_Icon} alt="" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
