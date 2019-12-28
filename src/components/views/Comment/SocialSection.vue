<template>
  <div class="social-section">
    <div id="gitalk-container" v-if="show"></div>
    <!--<div id="SOHUCS" :sid="type+postId"></div>-->
  </div>
</template>

<script type="text/ecmascript-6">
import BrowseMore from '@/components/views/BrowseMore'

export default {
  props: {
    type: String,
    postId: Number
  },
  data () {
    return {
      show: null
    }
  },
  components: {
    'browse-more': BrowseMore
  },
  watch: {
    postId (value) {
      this.show = value
      this.$nextTick(() => {
        // eslint-disable-next-line no-undef
        var gitalk = new Gitalk({
          clientID: '68981c5815d2ea0cc616',
          clientSecret: 'ddda583cf033ff1297e5a2a2186c2e4c5a084c72',
          repo: 'BluecollarHub-web',
          owner: 'rickdynasty',
          labels: [this.type],
          admin: ['rickdynasty'],
          id: location.href, // Ensure uniqueness and length less than 50
          title: document.title,
          distractionFreeMode: false // Facebook-like distraction free mode
        })
        gitalk.render('gitalk-container')
      })
    }
  }
}
</script>
