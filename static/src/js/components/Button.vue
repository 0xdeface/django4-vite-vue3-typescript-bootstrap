<template>
  <button @click="cnt++">
    {{cnt}}
  </button>
</template>
<script setup lang="ts">
  import {ref} from "vue";
  const cnt = ref(0);
</script>