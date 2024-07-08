import "./App.css";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";

function App() {
  return (
      <Main>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer />
      </Main>
  );
}

export default App;
