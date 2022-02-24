import RageProvider from "./context/RageContext";
import Viewer from "./components/Viewer";
import "./tailwind.css";

function App() {
  return (
    <RageProvider>
      <div className="App">
        <Viewer />
      </div>
    </RageProvider>
  );
}

export default App;
