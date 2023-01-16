import type { Component } from "solid-js";
import { ContactForm } from "./modules/contact";

import { Header, Technologies } from "./modules/homepage";
import { PortfolioShowcase } from "./modules/portfolio";

const App: Component = () => {
  return (
    <main class={`bg-white px-10`}>
      <Header />

      <Technologies />

      <PortfolioShowcase />

      <ContactForm />
    </main>
  );
};

export default App;
