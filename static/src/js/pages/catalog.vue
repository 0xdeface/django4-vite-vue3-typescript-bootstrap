<template>
  <div>
    <h2>catalog page {{props}} </h2>
    <a :href="link">to index</a>
  </div>

</template>
<script lang="ts" setup>
  import {defineProps} from "vue";
  const link = (<any>window).reverseUrl('index')
  const props = defineProps({
    id: {type: Number}

  })

</script>
<style>
h2 { font-size: 50px; background: sandybrown;}
</style>