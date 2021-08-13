import React from "react";
import ReactDom from "react-dom";
import App from "./components/App.jsx"; 
import Card from "./components/card";

ReactDom.render(<App /> , document.getElementById("root"));

/*ReactDom.render(<div>
    <header>
    <h1>Indian Cricket Player</h1>
    </header>
    <App />
    {<Card 
    name="Sachin"
    image="https://sportstar.thehindu.com/cricket/article31080794.ece/ALTERNATES/LANDSCAPE_1200/Sachin-Tendulkar"
    phone="1232133"
    email="sachin@in.com"
      />
      <Card 
      name="Sehwag"
      image="https://www.crictracker.com/wp-content/uploads/2020/04/Virender-Sehwag.jpg"
      phone="12133"
      email="sehwag@in.com"
        />
        <Card 
    name="Rahul"
    image="http://www.thesportsmirror.com/wp-content/uploads/2013/01/Rahul_Dravid_CD.jpg"
    phone="1232133"
    email="rahul @in.com"
    />}
    </div> , document.getElementById("root"));*/