import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'atropos/css'
// import 'https://cdn.jsdelivr.net/npm/atropos@2/atropos.min.mjs';

// import Atropos from 'atropos/atropos.min.js';
// import 'atropos/atropos.min.css'



createRoot(document.getElementById('root')!).render(
      <StrictMode>
            <App />
      </StrictMode>,
)

// Atropos({
      // el: '.atropos',
// });