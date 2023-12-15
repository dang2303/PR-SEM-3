import React from "react";
import ArtWorkList from "../Components/Page/ArtWork/ArtWorkList";
import Slide from "../Components/Other/slider";
import BackgroundSlider from "../Components/Other/backgroundSlider";

function Home() {
  return (
    <div className="container-fluid">
      <BackgroundSlider />
      <ArtWorkList />
    </div>
  );
}

export default Home;
