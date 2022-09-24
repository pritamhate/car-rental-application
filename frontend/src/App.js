import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      {/* <Login />
      <Register /> */}
    </div>
  );
}

export default App;
