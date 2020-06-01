import React from "react";
import "../css/LunchPickerPanel.css";
import "../components/LunchSpotDetails";
import LunchSpotDetails from "../components/LunchSpotDetails";

function LunchPickerPanel() {
  return (
    <div className="PickerPanel">
      Panel
      <LunchSpotDetails />
    </div>
  );
}

export default LunchPickerPanel;
