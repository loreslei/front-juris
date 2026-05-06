import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./Pages/Intro";
import Processual from "./Pages/Processual";
import NotFound from "./Pages/404";
import Components from "./Pages/Components";
import PrivatePolicy from "./Pages/PrivatePolicy";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Intro />}/>
      <Route path='*' element={<NotFound />}/>
      <Route path='/processual/new' element={<Processual />}/>
      <Route path='/components' element={<Components />}/>
      <Route path='/politica-de-privacidade' element={<PrivatePolicy />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
