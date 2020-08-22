<template>
  <div class="home-icon">
    <div class="icons" v-for="(item, i) in iconsList" :key="i">
      <div class="icon-img">
        <img class="img-content" :src="item.href" alt />
      </div>
      <p class="icon-desc">{{item.name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeIcon",
  data() {
    return {
      iconsList: [
        {
          href: "//imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          name: "热门景点"
        },
        {
          href: "//imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          name: "一日游"
        },
        {
          href: "//imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
          name: "踏青赏花"
        },
        {
          href: "//imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
          name: "深圳必游"
        },
        {
          href: "//imgs.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png",
          name: "海滨海岛"
        },
        {
          href: "//imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
          name: "泡温泉"
        },
        {
          href: "//imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
          name: "主题乐园"
        },
        {
          href: "//imgs.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png",
          name: "城市观光"
        }
      ]
    };
  }
};
</script> 
<style scoped>
.home-icon {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  background: #fff;
}
.icons {
  width: 25%;
  position: relative;
  overflow: hidden;
  float: left;
  padding-bottom: 25%;
  height: 0;
}
.icon-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 22px;
  box-sizing: border-box;
  padding: 5px;
}
.img-content {
  display: block;
  margin: 0 auto;
  height: 100%;
}
.icon-desc {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 6px;
  color: #212121;
  font-size: 15px;
  height: 22px;
  line-height: 22px;
}
</style>
