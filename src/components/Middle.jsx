import colors from "../colors";
import { useLanguage } from "./context/LanguageContext";

function Middle() {
  const { language, text } = useLanguage();

  return (
    <div
      style={{
        marginTop: "10px",
        position: "absolute",
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        zIndex: 0,
        top: 600,
        right: 0,
        padding: "50px",
      }}
    >
 
      <h2
        style={{
          color: colors.morumsu,
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        {text.skillsSection.title} 
      </h2>

    
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 3fr)", 
          gap: "50px",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        {text.skillsSection.skills.map((skill, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              background: "#f9f9f9",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              style={{ width: "50px", height: "50px" }}
            />
            <p style={{ color: "#000", fontSize: "16px", fontWeight: "500" }}>
              {skill.name} 
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Middle;
