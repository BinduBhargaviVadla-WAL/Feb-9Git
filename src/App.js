import logo from './logo.svg';
import './App.css';
import Comment from './Comment';
import Product from './Product';
import Forum from './Forum';

function App() {
  return (
    <div className="App">
     <Comment></Comment>
     <Forum topic = "What is React?"></Forum>
     <Product></Product>
    </div>
  );
}

export default App;
