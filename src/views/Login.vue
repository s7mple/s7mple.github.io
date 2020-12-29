<template>
  <div>
    <Top />
     <Search />
    <Login />
  </div>
</template>
<script>
import Top from "@/components/Top";
import Search from "@/components/Search";
import Login from "@/components/Login";
export default {
  components: {
    Login,Top,Search
  },
};
</script>
<style scoped>
 
 </style>