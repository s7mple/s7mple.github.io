<template>
  <div id="body">   
    <Fenlei/>
    <Lunbo/>
    <Neirong/>
  </div>
</template>

<script>
import Fenlei from '@/components/Fenlei'
import Lunbo from '@/components/Lunbo'
import Neirong from '@/components/Neirong'

export default {
  name: 'Body',
  components: {
    Fenlei,
    Lunbo,
    Neirong
  }
}
</script>
<style>
#body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 260px; */
  width: 1200px;
  /* height: 4203px; */
  /* background-color: blue; */
  margin: 10px auto 0;
}
</style>