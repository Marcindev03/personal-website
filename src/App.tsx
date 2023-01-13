import type { Component } from "solid-js";

import { Header, Technologies } from "./modules/homepage";

const App: Component = () => {
  return (
    <main class={`bg-white px-10`}>
      <Header />

      <Technologies />

      <section>
        <div>
          <h3 class="text-3xl py-1">Portfolio</h3>
          <p class="text-md py-2 leading-8 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus rem consectetur provident a repudiandae amet veniam ex
            alias exercitationem, ratione dolorum voluptatum. Molestiae
            consequatur perspiciatis labore illum nobis tenetur nostrum.
          </p>
        </div>
        <div class="flex flex-col gap-10 py-10">
          <div>
            <img src="/web1.png" alt="" class="rounded-lg" />
          </div>
          <div>
            <img src="/web2.png" alt="" class="rounded-lg" />
          </div>
          <div>
            <img src="/web3.png" alt="" class="rounded-lg" />
          </div>
        </div>
      </section>

      <section id="contact"></section>
    </main>
  );
};

export default App;
