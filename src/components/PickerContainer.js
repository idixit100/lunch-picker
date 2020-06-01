import React from "react";
import "../css/PickerContainer.css";
import LunchPickerPanel from "./LunchPickerPanel";

const mock_request_url = "http://localhost:3001/restaurants"

function PickerContainer() {
  return (
    <div className="PickerContainer">
      <LunchPickerPanel restaurantsFetchUrl={mock_request_url}  />
    </div>
  );
}

export default PickerContainer;
