<template>
  <div id="app">
    <Top />
    <Search />
    <Body />
    <Bottom />
  </div>
</template>

<script>
import Top from "@/components/Top";
import Search from "@/components/Search";
import Body from "@/components/Body";
import Bottom from "@/components/Bottom";
export default {
  name: "App",
  components: {
    Top,
    Search,
    Body,
    Bottom
  },
  created(){
    this.init();
  },
  methods:{
    init(){
     this.$axios.get("/static/goods.json").then((res)=>{
      this.$store.commit("initdata",res.data.goods);
     })

    }
  },
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  height: 4000px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
