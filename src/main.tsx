import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='NavBarContainer'>
      <div className='NavBarPrimaryContainer'>
        <div className='NavBarPrimaryLogo'>Logo</div>
        <div className='NavBarPrimarySearchBar'>Search</div>
        <div className='NavBarPrimarySignIn'>Sign In</div>
      </div>
      <div className='NavBarSecondaryContainer'>
        Website made with React!
      </div>
    </div>
    <App />
  </StrictMode>,
)
