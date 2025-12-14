import "./App.css";
import Footer from "./layers/Footer";
import Header from "./layers/Header";
import HomePage from "./pages/HomePage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
    //
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/menu" element={<MenuPage />} />
    //     <Route path="/beans" element={<BeansPage />} />
    //     <Route path="/courses" element={<CoursesPage />} />
    //     <Route path="/partners" element={<PartnersPage />} />
    //   </Routes>
    //   <Footer />
  );
}

export default App;
