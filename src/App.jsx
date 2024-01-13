import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Pricing } from "./pages/Pricing.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";

function App() {

  return (
    <>
       <BrowserRouter>
          <Routes>
             <Route path={'/'} element={<Home />} />
             <Route path={'/pricing'} element={<Pricing />} />
             <Route path={'/about'} element={<About />} />
             <Route path={'/contact'} element={<Contact />} />
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
