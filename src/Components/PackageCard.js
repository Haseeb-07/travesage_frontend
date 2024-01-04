import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PackageCard({ packageData }) {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [hideConfirmButton, setHideConfirmButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleBookNow = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    setBookingConfirmed(true);
    setHideConfirmButton((prevValue) => !prevValue);
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
    setBookingConfirmed(false);
  };

  return (
    <>
    
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={packageData.image} style={{ objectFit: 'contain', height: '500px'}} />
        <Card.Body>
          <Card.Title>{packageData.title}</Card.Title>
          <Card.Text>{packageData.description}</Card.Text>
          <Button variant="primary" onClick={handleBookNow}>
            Book Now
          </Button>
        </Card.Body>
      </Card>

      {showModal && (
        <div style={{ marginTop: '20px' }}>
          <div>
            <h2>Confirm Booking</h2>
            <p>Are you sure to book this tour?</p>
            {bookingConfirmed && (
              <p>Your tour booking request has been received. You will be notified by mail.</p>
            )}
          </div>
          <div>
            <button style={{ marginRight: '10px' }} className="btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
            <button
              style={{ display: hideConfirmButton ? 'none' : 'inline-block' }}
              className="btn-primary"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default PackageCard;
