import React from 'react';
import ProfileCard from './assets/Components/ProfileCard/ProfileCard';
import Ellipses from './assets/Components/Ellipses/Ellipses';
import './App.css';
import Navbar from './assets/Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <ProfileCard
        name="ADITYA SAH"
        designation="Full-stack Developer & Designer"
        instagram="https://instagram.com/adityasah._?igshid=MzNlNGNkZWQ4Mg=="
        linkedin="https://www.linkedin.com/in/aditya-sah-a302ab22b"
        github="https://github.com/Adityasah2004"
      />
      <Ellipses />
    </div>
  );
}

export default App;
