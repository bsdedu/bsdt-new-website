
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Wait for DOM to be ready
const renderApp = () => {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Root element not found - waiting for DOM");
    // Try again in case DOM is not fully loaded
    setTimeout(renderApp, 100);
    return;
  }
  
  console.log("Root element found, rendering app");
  const root = createRoot(rootElement);
  root.render(<App />);
  console.log("App rendered");
};

// Start the rendering process
console.log("Application starting to render");
renderApp();
