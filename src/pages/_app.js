import '../styles/globals.css';
import { AppProvider } from '../components/AppContext';
import { NavProvider } from '../context/NavContext';
import { UserProvider } from '../context/UserContext';
import { PriceProvider } from '../context/PriceContext';

function MyApp({ Component, pageProps }) {
  return (
    <NavProvider>
      <AppProvider>        
          <UserProvider>
            <PriceProvider>
              <Component {...pageProps} />
            </PriceProvider>
          </UserProvider>
      </AppProvider>
    </NavProvider>
  );
}

export default MyApp;