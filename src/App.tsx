import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./layers/Footer";
import Header from "./layers/Header";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import BeansPage from "./pages/BeansPage";
import CoursesPage from "./pages/CoursesPage";
import ContactsPage from "./pages/ContactsPage";
import ProductPage from "./pages/ProductPage";
import GalleryPage from "./pages/GalleryPage";
import ScrollManager from "./components/ScrollManager";
import FavoritesPage from "./pages/FavoritesPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter basename="coffee-explorer">
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/:id" element={<ProductPage type="drink" />} />
          <Route path="/beans" element={<BeansPage />} />
          <Route path="/beans/:id" element={<ProductPage type="bean" />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}
