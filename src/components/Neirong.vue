<template>
<div class="Fatherbox">
    <div class="div-img5">
        <img src="../assets/5.jpg"/>
    </div>
    <div class="div-img6">
        <img src="../assets/6.jpg"/>
    </div>
    <div class="Like">
        <h2>
            <span>
                <i class="el-icon-edit"></i>
                猜你喜欢
            </span>
        </h2>
        <div class="Things">
            <Single v-for="item in 50" :key="item" :id="item"></Single>
        </div>
        <div class="end">
            <img src="../assets/end.jpg"/>
        </div>
    </div>
</div>
</template>

<script>
import Single from './single.vue'
export default {
  name: 'Neirong',
  data () {
    return {
    }
  },
  components:{
    Single
  }
}
</script>

<style scoped>
.Fatherbox{
    width: 1300px;
    height: 4203px;
    position: relative;
    top: -600px;
    left: -66px;
    background-color:rgb(245, 245, 245);
}
.div-img5{
    padding: 20px;
}
.div-img6{
    position: relative;
    left: -5px;
}
.Like{
    height: 1400px;
    /* background-color: coral; */
    width: 1300px;
}
.Things{
    /* background-color:gold; */
    width: 1300px;
    position: relative;
    height:3711px;
}
.end{
    width: 1300px;
    position: absolute;
    top: 4000px;
}
</style>