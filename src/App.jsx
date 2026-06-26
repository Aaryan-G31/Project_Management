import Sidebar from "./Utility/Sidebar.jsx";
import Navbar from "./Utility/Navbar.jsx";

function App() {
  return (
    <div data-theme="forest" className="min-h-screen bg-base-100 text-base-content">
      <div className="flex">
        <Sidebar>
        <main className="flex-1 p-6">
          <h1>Content Main</h1>
        </main>
        </Sidebar>
      </div>
    </div>
  );
}

export default App;
