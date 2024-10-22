import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import ReactRouter from './React_Router/ReactRouter.jsx'




// set in Root Element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* set Router Provider */}
    <ReactRouter></ReactRouter>
  </StrictMode>,
)