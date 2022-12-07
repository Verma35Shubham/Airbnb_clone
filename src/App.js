import { useState } from "react";
import "./App.css";
import { list, list2 } from "./assets/cards-list";
import Cards from "./assets/components/Cards";
import Filter from "./assets/components/Filter";
import Header from "./assets/components/Header";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="App">
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
    </div>
  );
}

export default App;