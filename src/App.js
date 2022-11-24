import {ChartLine, Footer, Header, Main} from './components/index'
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeContext.Provider value={""}>
    <Main />
    </ThemeContext.Provider>
  );
}

export default App;
