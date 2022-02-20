import RageProvider from "./context/RageContext";
import Gauge from "./components/Gauge";

function App() {
  return (
    <RageProvider>
      <div className="App">
        <Gauge  />
      </div>
    </RageProvider>
  );
}

export default App;
