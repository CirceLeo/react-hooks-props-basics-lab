import React from "react";
import Links from "./Links.js"

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      {/* <p>{!!props.bio ? props.bio : null }</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

// function Bio(props){
//   if (!props.bio){
//     return null
//   } else return (
//     <>
//     <p>props.bio </p>
//     </>
//   )
// }


export default About;
