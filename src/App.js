import ProductList from './components/ProductList';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <ProductList />
      </header>
    </div>
  );
}

export default App;
