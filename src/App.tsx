// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Footer from "./layers/Footer";
// import Header from "./layers/Header";
// import HomePage from "./pages/HomePage";
// import MenuPage from "./pages/MenuPage";
// import BeansPage from "./pages/BeansPage";
// import CoursesPage from "./pages/CoursesPage";
// import ContactsPage from "./pages/ContactsPage";
// import ProductPage from "./pages/ProductPage";

// function App() {
//   return (
//     <BrowserRouter basename="/coffee-explorer">
//       <Header />
//       <main>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/menu" element={<MenuPage />} />
//           <Route path="/beans" element={<BeansPage />} />
//           <Route path="/courses" element={<CoursesPage />} />
//           <Route path="/contacts" element={<ContactsPage />} />
//           <Route path="/product/:id" element={<ProductPage />} />
//         </Routes>
//       </main>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;
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
import FeedPage from "./pages/FeedPage";
import GalleryPage from "./pages/GalleryPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter basename="coffee-explorer">
      <ScrollToTop />
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
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
