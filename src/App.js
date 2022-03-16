import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Import css
import "./styles/App.scss";

//Import the pages
import Propos from "./views/propos";
import Error from "./views/error";
import Composants from "./views/composants";
import Homepage from "./views/homepage";
import Description from "./views/description";

//Import the component
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Homepage />} />
          <Route path="propos" element={<Propos />} />
          <Route path="model/:id" element={<Description />} />
          <Route path="composants" element={<Composants />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
