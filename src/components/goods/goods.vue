<!--  -->
<template>
  <div class="goods">
      <div class="menu-wrapper">
          <ul>
              <li v-for="(item, index) in goods" :key="item.id" class="menu-item"  :class="{'current': currentIndex === index}">
                  <span class="text border-1px">
                      <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>{{ item.name }}
                  </span>
              </li>
          </ul>
      </div>
      <div class="foods-wrapper">
          <ul>
              <li v-for="item in goods" :key="item.id" class="food-list food-list-hook">
                  <h1 class="title">{{ item.name }}</h1>
                  <ul>
                      <li v-for="food in item.foods" :key="food.id" class="food-item border-1px">
                          <div class="icon">
                              <img :src="food.icon" width="57" height="57">
                          </div>
                          <div class="content">
                              <h2 class="name">{{food.name}}</h2>
                              <p class="desc">{{food.description}}</p>
                              <div class="extra">
                                  <span>月售{{food.sellCount}}份</span><span>好评率{{food.rangting}}%</span>
                              </div>
                              <div class="price">
                                  <span>¥{{food.price}}</span>
                                  <span v-show="food.oldPrice" class="old">¥{{food.oldPrice}}</span>
                              </div>
                          </div>
                      </li>
                  </ul>
              </li>
          </ul>
      </div>
  </div>
</template>

<script type='text/ecmascript-6'>
const ERR_OK = 0

export default {
    props: {
        seller: {
            type: Object
        }
    },
    data () {
        return {
            goods: []
        }
    },
    created () {
        this.$http.get('/api/goods').then(response => {
            if (response.data.errno === ERR_OK) {
                this.goods = response.data.data
            }
            }, response => {
                // error callback
            })
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../../common/scss/mixins";

    .goods {
        display: flex;
        position: absolute;
        top: 174px;
        bottom: 46px;
        width: 100%;
        overflow: hidden;
        .menu-wrapper {
            width: 80px;
            flex: 0 0 80px;
            background: #f3f5f7;
            .menu-item {
                display: table;
                height: 54px;
                width: 56px;
                line-height: 14px;
                padding: 0 12px;
                &.current {
                    position: relative;
                    margin-top: -1px;
                    z-index: 10;
                    background: #fff;
                    font-weight: 700;
                    .text {
                        @include border-none();
                    }
                }
                .icon {
                    display: inline-block;
                    vertical-align: top;
                    width: 12px;
                    height: 12px;
                    margin-right: 2px;
                    background-size: 12px 12px;
                    background-repeat: no-repeat;
                    &.decrease {
                        @include bg-image('decrease_3');
                    }
                    &.discount {
                        @include bg-image('discount_3');
                    }
                    &.guarantee {
                        @include bg-image('guarantee_3');
                    }
                    &.invoice {
                        @include bg-image('invoice_3');
                    }
                    &.special {
                        @include bg-image('special_3');
                    }
                }
                .text {
                    display: table-cell;
                    width: 56px;
                    vertical-align: middle;
                    font-size: 12px;
                    @include border-1px(rgba(7, 17, 27, .1));
                }
            }
        }
        .foods-wrapper {
            flex: 1;
            .title {
                padding-left: 14px;
                height: 26px;
                line-height: 26px;
                border-left: 2px solid #d9dde1;
                font-size: 12px;
                color: rgb(147, 153, 159);
                background: #f3f5f7;
            }
            .food-item {
                display: flex;
                margin: 18px;
                padding-bottom: 18px;
                @include border-1px(rgba(7, 17, 27, .1));
                &:last-child {
                    @include border-none();
                    margin-bottom: 0;
                }
                .icon {
                    flex: 0 0 57px;
                    margin-right: 10px;
                }
                .content {
                    flex: 1;
                    .name {
                        margin: 2px 0 8px;
                        line-height: 14px;
                        font-size: 14px;
                        color: rgb(7, 17, 27);
                    }
                    .desc,
                    .extra {
                        font-size: 10px;
                        color: rgb(147, 153, 159);
                    }
                    .desc {
                        line-height: 12px;
                        margin-bottom: 8px;
                    }
                    .extra {
                        line-height: 10px;
                        .count {
                            margin-right: 12px;
                        }
                    }
                    .price {
                        font-weight: 700;
                        line-height: 24px;
                        .now {
                            margin-right: 8px;
                            font-size: 14px;
                            color: rgb(240, 20, 20);
                        }
                        .old {
                            text-decoration: line-through;
                            font-size: 10px;
                            color: rgb(147, 153, 159);
                        }
                    }
                    .cartcontrol-wrapper {
                        position: absolute;
                        right: 0;
                        bottom: 12px;
                    }
                }
            }
        }
    }
</style>
