<template>
  <div>
    <h2> index page </h2>
    <a :href="link">to catalog</a>
  </div>

</template>
<script lang="ts" setup>
const link = (<any>window).reverseUrl('catalog')

</script>
<style>
h2 { font-size: 50px; background: sandybrown;}
</style>