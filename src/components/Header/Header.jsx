import "./Header.css";
import { useState, useEffect } from 'react';

export default function Header() {
    const [currentDate, setCurrentDate] = useState(new Date());

    function formatDate(date) {
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        const timeOptions = { hour: 'numeric', minute: 'numeric' };
    
        const formattedDate = date.toLocaleDateString('en-US', options);
        const formattedTime = date.toLocaleTimeString('en-US', {
          ...timeOptions,
          hour12: true,
        });
    
        // Remove seconds from time and combine the date with time
        return `${formattedDate} ${formattedTime}`;
      };

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <img src="https://i.imgur.com/K2xsBW8.png" alt="three circles" />
          </li>
          <li>
            <strong>Joe Gilberto</strong>
          </li>
          <li>File</li>
          <li>Edit</li>
          <li>History</li>
          <li>Help</li>
        </ul>
      </nav>
      <div className="extras">
      <div class="wifi-symbol">
        <div class="arc arc1"></div>
        <div class="arc arc2"></div>
        <div class="arc arc3"></div>
      </div>
      <p>{formatDate(currentDate)}</p>
      </div>
    </header>
  );
}
