import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./layers/Footer";
import Header from "./layers/Header";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import BeansPage from "./pages/BeansPage";
import CoursesPage from "./pages/CoursesPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return (
    <BrowserRouter basename="/coffee-explorer">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/beans" element={<BeansPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
