import React, { useEffect, useRef } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from "./Calendar.module.css";
const Calendar = () => {
  const calendarRef = useRef();
  const { newTheme } = React.useContext(ThemeContext);


    const options = {
      responsive: true,
    };
//  console.log(newTheme,"new");
  return (
    <div  >
      
      {/* style={{display:"flex", justifyContent:"center"}} */}
      {/* style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }} */}
      <div className={styles.container} >
      <GitHubCalendar username="abhi72181"  options={options} style={{background:`${newTheme.calendar}`}} />
    </div>
    </div>
  );
};

export default Calendar;
