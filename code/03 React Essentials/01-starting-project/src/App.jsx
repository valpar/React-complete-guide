import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples selectedTopic={selectedTopic} handleSelect={handleSelect} />
      </main>
    </>
  );
}

export default App;
