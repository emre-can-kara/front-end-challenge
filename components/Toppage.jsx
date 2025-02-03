import { useState } from "react";
import colors from "../src/colors"; 
import './ToppageC.css';
import { data } from "../language";




function Toppage () {

    const [modeOn, setModeOn] = useState(false);

    const handleDarkMode = () => {
        if (!modeOn) {
          document.body.style.filter = "invert(100%)";
        } else {
          document.body.style.filter = "invert(0%)";
         
        }
       
        setModeOn(!modeOn);  // Deneme 1
      };

     
  return (

    <div style={{ 
      width: "100%", 
      height: "658px", 
      backgroundColor: colors.morumsu, 
      position: "fixed",
      top: "0", 
      left: "0", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      zIndex: "1000" 
    }}>
        <span style={{width: "25%", 
      height: "658px", 
      right:"0",
      position:"fixed",
      backgroundColor: colors.Yesilimsi,}}></span>
      
      <div style={{ 
  width: "955px", 
  height: "369px", 
  display: "flex", 
  alignItems: "center", 
  justifyContent: "space-between", 
  padding: "20px", 
  borderRadius: "10px"
}}>
  <div>
    <h1 style={{ color: colors.Yesilimsi, fontSize: "36px", fontWeight: "bold" }}>
     {data.en.mySection.intro}
    </h1>
    <p style={{ color: colors.Beyaz, fontSize: "24px", position:"relative", textAlign:"center", right:"40px" }}>
    {data.en.mySection.intro2}
    </p>
    <div style={{ display: "flex", gap: "10px" }}>
  
    <img src={data.en.mySection.socials[1].logo} alt="GitHub"/>
        
  
     
        <img src={data.en.mySection.socials[0].logo} alt="LinkedIn" />
       
   
    </div>
  </div>
  <img src="pictures\hero-right.png" alt="Profile" style={{position:"relative", left:"300px", width: "500px", height:"375", borderRadius: "10px" }} />
</div>


      

      {/* Karanlık Moda Geç Butonu */}
      <button style={{ 
        backgroundColor: colors.Yesilimsi, 
        color: colors.morumsu, 
        cursor: "pointer", 
        position: "absolute", 
        top: "10px", 
        right: "350px", 
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px"
      }}>
         <label class="toggle-switch">
    <input type="checkbox" onClick={handleDarkMode}/>
    <span class="slider"></span>
</label>
        KARANLIK MODA GEÇ
        
      </button>

     <h1 style={{
      color:colors.Yesilimsi,
      position:"absolute",
      top:"15px",
      left:"350px",
      fontSize:"32px"
     }}>emre </h1>



      {/* EN Butonu */}
      <button style={{ 
        backgroundColor: colors.morumsu, 
        color: colors.Beyaz, 
        cursor: "pointer", 
        position: "absolute", 
        top: "10px", 
        right: "25%",
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px"
      }}>
      <span style={{color:colors.Yesilimsi}}>  TÜRKÇE'YE </span> GEÇ 
      </button>

    </div>
  );
}

export default Toppage;
