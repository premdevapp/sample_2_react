import React from "react";

const Validation = (props) => {
  let validationMessage = "Text Long Enough";

  if (props.textLength <= 5) validationMessage = "Text Too Short";

  return (
    <p> {validationMessage} </p>
  ); /* (
    <div>
      {props.textLength < 5 ? <p>Text Too Short</p> : <p>Text Long Enough</p>}
    </div> 
    
  ); */
};

export default Validation;
