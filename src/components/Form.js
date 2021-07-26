import React, { useState } from "react";

function Form( {handleFirst,handleLast,firstName,lastName} ) {
  return (
    <form>
      <input type="text"
        onChange={handleFirst}
        placeHolder="enter first name"
        value={firstName} />
      <input
        type="text"
        onChange={handleLast}
        placeHolder="enter last name"
        value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
