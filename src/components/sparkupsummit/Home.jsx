import React from 'react';
import './Home.css'; // Make sure to update your CSS
import ParticlesComponent from "./Particles"; // Import the Particles component
import Home_Center from "./Home_Center"

const Home = () => {
  return (
    <div className="home-container " id='home'>
      <div className={(window.innerWidth < 400)?"flex-none":"first-container"}>
        <ParticlesComponent id="particles" />
      </div>
      <div className='h-screen md:w-1/3 w-screen pt-6'>
        <Home_Center/>
      </div>
      <div className={(window.innerWidth < 400)?"flex-none":"first-container"}>
        <ParticlesComponent id="particles1" />
      </div>
      {/* <div className='md:h-screen md:w-1/3 w-0 h-0'>
        <img src='/assets/images/backgrounds/home_bg1.jpg' className='h-screen'/>
      </div>   */}
    </div>
  );
};

export default Home;
