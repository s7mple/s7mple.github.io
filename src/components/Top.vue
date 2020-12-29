<template>
  <div class="nav">
    <div class="temp clearfix">
      <div class="nav-left">
        <ul>
          <li>
            <a  @click="toPage()">
              游客，请登录
              
            </a>
          </li>
          <li>
            <a @click="toReg()">
              注册
            </a>
          </li>
        </ul>
      </div>
      <div class="nav-right">
        <ul>
          <li>
            <i class="el-icon-first-aid-kit"></i>
            <a href="#" target="_blank">
              收藏夹
            </a>
          </li>
          <li>
            <i class="el-icon-shopping-cart-1"></i>
            <a @click="toShoppingcar()">
              购物车
            </a>
          </li>
          <li>
            <i class="el-icon-user-solid"></i>
            <a href="#" target="_blank">
              个人中心
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              商城首页
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
    }
  },
  methods: {
    toPage(){
      this.$router.push("/login");
    },
    toReg(){
      this.$router.push("/Reg");
    },
    toShoppingcar(){
      this.$router.push("/Shoppingcar");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
    width: 100%;
    /* margin-top: -60px;
    margin-left: -10px;
    margin-right: -10px; */
}
ul{
    list-style-type: none;
}
a{
  text-decoration-line: none;
}
.nav-left>ul>li{
    float: left;
    padding-right: 50px;
}
.nav-left>ul>li>a{
    color: black;
    transition: 0s;
}
.nav-left>ul>li>a:hover{color: red;}
.nav-right>ul>li{
    float: right;
    padding-left: 30px;
}
.nav-right>ul>li>a{
    color: black;
    transition: 0s;
}
.nav-right>ul>li>a:hover{color: red;}
.nav{
    background-color:darkgray ;
}
.clearfix:after,
.clearfix:before{
    clear: both;
    content: '';
    display: block;
}
.temp {
    width: 90%; /* 只占父标签的百分之90的宽度 */
    margin: 0 auto;
    padding: 12px;
}
</style>
