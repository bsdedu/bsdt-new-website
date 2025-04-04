
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// More robust error handling for app initialization
const renderApp = () => {
  try {
    // Try to find the root element
    const rootElement = document.getElementById("root");
    
    if (!rootElement) {
      console.error("Root element not found - waiting for DOM");
      // Try again after a short delay
      setTimeout(renderApp, 100);
      return;
    }
    
    console.log("Root element found, rendering app");
    
    // Wrap the entire rendering process in a try-catch
    try {
      const root = createRoot(rootElement);
      root.render(
        <App />
      );
      console.log("App rendered successfully");
    } catch (error) {
      console.error("Error rendering app:", error);
    }
  } catch (error) {
    console.error("Critical error during app initialization:", error);
  }
};

// Start the rendering process when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded, starting app");
    renderApp();
  });
} else {
  console.log("Document already loaded, starting app");
  renderApp();
}
