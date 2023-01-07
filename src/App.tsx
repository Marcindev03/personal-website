import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import { Header } from "./modules/homepage";

const App: Component = () => {
  const paragraphStyle = "text-gray-800 py-1";

  return (
    <main class={`bg-white px-10`}>
      <Header />

      <div class="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
        <img src="/dev-ed-wave.png" />
      </div>

      <section>
        <div>
          <h3 class="text-3xl py-1">Services I offer</h3>
          <p class="text-md py-2 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            quasi. Voluptas aspernatur maiores sunt iure perspiciatis
            necessitatibus quas? Repellat placeat porro accusamus delectus
            recusandae dolor commodi minus blanditiis earum magni.
          </p>
        </div>
        <div>
          <div class="text-center shadow-lg p-10 rounded-xl my-10">
            <img src="/design.png" alt="" />
            <h3 class="text-lg font-medium pt-8 pb-2">Beautiful designs</h3>
            <p class="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              adipisci animi illum vitae perspiciatis molestias sit ratione.
              Aliquam, numquam delectus facere eos maiores nulla omnis esse
              voluptas consequuntur, ab inventore!
            </p>
            <h4 class="py-4 text-teal-600">Design tools I use</h4>
            <p class={paragraphStyle}>Photoshop</p>
            <p class={paragraphStyle}>Figma</p>
            <p class={paragraphStyle}>Illustator</p>
          </div>
        </div>
      </section>

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
    </main>
  );
};

export default App;
