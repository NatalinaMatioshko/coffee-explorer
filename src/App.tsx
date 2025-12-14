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

  );
}

export default App;
