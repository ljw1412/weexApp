<template>
  <div class="welcome" @click="onClick">
    <text style="font-size:120px;">测试({{count}})</text>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 }
  },

  methods: {
    onClick() {
      console.log('!!!')

      this.count++
      // this.$router.push({name:'page2'})
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
