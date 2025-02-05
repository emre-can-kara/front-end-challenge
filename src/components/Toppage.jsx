import colors from "../colors"; 
import { useDarkMode } from "./context/DarkModeContext";
import { useLanguage } from "./context/LanguageContext";
import "./context/DarkMode.css";

function Toppage() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const { language, toggleLanguage, text } = useLanguage();

    return (
        <div style={{ 
            width: "100vw", 
            height: "658px", 
            backgroundColor: colors.morumsu, 
            position: "relative", // absolute yerine relative denedim
            top: "0", // top 
            left: "0",
            position:"absolute",
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            zIndex: "1"
        }}>

            {/* Sağ tarafı kaplayan span */}
            <span style={{
                width: "25%", 
                height: "100%", 
                right: "0",
                position: "absolute",
                backgroundColor: "#CBF281",
            }}></span>

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
                        {text.mySection?.intro || ""}
                    </h1>
                    <p style={{ 
                        color: colors.Beyaz, 
                        fontSize: "24px", 
                        textAlign: "center", 
                        margin: "10px 0"
                    }}>
                        {text.mySection?.intro2 || ""}
                    </p>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <a href={text.mySection?.socials?.[1]?.link} target="_blank" rel="noopener noreferrer">
                            <img src={text.mySection?.socials?.[1]?.logo} alt="GitHub"/>
                        </a>
                        <a href={text.mySection?.socials?.[0]?.link} target="_blank" rel="noopener noreferrer">
                            <img src={text.mySection?.socials?.[0]?.logo} alt="LinkedIn"/>
                        </a>
                    </div>
                </div>
                <img src="pictures/hero-right.png" alt="Profile" 
                    style={{ width: "500px", height: "375px", borderRadius: "10px" }} />
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
            }} onClick={toggleDarkMode} className="dark-mode-button">
                <label className="toggle-switch">
                    <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode}/>
                    <span className="slider"></span>
                </label>
               DARK MODE

            </button>

            <h1 style={{
                color: colors.Yesilimsi,
                position: "absolute",
                top: "15px",
                left: "350px",
                fontSize: "32px"
            }}>emre</h1>

            {/* Dil Değiştirme Butonu */}
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
            }} onClick={toggleLanguage}>
                <span style={{ color: colors.Yesilimsi }}> {language === "en" ? "TÜRKÇE" : "ENGLISH"} </span>
            </button>
        </div>
    );
}

export default Toppage;
