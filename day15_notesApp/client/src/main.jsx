import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PrevNoteContextProvider from './Contexts/PrevContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrevNoteContextProvider>

    <App />
    </PrevNoteContextProvider>
  </StrictMode>,
)
