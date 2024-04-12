import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';
import Labelfile from './Labelfile';
import Feedback from './Feedback';
function Service() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row', // Display cards in a column
    alignItems: 'center', // Center cards horizontally
  };

  const cardStyle = {
    width: '18rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '20px',
    boxShadow: '0 4px 8px rgba(5, 5, 5, 0.8)',
    backgroundColor: 'Orange',
    display: 'flex',
    flexDirection: 'column',
  };

  const imageStyle = {
    width: '100%',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  };

  const btnContainerStyle = {
    marginTop: 'auto',
    textAlign: 'center',
  };

  const btnPrimaryStyle = {
    color: 'White',
    backgroundColor: 'blue',
    border: '1px solid #007bff',
    borderRadius: '4px',
    padding: '0.375rem 0.75rem',
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    lineHeight: '1.5',
  };
  const videoStyle = {
    position: 'absolute',
    top: 5,
    left: 0,
    width:"100%",
  };

  const [showContent, setShowContent] = useState(true);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return ( 
    <>
    <p className='Service'>Service</p>
    <hr></hr>
    <div className='menu'>
    <div  className='header'>
        <div class="ui link cards">
        <div class="card">
                          <div class="image">
                             <img src="https://hips.hearstapps.com/hmg-prod/images/arent-pyke-contemporary-minimalist-living-room-1554398853.jpg"></img>
                          </div>
                              <div class="content">
                                 <div class="header">Minimalist</div>
                                    <div class="description">
                                            Molly is a personal assistant living in Paris.
                                    </div>
                                 </div>
                                </div>
          
                  <div class="card">
                          <div class="image">
                             <img src="	https://i.pinimg.com/236x/ab/51/ca/ab51cad0a0cf998a41fef42337a40219.jpg"></img>
                          </div>
                              <div class="content">
                                 <div class="header">Industrial</div>
                                    <div class="description">
                                            Molly is a personal assistant living in Paris.
                                    </div>
                                 </div>
                                </div>
                                <div class="card">
                                     <div class="image">
                                        <img src="https://www.mydomaine.com/thmb/lhAzYRBNiEJLOE8mp_sUr9ESg4U=/700x0/filters:no_upscale():strip_icc()/cdn.cliqueinc.com__cache__posts__252735__scandinavian-interior-design-ideas-252735-1521559311454-image.700x0c-55a3393674e6476ab336857d0a7b7c16.jpg"></img>
                                     </div>
                                        <div class="content">
                                          <div class="header">scandinavian </div>
                                                <div class="description">
                                                      Elyse is a copywriter working in New York.
                                                </div>
                                          </div>
                                        </div>
                                        </div>
                                   
                                   
        <div class="ui link cards">
              <div class="card">
                <div class="image">
                  <img src="	https://construction2style.com/wp-content/uploads/2023/07/1C5A0897-scaled.jpg"></img>
                </div>
                  <div class="content">
                    <div class="header">Modern</div>
                      <div class="description">
                          Matthew is an interior designer living in New York.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                <div class="image">
                  <img src="https://i.pinimg.com/736x/97/12/d5/9712d5e2d16feb2c1810691d21755423.jpg"></img>
                </div>
                  <div class="content">
                    <div class="header">French Country</div>
                      <div class="description">
                          Matthew is an interior designer living in New York.
                      </div>
                    </div>
                  </div>
                        <div class="card">
                                     <div class="image">
                                        <img src="	https://hips.hearstapps.com/hmg-prod/images/rustic-decor-2-1574110350.jpg"></img>
                                     </div>
                                        <div class="content">
                                          <div class="header">Traditional</div>
                                                <div class="description">
                                                      Elyse is a copywriter working in New York.
                                                </div>
                                          </div>
                                        </div>
                                        </div>
                                        <div class="ui link cards">
              <div class="card">
                <div class="image">
                  <img src="https://i.pinimg.com/originals/b1/c9/a7/b1c9a75a3ea3fb93410d981c0841bc60.jpg"></img>
                </div>
                  <div class="content">
                    <div class="header">Contemporary</div>
                      <div class="description">
                          Matthew is an interior designer living in New York.
                      </div>
                    </div>
                  </div>     <div class="card">
                          <div class="image">
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5Z93wqY-ypfD3ybS4t2f7B4JEaindoXriAIdN0JSdtzowAZswV285ifed_f5dkcMnjw&usqp=CAU"></img>
                          </div>
                              <div class="content">
                                 <div class="header">Coastal</div>
                                    <div class="description">
                                            Molly is a personal assistant living in Paris.
                                    </div>
                                 </div>
                                </div>
                                <div class="card">
                                     <div class="image">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVv9CBoz6X-uXxbsq6I4mw_XE2QOKxMV8Dw&usqp=CAU"></img>
                                     </div>
                                        <div class="content">
                                          <div class="header">Midcentury</div>
                                                <div class="description">
                                                      Elyse is a copywriter working in New York.
                                                </div>
                                          </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        <hr></hr>
    {/* <div style={containerStyle}>
      <div className="card" style={cardStyle}>
        <div className='imgimage-container'>
          <img
            className="card-img-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM3aKKIXcuPfy7x7rZySfHligdkUac1yMR0A&s"
            alt="Card image cap"
            style={imageStyle}
          />
        </div>
        <div className="card-body">
          <div style={btnContainerStyle}>
            <p>
              {showContent
                ? 'Italian Style.'
                : 'Light airy spaces are the key to efficiently achieving modern Italian design. Italian design incorporates clever use of furniture, and light all while retaining the architectural features. Maximum utilization of space is achieved by concealed and smart storage options that create a clean, clutterless look.'}
            </p>
            <a href="#" className="btn btn-primary" style={btnPrimaryStyle} onClick={toggleContent}>
              {showContent ? 'Read More' : 'Read less'}
            </a>
          </div>
        </div>
      </div>
  
     </div> */}
<Feedback/>
  <Labelfile/>
    </>
    
  );
}

export default Service;
