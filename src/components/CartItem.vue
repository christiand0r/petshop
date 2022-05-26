<template>
  <div
    class="flex items-center justify-center gap-3 p-2 relative overflow-hidden"
  >
    <div class="flex flex-col">
      <p>{{ product.name }}</p>
      <p class="font-medium">${{ product.price }} CLP</p>
    </div>

    <Counter :initialQuantity="product.quantity" @onQuantity="handleQuantity" />

    <p>
      Subtotal: <span>${{ calculateSubtotal }} CLP</span>
    </p>

    <i
      class="fa-solid fa-circle-xmark top-2 right-2 absolute text-red-700"
      @click="handleRemove"
    ></i>
  </div>
</template>

<script>
import Counter from "./Counter.vue";
import { mapActions } from "vuex";

export default {
  name: "CarItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  methods: {
    handleQuantity(quantity) {
      this.product.quantity = quantity;

      this.addToCart(this.product);
      this.globalSubtotal();
    },

    handleRemove() {
      this.removeToCart(this.product);
      this.globalSubtotal();
    },

    globalSubtotal() {
      this.calculateGlobalSubtotal();
    },

    ...mapActions(["addToCart", "calculateGlobalSubtotal", "removeToCart"]),
  },

  computed: {
    calculateSubtotal() {
      return this.product.price * this.product.quantity;
    },
  },

  components: {
    Counter,
  },
};
</script>

<style></style>
