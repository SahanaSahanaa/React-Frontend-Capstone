import React, { useState } from "react";

function BookingForm() {
  // State variables for form fields
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  // State for available times
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationData = {
      date,
      time,
      guests,
      occasion,
    };
    console.log("Reservation submitted:", reservationData);
    alert("Reservation submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px", maxWidth: "300px" }}>
      {/* Date */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      {/* Time */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="" disabled>
          Select time
        </option>
        {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>

      {/* Number of Guests */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      {/* Occasion */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="" disabled>
          Select occasion
        </option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      {/* Submit Button */}
      <button type="submit" style={{ backgroundColor: "#f4b400", color: "#fff", padding: "10px", border: "none" }}>
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;