<template>
  <button
    :type="type"
    class="inline-flex text-lg items-center px-4 py-2 rounded-sm font-semibold text-white transition bg-red-emprend px-16 py-3 hover:bg-red-emprend-dark"
  >
    <slot></slot>
  </button>
</template>

<script>

export default {
  props: {
    type: {
      type: String,
      default: "submit",
    },
  },
};
</script>
