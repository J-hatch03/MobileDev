import { useState } from "react";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./Components/Header.jsx";
import CoreConcept from "./Components/CoreConcept.jsx";
import TabButton from "./Components/TabButton.jsx";





function App() {

  console.log("App rendering...")

  const [selectedTopic, setSelectedTopic] = useState("");



  function handleSelect(title) {

    setSelectedTopic(title);
    console.log(selectedTopic);
  }
  // in react, a component is really just a javascript function
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              img={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              img={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              img={CORE_CONCEPTS[3].image} */}
              {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
        <menu>
          <TabButton onSelect={() => handleSelect("components")} isSelected={selectedTopic === "components"}> Components </TabButton>
          <TabButton onSelect={() => handleSelect("jsx")} isSelected={selectedTopic === "jsx"}> JSX </TabButton>
          <TabButton onSelect={() => handleSelect("props")} isSelected={selectedTopic === "props"}> Props </TabButton>
          <TabButton onSelect={() => handleSelect("state")} isSelected={selectedTopic === "state"}> State </TabButton>
        </menu>
        </section>
      </main>
      { selectedTopic ? (
        <div id="tab-content">
          <h3> {EXAMPLES[selectedTopic].title} </h3>
          <p> {EXAMPLES[selectedTopic].description} </p>
          <pre>
            <code> {EXAMPLES[selectedTopic].code} </code>
          </pre>
        </div>
      ) : (
        <div id="tap-content"> 
          <p>please select a topic</p> 
        </div>
      )}
    </div>
  );
}

export default App;

