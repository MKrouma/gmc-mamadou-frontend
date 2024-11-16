import { StrictMode } from 'react'
import { Provider } from "./components/ui/provider"
import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
