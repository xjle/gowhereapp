<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },

  methods: {}
};
</script>
<style scoped>
.clearfix:after {
  /*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>
