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
          clientID: 'a5aecdc7af0ca2026aff',
          clientSecret: '244a3e4f43fb5df207f5ce3506233ac64fab4786',
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
