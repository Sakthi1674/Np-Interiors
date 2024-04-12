import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player';

function About() {
  const cardStyle = {
      width: '25rem',
      height: '25rem',
      background: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTeIs9qjN31yrryvIL19eFI_AjgfNst-4ucA&usqp=CAU")',
      border: '2px solid green',
      position: 'relative',
      zIndex: 2, 
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const buttonStyle1 = {
    backgroundColor: 'black',
    color: '#ddd',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
   < div className='aboutback'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <Card style={cardStyle} className="text-center">
            <p className='center'>About Info</p>
            <div className='center'>
              <p><Icon disabled name='point'/>Karimangalam, Dharmapuri<br /><p>City Tower, 635111.</p></p>
              <p><Icon disabled name='mail'/>NPinteriors@gmail.com</p>
              <p><Icon disabled name='phone' />(123) 456-7890</p>
              <Link to="/Contact">
                <button style={buttonStyle}><span style={{ color: 'black', fontSize: 15 }}><Icon disabled name='envelope outline' />Contact Us</span></button>
              </Link>&nbsp;
              <a style={buttonStyle1} href="https://www.google.com/maps/place/Dharmapuri,+Tamil+Nadu/@12.1269522,78.1308846,14z/data=!3m1!4b1!4m6!3m5!1s0x3bac16f95a63ed01:0x3f2cb64e61c93aef!8m2!3d12.1210997!4d78.1582143!16zL20vMDVuNHl5?authuser=0&entry=ttu">
                <span style={{ color: 'White' }}><Icon disabled name="map marker alternate" /></span>
              </a>

              <p>Follow us</p>
              <p><Icon disabled name='facebook'/><Icon disabled name='instagram'/><Icon disabled name='twitter'/><Icon disabled name='telegram'/></p>
            </div>
          </Card>
        </div>
        </div>
  
  );
}

export default About;
