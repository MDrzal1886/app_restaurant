import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import Footer from "./layouts/Footer";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTopButton from "./layouts/ScrollToTopButton";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <div className="container-fluid p-0 position-relative">
        <Header />
        <main className="min-vh-50">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/menu" component={MenuPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/gallery" component={GalleryPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={ErrorPage} />
          </Switch>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
