import './App.css';
import AllRoute from './routes/AllRoute';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoute />
      <Footer />
    </div>
  );
}

export default App;
