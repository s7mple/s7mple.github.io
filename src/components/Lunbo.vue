<template>
  <div class="lunbo">
    <el-carousel indicator-position="outside" height="600px">
      <el-carousel-item v-for="item in 4" :key="item">
          <img src="../assets/1.jpg" v-if="item == 1" class="photo">
          <img src="../assets/2.jpg" v-if="item == 2" class="photo">
          <img src="../assets/3.jpg" v-if="item == 3" class="photo">
          <img src="../assets/4.jpg" v-if="item == 4" class="photo">
        <!-- <h3>{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Lunbo",
  data() {
    return {};
  },
};
</script>

<style>
.lunbo {
  width: 960px;
  /* background-color: red; */
  position:relative;
  top: -610px;
  left: 212px;
  /* z-index: 1; */
}
.photo{
    width: 960px;
    height: 600px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  /* line-height: 600px; */
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>