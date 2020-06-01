import React from "react";
import "../css/App.css";
import PickerContainer from "./PickerContainer";
import LunchRecommendationForm from "./LunchRecommendationForm";
import NavBar from "./NavBar";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <PickerContainer />
      <LunchRecommendationForm />
    </div>
  );
}
