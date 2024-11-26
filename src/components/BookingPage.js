import React from "react";
import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch }) {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Reserve a Table</h1>
      <p>Fill in the form below to reserve your table.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
    </div>

  );
}

export default BookingPage;
