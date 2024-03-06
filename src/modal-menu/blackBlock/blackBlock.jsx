import React from "react";
import './dist/blackBlock.css'

function BlackBlock(props){
   return(
      <div onClick={() => props.ResetPasswords()} className="BlackBlock"></div>
   )
}

export default BlackBlock