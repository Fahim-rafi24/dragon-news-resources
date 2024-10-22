import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import ReactRouter from './React_Router/ReactRouter.jsx'
import { UserContext } from './UserContext/UserContext.jsx'




// set in Root Element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <ReactRouter></ReactRouter>
    </UserContext>
  </StrictMode>,
)