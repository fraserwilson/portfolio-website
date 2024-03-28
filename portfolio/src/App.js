import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <Router>
      <Route path = "/" element={<Layout/>}></Route>
    </Router>
  );
}

export default App;
