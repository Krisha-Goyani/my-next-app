import '../styles/globals.css';
import { AppProvider } from '../components/AppContext';
import { ProfileProvider } from '../context/ProfileContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ProfileProvider>
        <Component {...pageProps} />
      </ProfileProvider>
    </AppProvider>
  );
}

export default MyApp;