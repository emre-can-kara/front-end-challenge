import colors from "../colors";
import { useLanguage } from "./context/LanguageContext";
function Bottom () {
    const { text } = useLanguage();
return (

<>

<div style={{
        display: "flex",
        gridTemplateColumns: "1fr 1fr 1fr", // 3 eşit sütun
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.morumsu,
        width: "100vw",
        height: "25vw",
        color: "white",
        padding: "20px",
        gap: "20px",
        right:650,
        borderRadius: "10px",
        zIndex:1,  position:"relative", top:1300}}> 
<div style={{ textAlign: "right", paddingRight: "20px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#D4FF00" }}>
          Profil
        </h2>
        <p><strong>{text.mySection.BirthYear}</strong></p>
        <p><strong>{text.mySection.residency}</strong></p>
        <p><strong>{text.mySection.Role}</strong></p>
      </div>
   
       <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
          src="pictures/image 2.png"
          alt="Profile"
        />
      </div>
   
       <div style={{ textAlign: "left", maxWidth: "600px", paddingLeft: "20px" }}>
        <p>{text.mySection.AboutMe}</p>
      </div>
</div>

</>




)


}

export default Bottom;