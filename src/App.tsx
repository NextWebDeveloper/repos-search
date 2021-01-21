import React, { useState } from "react";
import SearchForm from "@views/components/SearchForm/SearchForm";
import RepositoriesList from "@views/components/RepositoriesList/RepositoriesList";

function App() {
  return (
    <div>
      <header className="bg-dark h-20 px-3 flex items-center">
        <SearchForm />
      </header>
      <main className="py-2 px-3">
        <RepositoriesList />
      </main>
    </div>
  );
}

export default App;
