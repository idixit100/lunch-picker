import React from "react";
import "./css/App.css";
import LunchPickerPanel from "./LunchPickerPanel";
import LunchRecomendationForm from "./LunchRecommendationForm";

export default function App() {
  return (
    <div className="App">
      <h1>Testing</h1>
      <LunchPickerPanel />
      <LunchRecomendationForm />
    </div>
  );
}
