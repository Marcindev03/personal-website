import type { Component } from "solid-js";

import { Header, Technologies } from "./modules/homepage";
import { PortfolioShowcase } from "./modules/portfolio";

const App: Component = () => {
  return (
    <main class={`bg-white px-10`}>
      <Header />

      <Technologies />

      <PortfolioShowcase />

      <section id="contact"></section>
    </main>
  );
};

export default App;
