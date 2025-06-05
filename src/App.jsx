// src/App.jsx
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-4">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
