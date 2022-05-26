<template>
  <div class="flex flex-col items-center justify-end h-full">
    <h2 class="text-4xl font-medium">
      La categoría "{{ categoryName }}" está vacía o no existe
    </h2>
    <img src="../assets/404_perro.png" alt="Categoría Vacía" />
  </div>
</template>

<script>
export default {
  name: "EmptyCategory",
  props: {
    categoryName: {
      type: String,
      required: true,
      value: "mascota",
    },
  },
};
</script>

<style></style>
