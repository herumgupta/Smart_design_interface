
import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Smart Design AI</h2>

        <p className="menu-title">Menu</p>

        <ul className="menu-list">
          <li className="active">Home</li>
          <li>Design Request</li>
          <li>Brands</li>
          <li>Campaigns</li>
          <li>Image Generator</li>
          <li>Text Generator</li>
          <li>Analytics</li>
          <li>Team Manager</li>
          <li>Help</li>
        </ul>

        <div className="user">
          <p>Herum Gupta</p>
          <small>Workspace Member</small>
        </div>

        <p className="logout">Log out</p>
      </aside>

      <main className="main">
        <header className="header">
          <p>Home / Dashboard</p>
        </header>

        <section className="welcome">
          <h1>Welcome to Smart Design AI</h1>
          <p>Manage your design work from one place.</p>
        </section>

        <h2 className="section-title">Create a campaign</h2>

        <div className="card-container">
          <div className="card">
            <h3>Get Started with AI</h3>
            <p>Use AI tools to help with design work.</p>
          </div>

          <div className="card">
            <h3>Start with a Template</h3>
            <p>Templates for creating campaigns.</p>
          </div>

          <div className="card">
            <h3>Add a New Brand</h3>
            <p>Add and manage brand details.</p>
          </div>

          <div className="card">
            <h3>Generate Image</h3>
            <p>Create images for your projects.</p>
          </div>

          <div className="card">
            <h3>Generate Text</h3>
            <p>Create text for your campaigns.</p>
          </div>
        </div>

        <footer>
          Smart Design AI
        </footer>
      </main>
    </div>
  );
}

export default App;
