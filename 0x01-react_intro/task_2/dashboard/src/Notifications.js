import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        onClick={handleButtonClick}
        style={{ position: 'absolute', top: 10, right: 10 }}
        aria-label="Close"
      >
        <img src={closeIcon} alt="close-icon" style={{ width: '10px', height: '10px' }} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
