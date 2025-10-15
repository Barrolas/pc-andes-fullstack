import './App.css';
import NavbarPrincipal from './components/Navbar';
import BannerPrincipal from './components/Banner';
import Informacion from './components/Informacion';
import Cotizador from './components/Cotizador';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavbarPrincipal />
      <header>
        <BannerPrincipal />
      </header>
      
      <main>
        <Informacion />
        <Cotizador />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
