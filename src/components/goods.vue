<template>
  <div class="Detail">
    <div class="img">
      <div class="img-1">
        <img :src="getimg1()" class="img-1-1" />
      </div>
      <div class="img-2">
        <el-button @click="change(1)" type=""
          ><img class="img-2-1" :src="getimg1()"
        /></el-button>
        <el-button @click="change(2)" type=""
          ><img class="img-2-1" :src="getimg2()"
        /></el-button>
        <el-button @click="change(3)" type=""
          ><img class="img-2-1" :src="getimg3()"
        /></el-button>
        <el-button @click="change(4)" type=""
          ><img class="img-2-1" :src="getimg4()"
        /></el-button>
      </div>
    </div>
    <div class="Title">
      <h2>{{ getname() }}</h2>
    </div>
    <div class="Price">
      <h2>
        价格：<font color="red">¥{{ getprice() }}</font>
      </h2>
    </div>
    <div class="Numb">
      <h3>数量：</h3>
      <el-input-number
        v-model="num"
        @change="handleChange"
        :min="1"
        :max="10"
        label="数量"
      ></el-input-number>
    </div>
    <div class="Btn">
      <el-button type="danger" size="medium">加入购物车</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 1,
      n: 1,
      index: 1,
      id: "",
    };
  },
  created() {
    this.id = this.$route.query.name;
  },
  methods: {
    change(index) {
      this.index = index;
    },
    getname() {
      return this.$store.state.goods[this.id].title;
    },
    getprice() {
      return this.$store.state.goods[this.id].price;
    },
    // getimg() {
    //   console.log(this.$store.state.goods);
    //   //   return this.$store.state.goods[this.id]["p" + this.index];
    // },
    getimg1() {
      return this.$store.state.goods[this.id].p1;
    },
    getimg2() {
      return this.$store.state.goods[this.id].p2;
    },
    getimg3() {
      return this.$store.state.goods[this.id].p3;
    },
    getimg4() {
      return this.$store.state.goods[this.id].p4;
    },
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>
<style scoped>
.Detail {
  /* height: 1300px; */
  /* background-color: orange; */
  /* display: inline-block; */
}
.img {
  position: relative;
  left: 150px;
  top: 50px;
  width: 600px;
  height: 550px;
  /* background-color: palegreen; */
}
.img-1 {
  position: relative;
  left: 120px;
  width: 400px;
  height: 400px;
  /* background-color: cornflowerblue; */
}
.Title {
  position: relative;
  left: 817px;
  top: -448px;
  width: 600px;
  height: 100px;
  /* background-color: palevioletred; */
}
.Price {
  position: relative;
  left: 817px;
  top: -406px;
  width: 200px;
  height: 50px;
  /* background-color: red; */
}
.Numb {
  position: relative;
  left: 817px;
  top: -328px;
  width: 200px;
  height: 50px;
  /* background-color: red; */
}
.Btn {
  position: relative;
  left: 817px;
  top: -230px;
  width: 150px;
  height: 50px;
  /* background-color:darkgrey;  */
}
.img-2 {
  position: relative;
  top: 25px;
  left: 80px;
  height: 100px;
  width: 500px;
  /* background-color: darkslateblue; */
}
.img-2-1 {
  width: 50px;
  height: 50px;
}
</style>