<template>
  <div id="app">
    <Header :seller="seller"></Header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/header/header'
const ERR_OK = 0
export default{
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.get('/api/seller').then(response => {
      if (response.data.errno === ERR_OK) {
        this.seller = response.data.data
      }
    }, response => {
        // error callback
    })
  },
  components: {
    Header
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scope>

    @import "common/scss/mixins";

    .tab {
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        @include border-1px(rgba(7, 17, 27, 0.1));

        .tab-item {
            flex: 1;
            text-align: center;

            & > a {
                display: block;
                font-size: 14px;
                color: rgb(77, 85, 93);

                &.active {
                    color: rgb(240, 20, 20)
                }
            }
        }
    }
</style>
