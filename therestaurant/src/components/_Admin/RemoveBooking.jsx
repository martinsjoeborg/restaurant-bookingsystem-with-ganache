import React, { useState } from "react";
import { useWeb3 } from "../../Services/web3Service";
import { removeBooking } from "../../Services/web3Service";

export const RemoveBooking = ({ bookingID, onBookingRemoved }) => {
  const [bookingId, setBookingId] = useState("");
  const web3Context = useWeb3();
  const { web3, contract } = web3Context || {};

  const handleRemoveBooking = async () => {
    if (web3 && contract && bookingID) {
      try {
        await removeBooking(web3, contract, bookingID, (error) => {
          if (error) {
            console.error("Error removing booking:", error);
          } else {
            console.log("Booking removed successfully!");
            setBookingId("");
            onBookingRemoved();
          }
        });
      } catch (error) {
        console.error("Error removing booking:", error);
      }
    }
  };

  return (
    <div className="remove-booking-container">
      <button onClick={handleRemoveBooking} className="admin-btn">
        Remove
      </button>
    </div>
  );
};
