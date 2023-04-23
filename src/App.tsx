import { Provider as ReduxProvider } from 'react-redux';
import { Navbar } from './components';
import { Home } from './pages';
import store from './redux/store';
import { LayoutContainer } from './styled-components';

function App() {
  return (
    <ReduxProvider store={store}>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </ReduxProvider>
  );
}

export default App;
