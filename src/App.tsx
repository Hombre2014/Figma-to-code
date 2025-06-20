import { BuilderContent } from "./components/BuilderContent";
import { customComponents } from "./builder-registry";
import "./App.css";

// Get API key from environment variables
const BUILDER_API_KEY = import.meta.env.VITE_BUILDER_API_KEY;

function App() {
  // Check if API key is configured
  if (!BUILDER_API_KEY || BUILDER_API_KEY === "your-api-key-here") {
    return (
      <div className="setup-message">
        <h1>Builder.io Setup Required</h1>
        <div className="setup-instructions">
          <h2>Next steps:</h2>
          <ol>
            <li>
              <strong>Get your Builder.io API key:</strong>
              <br />
              <a
                href="https://builder.io/content"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign up at Builder.io
              </a>{" "}
              and copy your API key from Settings
            </li>
            <li>
              <strong>Update your .env file:</strong>
              <br />
              Replace <code>your-api-key-here</code> with your actual API key
            </li>
            <li>
              <strong>Run the Builder.io code generation:</strong>
              <br />
              <code>
                npx "@builder.io/dev-tools@latest" code --url
                "https://builder.io/content/b9b09f82abdf4ba1a9beb224654c2b79/edit"
              </code>
            </li>
            <li>
              <strong>Restart your development server</strong>
            </li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <BuilderContent
        apiKey={BUILDER_API_KEY}
        model="page"
        customComponents={customComponents}
      />
    </div>
  );
}

export default App;
