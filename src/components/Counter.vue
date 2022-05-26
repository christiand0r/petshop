<template>
  <div class="flex items-center justify-center border p-2 border-blueSapphire">
    <span
      @click="decreaseQuantity"
      class="flex items-center justify-center h-6 w-6"
      >-</span
    >
    <input
      type="number"
      min="1"
      v-model="quantity"
      class="text-center outline-none w-10"
    />
    <span
      @click="increaseQuantity"
      class="flex items-center justify-center h-6 w-6"
      >+</span
    >
  </div>
</template>

<script>
export default {
  name: "Counter",

  props: {
    initialQuantity: Number,
  },

  data() {
    return {
      quantity: 1,
    };
  },

  methods: {
    increaseQuantity() {
      this.quantity++;
    },

    decreaseQuantity() {
      this.quantity--;
    },

    initialValue() {
      return this.initialQuantity && this.initialQuantity > 1
        ? (this.quantity = this.initialQuantity)
        : this.quantity;
    },
  },

  mounted() {
    this.initialValue();
  },

  watch: {
    quantity() {
      this.$emit("onQuantity", this.quantity);
    },
  },
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
