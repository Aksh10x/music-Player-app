import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import { SongProvider } from "./songcontext";
import Playback from "./components/playback/playback";

function App() {
  return (
    <SongProvider>
    <div className="bg-black">
      <Navbar/>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </Router>
      <Playback/>
    </div>
    </SongProvider>
  );
}

export default App;
