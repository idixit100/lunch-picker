import React from "react";
import "../css/App.css";
import PickerContainer from "./PickerContainer";
import LunchRecomendationForm from "./LunchRecommendationForm";
import NavBar from "./NavBar";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <PickerContainer />
      <LunchRecomendationForm />
    </div>
  );
}
