import RageProvider from "./context/RageContext";
import Gauge from "./components/Gauge";
import Viewer from "./components/Viewer";
import Form from "./components/Form";

function App() {
  return (
    <RageProvider>
      <div className="App" style={{marginTop: '15%', display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: 'column'}}>
        <Gauge  />
        <Viewer />
        <Form />
      </div>
    </RageProvider>
  );
}

export default App;
