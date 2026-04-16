import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./Pages/Intro";
import Process from "./Pages/Process";
import NotFound from "./Pages/404";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Intro />}/>
      <Route path='*' element={<NotFound />}/>
      <Route path='/process/new' element={<Process />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
