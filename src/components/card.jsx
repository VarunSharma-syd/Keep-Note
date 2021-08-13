import React from "react";

function Card(props){
    console.log(props);
    return (<div>
        <h1>{props.name}</h1>
        <img className="image" src={props.image} alt="Sachin"/>
        <h4>Phone No: {props.phone}</h4>
        <h4>Email ID: {props.email}</h4>
        </div>);
}

export default Card;