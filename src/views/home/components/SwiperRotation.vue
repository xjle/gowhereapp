<template>
  <div class="wrpper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,i) in imglist" :key="i">
        <img class="swiper-img" :src="item.href" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "SwiperRotation",
  data() {
    return {
      imglist: [
        { href: "//imgs.qunarzz.com/piao/fusion/1505/27/301e8692d285a3.jpg" },
        { href: "//imgs.qunarzz.com/piao/fusion/1505/27/301e8692d285a3.jpg" },
        { href: "//imgs.qunarzz.com/piao/fusion/1505/27/301e8692d285a3.jpg" },
        { href: "//imgs.qunarzz.com/piao/fusion/1505/27/301e8692d285a3.jpg" },
        { href: "//imgs.qunarzz.com/piao/fusion/1505/27/301e8692d285a3.jpg" }
      ],
      swiperOptions: {
        // 轮播图配置项
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  }
};
</script>
<style  scoped>
.wrpper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
.wrpper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 20.8%;
}
.swiper-img {
  width: 100%;
}
</style>