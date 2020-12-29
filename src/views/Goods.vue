<template>
  <div>
    <Top />
    <Search />
    <Goods />
  </div>
</template>
<script>
import Top from "@/components/Top";
import Search from "@/components/Search";
import Goods from '../components/goods.vue';
export default {
  components: {
    Top,
    Search,
    Goods
  },
};
</script>
<style scoped>

 </style>