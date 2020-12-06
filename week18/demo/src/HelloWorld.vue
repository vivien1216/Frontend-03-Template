<template>
  <div>
      <p class="ceshi">{{greeting}} world</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            greeting: 'hello'
        }
    }
}
</script>

<style scoped>
  .ceshi{
      color: red;
      font-size: 2em;
      text-align: center;
  }
</style>