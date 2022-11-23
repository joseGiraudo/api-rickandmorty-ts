import './App.css';
import { CharacterList } from './components/CharacterList';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>Characters from Rick and Morty</h1>
      <CharacterList />
      <Footer />
    </div>
  );
}

export default App;
