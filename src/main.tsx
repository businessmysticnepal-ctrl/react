import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import './index.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <HashRouter>
 <StrictMode>
    <BrowserRouter basename="/react/">
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
  </HashRouter>,
)
