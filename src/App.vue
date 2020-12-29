<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Top from "./components/Top";
import Search from "./components/Search";
import Body from "@/components/Body";

export default {
  name: "App",
  components: {
    Top,
    Search,
    Body,
  },
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
