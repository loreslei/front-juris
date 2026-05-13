import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./Pages/Intro";
import Processual from "./Pages/Processual";
import NotFound from "./Pages/404";
import PrivatePolicy from "./Pages/PrivatePolicy";
import ScrollToTop from "./components/utils/ScrollToTop";
import Test from "./Pages/Test";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Intro />}/>
      <Route path='*' element={<NotFound />}/>
      <Route path='/processual/new' element={<Processual />}/>
      <Route path='/politica-de-privacidade' element={<PrivatePolicy />}/>
      <Route path='/test' element={<Test />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
