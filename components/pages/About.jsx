import React from 'react'
import "..pages/../CSS/About.css"
import "../Navbar/Navebar"
import Navebar from '../Navbar/Navebar'
import Homepage from './Homepage'
import room1 from "../../assets/room1.jpg"
import room2 from "../../assets/room2.jpg"
import room3 from "../../assets/room3.jpg"
import homestayImg from "../../assets/homestayImg.jpg"
import Footer from '../Footer/Footer'

function About() {
  return (
    <>
    <dir className="hpd">
    <Homepage/>
    </dir>
    <div className="container">
      <div className="about">
        <h1 className="title">BHOOMI HOME STAY</h1>
        <h2 className="subtitle">(PURE VEGETARIAN HOMESTAY)</h2>

        <div className="image-container">
          <img src={homestayImg} alt="Bhoomi Home Stay" className="main-image" />
        </div>

        <div className="facilities">
          <h3 className="facilities-title">Facilities Available</h3>
          <ul className="facilities-list">
            <li>Clean rooms</li>
            <li>Personal kitchen facility also available, if needed</li>
            <li>Free Wi-Fi</li>
            <li>Attached Bathroom</li>
            <li>Air Conditioning or Fans</li>
            <li>Travel Desk</li>
            <li>Room services</li>
            <li>Television</li>
            <li>Tea/Coffee maker</li>
            <li>Laundry service</li>
            <li>Parking</li>
          </ul>
        </div>

        <div className="customization">
          <p>DO let us know for any customization, We will be pleased to assist you</p>
          <button className="btn">CheckIn</button>
        </div>

        <div className="gallery">
          <img src={room1} alt="Room 1" className="gallery-image" />
          <img src={room2} alt="Room 2" className="gallery-image" />
          <img src={room3} alt="Room 3" className="gallery-image" />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About