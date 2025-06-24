import '../styles/globals.css'; // keep this line if you’re using Tailwind or have this CSS file
import Navbar from '../components/Navbar'; // Capital N to match your file

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
