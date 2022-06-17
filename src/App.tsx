import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { ShowAnimal } from "./components/showAnimal";
import { SingleAnimal } from "./components/singleAnimal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowAnimal />} />
          <Route path="/animal/:id" element={<SingleAnimal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
