<template>
  <div class="about">
    <img class="background" src="../../assets/background.jpg" alt="">
    <img class="avatar" src="../../assets/avatar.jpg" alt="">
    <p class="name">成领</p>
    <p class="desc">奋斗就是每一天都很难，可一年比一年容易。不奋斗就是每天都很容易，可一年比一年难。</p>
    <ul class="social">
      <li><a href="https://github.com/rickdynasty" target="_blank"><img src="../../assets/icon/GitHub.png" alt=""></a></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/theme.styl";

  .about
    position relative
    text-align center
    border 1px solid $color-border
    // padding-bottom 20px
    img.background
      position absolute
      top 0
      left 0
      right 0
      width 100%
      height 175px
      z-index 1
    img.avatar
      position relative
      margin 75px auto 15px
      width 100px
      height 100px
      border 5px solid $color-gradually-gray-91
      border-radius 50%
      z-index 9
    .name
      font-size 22px
      color $color-typegraphy-title
      line-height 30px
      font-weight 700
    .desc
      font-size 15px
      color $color-secondary-info
      line-height 30px
      font-weight 100
    .social
      text-align center
      padding 0 20px
      // margin-top 15px
      > li
        padding 10px
        a
          display block
          width: 60px
          height: 60px
          margin: auto
          img
            width 100%
</style>
