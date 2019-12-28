<template>
  <div class="section-title">
    <slot name="menu"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/index.styl"

  .section-title
    display flex
    justify-content space-between
    padding 1px 0
    height 50px
    line-height 50px
    text-align left
    box-sizing border-box
    @media only screen and (max-width: 768px)
      padding 1px 0
      height 50px
</style>
