import React from 'react';
import './App.css';

import Navbar from './assets/Components/Navbar/Navbar';
import ProfileCard from './assets/Components/ProfileCard/ProfileCard';
import Ellipses from './assets/Components/Ellipses/Ellipses';
import Typewriter from './assets/Components/Typewriter/Typewriter'; 



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
      <Typewriter
        staticText="Heya!👋, I am a: "
        words={['Full-Stack Developer', 'App Developer', 'UI/UX Designer']}
        speed={100}
      />

    </div>
  );
}

export default App;
