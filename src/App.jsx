import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./Pages/Intro";
import Processual from "./Pages/Processual";
import NotFound from "./Pages/404";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Intro />}/>
      <Route path='*' element={<NotFound />}/>
      <Route path='/processual/new' element={<Processual />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
