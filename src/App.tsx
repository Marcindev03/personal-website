import type { Component } from "solid-js";
import { ContactForm } from "./modules/contact";

import { Header, Technologies } from "./modules/homepage";
import { Footer } from "./modules/layout";
import { PortfolioShowcase } from "./modules/portfolio";

const App: Component = () => {
  return (
    <>
      <main class={`bg-white px-10 pb-6`}>
        <Header />

        <Technologies />

        <PortfolioShowcase />

        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default App;
