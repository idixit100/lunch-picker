import React from "react";
import "../css/LunchSpotDetails.css";

function LunchSpotDetails({ restaurant }) {
  return (
    <table className="LunchSpotDetails">
      <tbody>
        <tr>
          <th>Name:</th>
          <td>{restaurant.name}</td>
        </tr>
        <tr>
          <th>Location:</th>
          <td>{restaurant.address}</td>
        </tr>
        <tr>
          <th>Link:</th>
          <td><a href={restaurant.link}>{restaurant.link}</a></td>
        </tr>
      </tbody>
    </table>
  )
}

export default LunchSpotDetails;
