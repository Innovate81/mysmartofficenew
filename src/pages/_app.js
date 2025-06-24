import '../styles/globals.css'; // keep this if you’re using it
import Navbar from '../components/navbar'; // adjust if your filename is Navbar.js

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
