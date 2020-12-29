<template>
  <div class="t">
    <div class="t-style">
      <router-link :to="{ path: '/Goods', query: { name:id - 1 } }">
        <img :src="geturl()" class="t-style" />
        <br /><br />
        <span class="t_name">{{ gettitle() }}<br /></span>
        <br /><br />
        <span class="t_price">¥{{ getprice() }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: { id: { type: Number, default: 0 } },
  data() {
    return {
      isMount: false,
    };
  },
  methods: {
    geturl() {
      return "static/pics/t" + this.id + ".jpg";
      this.$router.push('/detail?id='+id);
      this.$rote.query.id;
    },
    gettitle() {
      console.log("执行了1");
      console.log(this.isMount);
      if (this.isMount === true) {
        console.log("执行了2");
        let id = parseInt(this.id) - 1;
        //   console.log(id);
        if (!this.$store.state.goods[id + ""]) {
          return "";
        }

        let str = this.$store.state.goods[id + ""].title;
        console.log(str);
        return str;
      }
      return "";

      // return this.$store.state.goods[id+''].title.slice(0,18);
    },
    getprice() {
      console.log("执行了1");
      console.log(this.isMount);
      if (this.isMount === true) {
        console.log("执行了2");
        let id = parseInt(this.id) - 1;
        //   console.log(id);
        if (!this.$store.state.goods[id + ""]) {
          return "";
        }

        let str = this.$store.state.goods[id + ""].price;
        // console.log(str);
        return str;
      }
      return "";
    },
  },
  beforeMount() {
    console.log("执行了3");
    console.log("aaaaaaaaa-" + this.isMount);
    this.isMount = true;
  },
  updated() {
    this.isMount = true;
  },
};
</script>
<style scoped>
.t {
  position: relative;
  /* background-color: hotpink; */
  width: 200px;
  height: 320px;
  display: inline-block;
  top: 5px;
  padding: 15px;
  vertical-align: top;
  float: left;
  margin: 5px 15px;
}
.t-style {
  width: 200px;
  height: 210px;
  background-color: indigo;
}
.t_name {
  font-size: 14px;
  color: #333333;
  font-family: "宋体";
}
.t_price {
  color: #ff0036;
  font-size: 18px;
  font-family: "宋体";
}
.router-link-active {
  text-decoration: none;
}
</style>