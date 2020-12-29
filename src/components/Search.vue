<template>
    <div class="all">
        <div class="logo">
            <img src="../assets/logo.gif" width="240px"/>
        </div>
        <div class="container">
            <form action="" class="parent">
                <input class="input-text" type="text" placeholder="搜索">
                <input class="input-butn" type="button" value="搜索">
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.all{
    /* width: 1920px; */
    /* background-color: red; */
    width: 1200px;
    margin: 0 auto;
    display: flex;
    /* justify-content: space-between; */
}

.container{
    margin: 33px 158px;
}


/* 按钮样式 */
.parent>input:first-of-type {
    /*输入框高度设置为40px, border占据2px，总高度为42px*/
    width: 380px;
    height: 40px;
    border: 1px solid red;
    font-size: 16px;
    outline: none;
}
.parent>input:first-of-type{
    border: 1px solid red;
    padding-left: 10px;
}
input:last-of-type {
    /*button按钮border并不占据外围大小，设置高度42px*/
    width: 100px;
    height: 44px;
    position: absolute;
    background: red;
    border: 1px solid red;
    color: #fff;
    font-size: 16px;
    outline: none;
}
</style>
