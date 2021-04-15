import './App.css';
import Header from './components/Header'
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Header />
      <List heading="Latest" />
      <List heading="Trending" />
    </div>
  );
}

export default App;
