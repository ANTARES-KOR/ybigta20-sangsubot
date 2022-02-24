import RageProvider from "./context/RageContext";
import Gauge from "./components/Gauge";
import Viewer from "./components/Viewer";
import PlayAudio from "./components/Audio";
import Form from "./components/Form";

function App() {
  return (
    <RageProvider>
      <div className="App" style={{marginTop: '15%', display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: 'column'}}>
        <Gauge  />
        <Viewer />
        <PlayAudio />
        <Form />
      </div>
    </RageProvider>
  );
}

export default App;
