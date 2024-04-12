import React from 'react';

function Boot() {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  };

  const cardStyle = {
    width: '18rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '20px',
    boxShadow: '0 4px 8px rgba(5, 5, 5, 0.8)',
    backgroundColor: 'Orange',
    display: 'flex',
    flexDirection: 'column', // Align items vertically
  };

  const imageStyle = {
    width: '100%',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  };

  const btnContainerStyle = {
    marginTop: 'auto', // Align at the bottom of the card
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

  return (
    <div style={containerStyle}>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM3aKKIXcuPfy7x7rZySfHligdkUac1yMR0A&s"
          alt="Card image cap"
          style={imageStyle}
        />
        <div className="card-body">
          <h5 className="card-title">Home Interiors</h5>
          <p className="card-text">
          The quality of the house is evident in every corner. A dedication to outstanding quality penetrates every aspect, from careful interior design to well chosen areas.
          </p>
          <div style={btnContainerStyle}>
            <a href="#" className="btn btn-primary" style={btnPrimaryStyle}>
              Read More
            </a>
          </div>
        </div>
      </div>

      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSydM8K3MZlkz4Ss_FVqQ2VXuRs7DJjoYxA6Q&usqp=CAU"
          alt="Card image cap"
          style={imageStyle}
        />
        <div className="card-body">
          <h5 className="card-title">Kitchen Interior</h5>
          <p className="card-text">
          Families get together in this busy center to feed their appetites and strengthen their relationships. There, lessons are taught, a sense of community is fostered, and tales are shared. 
          </p>
          <div style={btnContainerStyle}>
            <a href="#" className="btn btn-primary" style={btnPrimaryStyle}>
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src="https://media.licdn.com/dms/image/D4E12AQFecH7r7fSzsg/article-cover_image-shrink_720_1280/0/1689767873793?e=2147483647&v=beta&t=o1q3ZTH-3rwVNk__fqUFJPOJyVUH8FWfPO-lWkHOM30"
          alt="Card image cap"
          style={imageStyle}
        />
        <div className="card-body">
          <h5 className="card-title">Office Interiors</h5>
          <p className="card-text">
          In a world where work is an integral part of life, the office becomes a second home. A well-designed office interior, therefore, is a commitment to the comfort, well-being, and success of its occupants.
          </p>
          <div style={btnContainerStyle}>
            <a href="#" className="btn btn-primary" style={btnPrimaryStyle}>
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXicIghQsNoi2hDqP8GXCA6fJc3tWdPCHGYw&usqp=CAU"
          alt="Card image cap"
          style={imageStyle}
        />
        <div className="card-body">
          <h5 className="card-title">Lab Interiors</h5>
          <p className="card-text">
          Laboratory interiors should not only facilitate research but also inspire the next generation of scientists, 
          creating spaces where curiosity is ignited and dreams of discovery come to life.
          </p>
          <div style={btnContainerStyle}>
            <a href="#" className="btn btn-primary" style={btnPrimaryStyle}>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boot;
