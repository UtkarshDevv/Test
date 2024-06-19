import React, { Children } from 'react'    
import "..pages/../CSS/ScheduleCard.css"
import Schedules from './Schedules'
import ImgCard from './ImgCard'


import durgakund from '../../assets/durgakund.jpg';
import kalabhavan from '../../assets/kalabhavan.jpg';
import sankatmochan from '../../assets/sankatmochan.jpg';
import VTBHU from '../../assets/VTBHU.jpg';
import Kashi_Vishwanath from '../../assets/Kashi_Vishwanath.jpg';
import annapurna_mandir from '../../assets/annapurna_mandir.jpg';
import Manikarnika_ghat from '../../assets/Manikarnika_ghat.jpg';
import kaal_bhairav_temple from '../../assets/kaal_bhairav_temple.jpg';
import ganga_aarti from '../../assets/ganga_aarti.jpg';
import boat_riding from '../../assets/boat_riding.jpg';




// Define arrays of objects containing image src and name
const imageSet1 = [
  { src: durgakund, name: 'Durgakund' },
  { src: kalabhavan, name: 'Kalabhavan' },
  { src: sankatmochan, name: 'Sankat Mochan'},
  { src: VTBHU, name: 'VT-BHU'}
];

const imageSet2 = [
  { src: Kashi_Vishwanath, name: 'Kashi Vishwanath Mandir' },
  { src: annapurna_mandir, name: 'Maa Annapurna Mandir' },
  { src: Manikarnika_ghat, name: 'Manikarnika_ghat'},
  { src: kaal_bhairav_temple, name: 'Kaal Bhairav Temple'},
  { src: ganga_aarti , name: 'Ganga Aarti'},
  { src: boat_riding, name: 'Boat Riding '},
];


function ScheduleCard() {
  return (
    <div className='Schedulecard'>
      <h1>VARANASI-AYODHYA ITINERARY PLAN</h1>
      <Schedules day="Day 1 Varanasi">
        <h1>MORNING</h1>
        <ul>
          <li><h2>Pickup from railway station/airport</h2></li>
          <li><h2>Transfer to guest house Bhumi HomeStay</h2></li>
          <li><h2>Breakfast/Lunch</h2></li>
        </ul>

        <h1>AFTERNOON-EVENING</h1>
        <ul>
          <h1>Local Temple Visit</h1>
          <li><h2>BHU Vishwanath Temple</h2></li>
          <li><h2>Kala Bhavan</h2></li>
          <li><h2>Sankat Mochan Temple</h2></li>
          <li><h2>Durga Kund</h2></li>
        </ul>

        <h1>Night</h1>
        <ul>
          <h1>Local Temple Visit</h1>
          <li><h2>Dinner and Back to Homestay</h2></li>
        </ul>
        <ImgCard images={imageSet1} />
      </Schedules>

      <Schedules day="Day 2 Varanasi">
        <h1>MORNING</h1>
        <ul>
          <li><h2>Eary Morning Kashi Vishwanath Darshan</h2></li>
          <li><h2>Annapurna Mandir</h2></li>
        </ul>

        <h1>Breakfast at Kachori gali</h1>
        <ul>
          <li><h2>Manikarnika ghat visit</h2></li>
          <li><h2>Pashupati mandir</h2></li>
        </ul>

        <h1>Lunch</h1>
        <ul>
          <h1>Afternoon-Evening</h1>
          <li><h2>Kal Bhairav Temple</h2></li>
          <li><h2>Ganga aarti at Dashaswamedh Ghat</h2></li>
          <li><h2>Boat ride and Ghat sight seeing</h2></li>
          <h1>Evening</h1>
          <li><h2>Dinner and Back to HomeStay</h2></li>
        </ul>
        <ImgCard images={imageSet2} />
      </Schedules>

      <Schedules day="Day 3 Ayodhya">
        <h1>MORNING</h1>
        <ul>
          <li><h2>Early Morning travel from Varanasi to Ayodhya</h2></li>
        </ul>

        <h1>Breakfast/Lunch</h1>

        <h1>Afternoon-Evening</h1>
        <ul>
          <h1>Afternoon-Evening</h1>
          <li><h2>Ram Janma Bhoomi Temple</h2></li>
          <li><h2>Hanuman Garhi Mandir</h2></li>
          <li><h2>Kanak Bhavan Temple</h2></li>
          <li><h2>Dashrat Bhavan</h2></li>
          <li><h2>Snacks</h2></li>
          <li><h2>Nageshwarnath Temple</h2></li>
          <li><h2>Saryu River</h2></li>
          <h1>Evening</h1>
          <li><h2>Dinner and Back to HomeStay</h2></li>
        </ul>
        <ImgCard images={imageSet2} />
      </Schedules>

      <Schedules day="Day 4 Varanasi">
        <h1>MORNING</h1>
        <ul>
          <li><h2>Breakfast at Homestay</h2></li>
        </ul>

        <h1>Departure</h1>
        <ImgCard images={imageSet1} />
      </Schedules>
    </div>
  );
}

export default ScheduleCard;