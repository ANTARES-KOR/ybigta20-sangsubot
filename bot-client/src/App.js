import RageProvider from "./context/RageContext";
import Gauge from "./components/Gauge";
import Viewer from "./components/Viewer";

function App() {
  return (
    <RageProvider>
      <div className="App">
        <Gauge  />
        <Viewer />
      </div>
    </RageProvider>
  );
}

export default App;
