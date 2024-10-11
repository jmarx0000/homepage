// this will be the homepage of my website including marketing (anyone on web can access)

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Ensure App.css is correctly imported for styling
import Toolbar from '../Components/Toolbar';
import { useAuth } from '../Functions/AuthContext.js'; // Ensure you have this function in your services
import './Styles/HomePage.css'; // Ensure HomePage.css is correctly imported for styling
import PriceBox from '../Components/PriceBox';

// Import all images from the public folder
const importAll = (r) => r.keys().map(r);
const userLogos = importAll(require.context('../../public/Logos', false, /\.(png|jpe?g|svg)$/));

userLogos.forEach((logo, index) => {
  console.log(`Logo ${index + 1}:`, logo);
});

const HomePage = () => {
  const { signInWithGoogle, user } = useAuth(); // Use the signInWithGoogle function and user from the AuthContext
  const navigate = useNavigate(); // Use useNavigate hook from react-router-dom

  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    // Add event listeners for mouse events in creds section
    scrollContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      scrollContainer.classList.add('active');
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mouseleave', () => {
      isDown = false;
      scrollContainer.classList.remove('active');
    });

    scrollContainer.addEventListener('mouseup', () => {
      isDown = false;
      scrollContainer.classList.remove('active');
    });

    scrollContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 3; // Adjust the scroll speed
      scrollContainer.scrollLeft = scrollLeft - walk;
    });
  }, []);

  useEffect(() => {
    const scrollContainer2 = document.getElementById('scroll-container2');
    let isDown2 = false;
    let startX2;
    let scrollLeft2;
    
    // Set scrollContainer2 to start at the end
    scrollContainer2.scrollLeft = scrollContainer2.scrollWidth - scrollContainer2.clientWidth;

    // Add event listeners for mouse events in creds section
    scrollContainer2.addEventListener('mousedown', (e) => {
      isDown2 = true;
      scrollContainer2.classList.add('active');
      startX2 = e.pageX - scrollContainer2.offsetLeft;
      scrollLeft2 = scrollContainer2.scrollLeft;
    });

    scrollContainer2.addEventListener('mouseleave', () => {
      isDown2 = false;
      scrollContainer2.classList.remove('active');
    });

    scrollContainer2.addEventListener('mouseup', () => {
      isDown2 = false;
      scrollContainer2.classList.remove('active');
    });

    scrollContainer2.addEventListener('mousemove', (e) => {
      if (!isDown2) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer2.offsetLeft;
      const walk = (x - startX2) * 3; // Adjust the scroll speed
      scrollContainer2.scrollLeft = scrollLeft2 - walk;
    });
  }, []);

  useEffect(() => {
    if (user) {
      navigate('/dashboard'); // Navigate to the dashboard if the user is signed in
    }
    else {
      navigate('/'); // Navigate to the homepage if the user is not signed in
    }
  }, [user, navigate]);

  return (
    <div>
      <Toolbar/>
      
      <div className="section-1">
          <h1 className="header" style={{fontSize: '64px'}}>Nexus</h1> {/* Apply a CSS class for header */}
          <h2>Catchy slogan or pithy phrase here.</h2>
        </div>

      <div className="page-container"> {/* Use a class name from your App.css */}

        <div className="section-2"> 
          <h2>Why Nexus</h2>
          <p>Some information about Nexus here.</p>
        </div>

        <div className="section-3"> 
          <h2>A Platform Designed For Recruiting</h2>
          <p>Some information about Nexus here.</p>
        </div>

        {/* credentials section */}
        <div className="creds"> 
          <h2>Helping Our Users Connect Their Way to Success</h2>
          <div className="scroll-container" id="scroll-container">
            {(() => {
              
              // Create 6 price boxes with logos
              const priceBoxes = [];
              for (let i = 0; i < 6; i++) {

                // append the priceBoxes array
                priceBoxes.push(
                  <div key={i} className="scroll-content">

                  {/* // loop through the userLogos array and display each logo */}
                  {userLogos.map((logo, index) => (
                    <div key={index} className="scroll-content">
                      <img src={logo} alt={`Logo ${index + 1}`} draggable="false" />
                    </div>
                  ))}
                  </div>
                );
              }
              return priceBoxes;
            })()};
          </div>
          
          {/* second scroll container */}
          <div className="scroll-container" id="scroll-container2">
            {(() => {
              
              // Create 6 price boxes with logos
              const priceBoxes = [];
              for (let i = 0; i < 6; i++) {

                // append the priceBoxes array
                priceBoxes.push(
                  <div key={i} className="scroll-content2">

                  {/* // loop through the userLogos array and display each logo */}
                  {userLogos.map((logo, index) => (
                    <div key={index} className="scroll-content2">
                      <img src={logo} alt={`Logo ${index + 1}`} draggable="false" />
                    </div>
                  ))}
                  </div>
                );
              }
              return priceBoxes;
            })()};
          </div>
        </div>

        <div className="pricing"> 
          <h2>Pricing</h2>
          <p>Some information about Nexus here.</p>
          <div className="price-row">
            <PriceBox style={{ marginRight: '40px' }}/>
            <PriceBox style={{ marginRight: '40px' }}/>
            <PriceBox />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
