import React, { useEffect } from "react";
import colors from "../src/colors";

function Middle () {
    useEffect(() => {
        document.body.style.backgroundColor = colors.beyaz; 
      }, []);
return (
<>

<div> 
<h2>
Orta Kısım

</h2>

</div>



</>

)

}

export default Middle;