import Vue from 'vue'
import Router from 'vue-router'
import {LoadingBar} from 'iview'
import Index from '@/components/index/Index'

// 公共区域
// import CommonHeader from '@/components/header/CommonHeader';
import CommonHeader from '@/components/header/CommonHeader'
import CommonFooter from '@/components/footer/CommonFooter'

// 首页
import HomeContent from '@/components/content/HomeContent'
import ArticleContent from '@/components/content/ArticleContent'
import ArticleListContent from '@/components/content/ArticleListContent'
import TimeLineContent from '@/components/content/TimeLineContent'
import SearchResultContent from '@/components/content/SearchResultContent'

Vue.use(Router)

// 解决vue-router 3.0.1及以上NavigationDuplicated问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

let router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'index',
          components: {
            header: CommonHeader,
            content: HomeContent,
            footer: CommonFooter
          },
          meta: {
            title: 'Bluecollar Hub'
          }
        },
        {
          path: 'article/:articleId',
          name: 'article',
          components: {
            header: CommonHeader,
            content: ArticleContent,
            footer: CommonFooter
          }
        },
        {
          path: 'opus',
          name: 'opus',
          // 作品（待完善，暂时用文章列表来补充）
          components: {
            header: CommonHeader,
            content: ArticleListContent,
            footer: CommonFooter
          },
          meta: {
            title: '博文列表 | Bluecollar Hub'
          }
        },
        {
          path: 'articles',
          name: 'articles',
          components: {
            header: CommonHeader,
            content: ArticleListContent,
            footer: CommonFooter
          },
          meta: {
            title: '博文列表 | Bluecollar Hub'
          }
        },
        {
          path: 'articles/category/:id',
          name: 'articles/category',
          components: {
            header: CommonHeader,
            content: ArticleListContent,
            footer: CommonFooter
          },
          meta: {
            title: '博文列表 | Bluecollar Hub'
          }
        },
        {
          path: 'articles/search',
          name: 'search',
          components: {
            header: CommonHeader,
            content: SearchResultContent,
            footer: CommonFooter
          },
          meta: {
            title: '博文搜索 | Bluecollar Hub'
          }
        },
        {
          path: 'timeline',
          name: 'timeline',
          components: {
            header: CommonHeader,
            content: TimeLineContent,
            footer: CommonFooter
          },
          meta: {
            title: '时间轴 | Bluecollar Hub'
          }
        }
      ]
    }
  ]
})

// 配置加载进度条
LoadingBar.config({
  color: '#5cb85c',
  failedColor: '#f0ad4e',
  height: 2
})

router.beforeEach((to, from, next) => {
  LoadingBar.start()
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach((to, from, next) => {
  LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
