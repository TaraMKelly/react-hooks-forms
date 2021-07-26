import React, { useState } from "react";
import Form from "./Form";


function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    
    function handleFirst(e) {
        setFirstName(e.target.value)
      }
      function handleLast(e) {
        setLastName(e.target.value)
      }

      return(
          <Form 
            firstName={firstName}
            lastName={lastName}
            handleFirst={handleFirst}
            handleLast={handleLast}
          />
      )
      
}

export default App