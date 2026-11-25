import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx';
// import Basics from "./Basics.tsx";
import CompBasics from "./CompBasics.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Basics/> */}
    <CompBasics/>

    
  </StrictMode>,
)
