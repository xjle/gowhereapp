<template>
  <div class="home">
    <nav-bar>
      <template v-slot:left>
        <i class="iconfont icon-right"></i>
      </template>
      <template v-slot:main>
        <el-input v-model="barInput" :placeholder="baricon+'  输入城市/景点/游玩主题'">
          <!-- <template slot="prepend">
            <i class="iconfont icon-right"></i>
          </template>-->
        </el-input>
      </template>
      <template v-slot:right>
        <span class="address">兴宁</span>
        <i class="iconfont icon-down"></i>
      </template>
    </nav-bar>
    <swiper-rotation />
    <home-icon />
  </div>
</template>
<script>
import NavBar from "@/components/navBar";
import SwiperRotation from "@/views/home/components/SwiperRotation";
import HomeIcon from "@/views/home/components/HomeIcon";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeIcon,
    SwiperRotation
  },
  data() {
    return {
      barInput: "",
      baricon: "\ue604"
    };
  }
};
</script>
<style>
.nav-bar .icon-right {
  font-size: 30px;
  color: #fff;
}
.nav-bar .icon-down {
  vertical-align: middle;
  color: #fff;
  font-size: 12px;
}
.nav-bar .address {
  color: #fff;
  margin-right: 4px;
}
.nav-bar .el-input__inner {
  height: 30px;
  font-family: "iconfont";
}
</style>