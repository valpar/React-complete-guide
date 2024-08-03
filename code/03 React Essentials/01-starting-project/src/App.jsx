import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

import { CORE_CONCEPTS } from './data';

function App() {
  function handleSelect() {
    console.log('Selected');
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton title='Components' onSelect={handleSelect}>
              Components
            </TabButton>
            <TabButton title='JSX' onSelect={handleSelect}>
              JSX
            </TabButton>
            <TabButton title='Props' onSelect={handleSelect}>
              Props
            </TabButton>
            <TabButton title='State' onSelect={handleSelect}>
              State
            </TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
