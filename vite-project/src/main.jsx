import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
// import Basics from "./Basics.jsx";
// import CompBasics from "./components/CompBasics.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Basics/> */}
    {/* <CompBasics/> */}

    
  </StrictMode>,
)
