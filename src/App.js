import logo from './logo.svg';
import './App.css';
import './components/NavBar'
import NavBar from './components/NavBar';
import { AppRouter } from './AppRoutes';

function App() {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
}

export default App;
