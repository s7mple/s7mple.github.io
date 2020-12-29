<template>
  <div class="faterBox">
    <nav>
      <div class="all">
        <a href="" target="_blank">全部分类</a>
      </div>
      <ul>
        <li class="nav_item">
          <a href="">家用电器</a><span class="jt">&gt;</span>
          <div class="sub_menu">
            <div class="leftmenu">
              <dl>
                <dt><a href="#">大家电</a></dt>
                <dd>
                  <a href="#">平板电视</a>
                  <a href="#">空调</a>
                  <a href="#">冰箱</a>
                  <a href="#">洗衣机</a>
                  <a href="#">家庭影院</a>
                  <a href="#">DVD</a>
                  <a href="#">迷你音响</a>
                  <a href="#">烟机/灶具</a>
                  <a href="#"> 热水器</a>
                  <a href="#">消毒柜/洗碗机</a>
                  <a href="#">冷柜/冰吧</a>
                  <a href="#">酒柜</a>
                  <a href="#">家电配件</a>
                </dd>
              </dl>
              <dl>
                <dt><a href="#">生活电器</a></dt>
               <dd>
                <a href="#">电风扇</a>
                <a href="#">冷风扇</a>
                <a href="#">净化器</a>
                <a href="#">加湿器</a>
                <a href="#">扫地机器人</a>
                <a href="#">吸尘器</a>
                <a href="#">挂烫机/熨斗</a>
                <a href="#">插座</a>
                <a href="#"> 电话机</a>
                <a href="#">清洁机</a>
                <a href="#">除湿机</a>
                <a href="#">干衣机</a>
                <a href="#">收录/音机</a>
                </dd>
            </dl>  
                  <dl>
                <dt><a href="#">厨房电器</a></dt>
               <dd>
                <a href="#">电压力锅</a>
                <a href="#">空调</a>
                <a href="#">冰箱</a>
                <a href="#">洗衣机</a>
                <a href="#">家庭影院</a>
                <a href="#">DVD</a>
                <a href="#">迷你音响</a>
                <a href="#">烟机/灶具</a>
                <a href="#"> 热水器</a>
                <a href="#">消毒柜/洗碗机</a>
                <a href="#">冷柜/冰吧</a>
                <a href="#">酒柜</a>
                <a href="#">家电配件</a>
                </dd>
            </dl>  
                  <dl>
                <dt><a href="#">个护健康</a></dt>
               <dd>
                <a href="#" >平板电视</a>
                <a class="test" href="#">空调</a>
                <a href="#">冰箱</a>
                <a href="#">洗衣机</a>
                <a href="#">家庭影院</a>
                <a href="#">DVD</a>
                <a href="#">迷你音响</a>
                <a href="#">烟机/灶具</a>
                <a href="#"> 热水器</a>
                <a href="#">消毒柜/洗碗机</a>
                <a href="#">冷柜/冰吧</a>
                <a href="#">酒柜</a>
                <a href="#">家电配件</a>
                </dd>
            </dl>  
                  <dl>
                <dt><a href="#">五金家装</a></dt>
               <dd>
                <a href="#">平板电视</a>
                <a href="#">空调</a>
                <a href="#">冰箱</a>
                <a href="#">洗衣机</a>
                <a href="#">家庭影院</a>
                <a href="#">DVD</a>
                <a href="#">迷你音响</a>
                <a href="#">烟机/灶具</a>
                <a href="#"> 热水器</a>
                <a href="#">消毒柜/洗碗机</a>
                <a href="#">冷柜/冰吧</a>
                <a href="#">酒柜</a>
                <a href="#">家电配件</a>
                </dd>
            </dl> 
            </div>
          </div>
        </li>
        <li class="nav_item">
          <a href="">手机/数码</a><span class="jt">&gt;</span>
        </li>
        <li class="nav_item">
          <a href="">家居/家具</a><span class="jt">&gt;</span>
        </li>
        <li class="nav_item">
          <a href="">素食/卤味</a><span class="jt">&gt;</span>
        </li>
        <li class="nav_item">
          <a href="">坚果/炒货</a><span class="jt">&gt;</span>
        </li>
        <li class="nav_item">
          <a href="">糖果/蜜饯</a><span class="jt">&gt;</span>
        </li>
        <li class="nav_item">
          <a href="">巧克力</a><span class="jt">&gt;</span>
        </li>
        <li class="nav_item">
          <a href="">海鲜/肉类</a><span class="jt">&gt;</span>
        </li>
        <li class="nav_item">
          <a href="">花茶/名酒</a><span class="jt">&gt;</span>
        </li>
        <li class="nav_item">
          <a href="">箱包</a><span class="jt">&gt;</span>
        </li>
      </ul>
    </nav>
    <div class="div-left">
      <ul>
        <li class="nav_item2"><a href="">首页</a></li>
        <li class="nav_item2"><a href="">闪购</a></li>
        <li class="nav_item2"><a>生鲜</a></li>
        <li class="nav_item2"><a>团购</a></li>
        <li class="nav_item2"><a>数码商城</a></li>
        <li class="nav_item2"><a>全球购</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Body",
  data() {
    return {};
  },
};
</script>

<style scoped>
.faterBox{
    display: flex;
    /* width: 1920px; */
}

nav {
  /* position: absolute;
  left: 400px;
  top: 200px; */
  border: 1px solid #b61d1d;
  display: inline-block;
  vertical-align: top;
}
.all {
  width: 190px;
  height: 44px;
  line-height: 44px;
  background: #b1191a;
  padding: 0 10px;
}
.all a {
  color: white;
  font-size: 16px;
}
.nav_item {
  width: 190px;
  height: 31px;
  position: relative;
  top: 0;
  left: 0;
  line-height: 31spx;
  color: white;
  background: black;
  padding: 15px 10px;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
ul li a {
  color: white;
}
ul li:hover {
  background: white;
}
ul li:hover a {
  color: black;
}
.jt {
  color: white;
  float: right;
  width: 12px;
  padding-top: 10px;
  font: 13px consolas;
}
/*submenu*/
.sub_menu {
  display: none;
  /* width: 790px; */
  position: absolute;
  left: 210px;
  top: 0;
  /* background: #f7f7f7; */
  z-index: 100000;
}
ul li:hover .sub_menu {
  display: block;
}
.leftmenu {
  width: 550px;
  overflow: hidden;
  /* float: left; */
  /* position: fixed;
  left: 560px; */
  background-color: #ffffff;
}
.leftmenu dl {
  overflow: hidden;
  display: block;
  margin: 20px 0;
}
.leftmenu dl dt {
  float: left;
  font-weight: bold;
  color: #737373;
  padding: 0 8px;
}

.leftmenu dl dd a {
  color: #737373;
  float: left;
  height: 20px;
  line-height: 20px;
  padding: 0 10px;
  border-left: 1px solid #e0e0e0;
  font-size: 12px;
  margin-top: 5px;
}
.rightmenu {
  float: right;
}
.rightmenu dl {
  margin-top: 20px;
}
.rightmenu dl dd {
  padding: 0;
  margin-bottom: 2px;
}

.div-left > ul > li > a {
  color: white;
  float: left;
  font-size: 20px;
  padding: 0px 15px;
}
.nav_item2 {
  float: left;
  margin: 0px;
  /* display: inline-block; */
  width: 130px;
  height: 5px;
  line-height: 31px;
  background: black;
  padding: 20px 15px;
  vertical-align: top;
  line-height: 9px;
  text-align: center;
}
.div-left > ul > li > a:hover {
  color: black;
}
</style>