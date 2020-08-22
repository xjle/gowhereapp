<template>
  <div class="nav-bar">
    <div class="header-left">
      <slot name="left"></slot>
    </div>
    <div class="header-main">
      <slot name="main"></slot>
    </div>
    <div class="header-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar"
};
</script>
<style  scoped>
.nav-bar {
  /* width: 150px; */
  height: 36px;
  display: flex;
  line-height: 34px;
  background: #00bcd4;
}
.header-left {
  width: 40px;
  float: left;
}
.header-main {
  flex: 1;
}
.header-right {
  width: 80px;
  float: right;
  text-align: center;
}
</style>