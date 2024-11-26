// import React, { useState } from "react";

// function BookingForm({availableTimes, dispatch }) {
//   // State variables for form fields
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [guests, setGuests] = useState(1);
//   const [occasion, setOccasion] = useState("");

// //   // State for available times
// //   const [availableTimes, setAvailableTimes] = useState([
// //     "17:00",
// //     "18:00",
// //     "19:00",
// //     "20:00",
// //     "21:00",
// //     "22:00",
// //   ]);

//   const handleDateChange = (e) => {
//     const newDate = e.target.value;
//     setDate(newDate);

//     // Dispatch an action to update available times based on the new date
//     dispatch({ type: "UPDATE_TIMES", date: newDate });
//   };

//   // Form submission handler
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const reservationData = {
//       date,
//       time,
//       guests,
//       occasion,
//     };
//     console.log("Reservation submitted:", reservationData);
//     alert("Reservation submitted successfully!");
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px", maxWidth: "300px" }}>
//       {/* Date */}
//       <label htmlFor="res-date">Choose date</label>
//       <input
//         type="date"
//         id="res-date"
//         value={date}
//         onChange={handleDateChange}
//         required
//       />

//       {/* Time */}
//       <label htmlFor="res-time">Choose time</label>
//       <select
//         id="res-time"
//         value={time}
//         onChange={(e) => setTime(e.target.value)}
//         required
//       >
//         <option value="" disabled>
//           Select time
//         </option>
//         {availableTimes.map((timeOption) => (
//           <option key={timeOption} value={timeOption}>
//             {timeOption}
//           </option>
//         ))}
//       </select>

//       {/* Number of Guests */}
//       <label htmlFor="guests">Number of guests</label>
//       <input
//         type="number"
//         id="guests"
//         min="1"
//         max="10"
//         value={guests}
//         onChange={(e) => setGuests(e.target.value)}
//         required
//       />

//       {/* Occasion */}
//       <label htmlFor="occasion">Occasion</label>
//       <select
//         id="occasion"
//         value={occasion}
//         onChange={(e) => setOccasion(e.target.value)}
//         required
//       >
//         <option value="" disabled>
//           Select occasion
//         </option>
//         <option>Birthday</option>
//         <option>Anniversary</option>
//       </select>

//       {/* Submit Button */}
//       <button type="submit" style={{ backgroundColor: "#f4b400", color: "#fff", padding: "10px", border: "none" }}>
//         Make Reservation
//       </button>
//     </form>
//   );
// }

// export default BookingForm;


import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setFormData({ ...formData, date: selectedDate });
    dispatch({ type: "dateChange", payload: selectedDate }); // Update available times
  };

  /* global submitAPI */
  const handleSubmit = (e) => {
    e.preventDefault();
    const isSubmitted = submitAPI(formData); // Submit booking data
    if (isSubmitted) {
      alert("Reservation successfully made!");
    } else {
      alert("Failed to make a reservation. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px", maxWidth: "300px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={formData.date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;
