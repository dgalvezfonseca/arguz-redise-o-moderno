import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById("root")!).render(<App />);
