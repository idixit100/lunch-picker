import React from "react";
import "../css/PickerContainer.css";
import LunchPickerPanel from "./LunchPickerPanel";
import { mock_request_url } from "../apis";

function PickerContainer() {
  return (
    <div className="PickerContainer">
      <LunchPickerPanel restaurantsFetchUrl={ mock_request_url } />
    </div>
  );
}

export default PickerContainer;
