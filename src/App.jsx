import Toppage from './components/Toppage'
import './App.css'
import { DarkModeProvider } from "./components/context/DarkModeContext";
import Middle from './components/Middle'
import { LanguageProvider } from './components/context/LanguageContext';
import Bottom from './components/Bottom'



function App() {
  
   return (
      <div className="page-container">
    
        <LanguageProvider>
      <DarkModeProvider>

          <Toppage />
          <Middle />
          <Bottom/>
          </DarkModeProvider>
          </LanguageProvider>
          
      </div>
  ); 

}
export default App;
