import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import NavBar from './Navbar.tsx'
import BrandTable from './BrandTable.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <BrandTable />
  </StrictMode>,
)
