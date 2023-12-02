import React from 'react'
import Pricing from './Pricing'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nave from './Nave';
import Head from './Head';
import Mid from './Mid';
import Bottom from './Bottom';
import Testimonial from './Testimonial';
import Faq from './Faq';
import Footer from './Footer';
function App() {
  // React.useEffect(() => {
  //   AOS.init({
  //     duration : 2000
  //   });
  // }, []);
  return (
    <>
     <Nave />
      <Head />
      <Mid />
      <Bottom  />
      <Faq  />
      <Pricing  />
      <Testimonial  />
      <Footer />
    </>
  )
}

export default App
