import './App.css';
import './css/All.css';
import './css/framework.css';
import './css/layout.css';
import Header from './components/Header';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Whyus from './components/Whyus';
import Steps from './components/Steps';
import Testimonial from './components/Testimonial'
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Whyus />
      <Steps />
      <Testimonial />
      <About />
      <Footer />
    </>
  );
}

export default App;
