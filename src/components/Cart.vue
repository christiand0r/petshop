<template>
  <div class="relative cursor-pointer" @click="toggleResume">
    <i class="fa-solid fa-bag-shopping text-4xl text-zinc-800"></i>
    <span
      class="flex items-center justify-center absolute font-bold rounded-full -left-1 -bottom-2 h-6 w-6 bg-sky-500 text-white"
      >{{ numberProduct }}</span
    >
  </div>

  <div
    class="flex flex-col fixed bottom-5 md:top-24 right-1 border w-1/2 h-1/3 z-10 border-gray-200 bg-white"
    v-if="showResume"
  >
    <h2 class="font-semibold text-xl border-b p-2 border-gray-200">
      Resumen de Compra
    </h2>

    <div class="containerCartItems">
      <CartItem v-for="item of cart" :key="item.code" :product="item" />
    </div>

    <h3 class="mt-8 px-3 pb-3 justify-self-end">
      Subtotal: <span>${{ globalSubtotal }} CLP</span>
    </h3>
  </div>
</template>

<script>
import Counter from "./Counter.vue";
import CartItem from "./CartItem.vue";

import { mapState } from "vuex";

export default {
  name: "Cart",
  components: {
    Counter,
    CartItem,
  },

  data() {
    return {
      showResume: false,
    };
  },

  methods: {
    toggleResume() {
      return (this.showResume = !this.showResume);
    },
  },

  computed: {
    numberProduct() {
      return this.cart.length;
    },

    ...mapState(["cart", "globalSubtotal"]),
  },
};
</script>

<style>
.containerCartItems {
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
}
</style>
