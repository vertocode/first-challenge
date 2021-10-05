<template>
  <div>
    <div class="title header">
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped>
  .title h3{
    font-size: 18px;
    padding-top: 22px;
    padding-left: 45px;
  }
  .header {
    background-color:  #009AE4;
    color: white;
    height: 80px;
  }
</style>
