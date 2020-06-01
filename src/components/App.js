import React from "react";
import "../css/App.css";
import LunchPickerPanel from "./LunchPickerPanel";
import LunchRecomendationForm from "./LunchRecommendationForm";
import NavBar from "./NavBar";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <LunchPickerPanel />
      <LunchRecomendationForm />
    </div>
  );
}
