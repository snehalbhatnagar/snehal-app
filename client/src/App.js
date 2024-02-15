import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Task2Component from './Task2Component'; 
import Task3Component from './Task3Component'; 
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Task 1');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="App">
      <div className="tabs">
        <button className={activeTab === 'Task 1' ? 'active' : ''} onClick={() => handleTabClick('Task 1')}>Task 1</button>
        <button className={activeTab === 'Task 2' ? 'active' : ''} onClick={() => handleTabClick('Task 2')}>Task 2</button>
        <button className={activeTab === 'Task 3' ? 'active' : ''} onClick={() => handleTabClick('Task 3')}>Task 3</button>
      </div>
      <div className="content">
      {activeTab === 'Task 1' && (
  <div className="carClass">
    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
      <div>
        <img src="https://burst.shopifycdn.com/photos/chicago-city-lights-at-night.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="Placeholder 1" />
        <p className="legend">Chicago</p>
      </div>
      <div>
        <img src="https://cdn.britannica.com/08/187508-050-D6FB5173/Shanghai-Tower-Gensler-San-Francisco-world-Oriental-2015.jpg" alt="Placeholder 2" /> 
        <p className="legend">Shanghai</p>
      </div>
      <div>
        <img src="https://media.timeout.com/images/105851513/image.jpg" alt="Placeholder 3" />
        <p className="legend">Los Angeles</p>
      </div>
    </Carousel>
    <div className="panel-container">
      <div className="panel">
        <h3>About Us</h3>
        <p>We are a dynamic global enterprise with a presence in the bustling cities of Los Angeles, Chicago, and Shanghai.</p>
      </div>
      <div className="panel">
        <h3>Clients</h3>
        <p>Leading FinTech companies like Stripe have trusted us with their data.</p>
      </div>
    </div>
  </div>
)}


        {activeTab === 'Task 2' && <Task2Component />}
        {activeTab === 'Task 3' && <Task3Component />}
      </div>
    </div>
  );
}

export default App;
