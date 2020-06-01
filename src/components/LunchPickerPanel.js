import React, { useState } from "react";
import "../css/LunchPickerPanel.css";
import "../components/LunchSpotDetails";
import LunchSpotDetails from "../components/LunchSpotDetails";
import statusRange from "../StatusEnum"
import { fetchRestaurants } from "../services"

const pickRandomRestaurant = (restaurants) => {
  const randomIndex = Math.floor(Math.random() * restaurants.length);
  return restaurants[randomIndex];
}

function LunchPickerPanel({ restaurantsFetchUrl }) {
  const [restaurants, setRestaurants] = useState(() => []);
  const [randomRestaurant, setRandomRestaurant] = useState({});
  const [status, setStatus] = useState(() => statusRange.IDLE)

  const handleClick = () => {
    if(status === statusRange.RESOLVED) {
      setRandomRestaurant(pickRandomRestaurant(restaurants))
      return;
    }

    setStatus(statusRange.PENDING)
    fetchRestaurants(restaurantsFetchUrl)
      .then(
        restaurants => {
          setStatus(statusRange.RESOLVED);
          setRestaurants(restaurants);
          setRandomRestaurant(pickRandomRestaurant(restaurants))
      })
      .catch(() => {
        setStatus(statusRange.REJECTED)
      })
  }

  if (status === statusRange.PENDING) {
    return <div>"Loading..."</div>
  }

  return (
    <div className="PickerPanel">
      {(status === statusRange.REJECTED)? <div className="error">Error, request to get restaurants failed</div> : null}
      <button type="button" onClick={() => handleClick()}>Pick a Lunch Spot!</button>
      <button type="button" disabled={status === statusRange.IDLE} onClick={() => handleClick()}>Spin Again!</button>
      {(status === statusRange.RESOLVED)? <LunchSpotDetails restaurant={randomRestaurant} /> : null}
    </div>
  );
}

export default LunchPickerPanel;