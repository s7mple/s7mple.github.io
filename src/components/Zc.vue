<template>
  <div class="center">
    <div class="login-box" id="app">
      <el-row type="flex" justify="center">
        <el-col :span="8">
          <el-input
            type="text"
            id="name"
            v-model="regForm.username"
            placeholder="请输入帐号"
          >
            <template slot="prepend">帐号</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="8">
          <el-input
            id="password"
            v-model="regForm.password"
            type="password"
            placeholder="请输入密码"
          >
            <template slot="prepend">密码</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="8">
          <el-input
            id="password"
            v-model="regForm.rePassword"
            type="password"
            placeholder="请再次输入密码"
          >
            <template slot="prepend">密码</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4">
          <el-button
            id="login"
            style="width: 100%"
            type="danger"
            @click="regAccount(), checkname()"
            >注册</el-button>
        </el-col>
        <el-col :span="4">
          <el-button
            id="login"
            style="width: 100%"
            type="danger"
            @click="reset"
            >重置</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'Reg',
  data() {
    return {
      regForm: {
        username: '',
        password: '',
        rePassword: '',
      },
    };
  },
  methods: {
    regAccount() {
      if (this.regForm.password !== this.regForm.rePassword) {
          alert('两次密码不一致，请重新输入')
          this.reset()
      } else if(this.regForm.username === '' || this.regForm.password === '' || this.regForm.rePassword === '') {
        console.log(this.regForm.username);
        alert('输入框不能为空')
        this.reset()
      } else if(this.checkname() === 0) {
        alert('该用户已经存在，请重新输入')
        this.reset()
      } else {
        alert('注册成功')
        this.submit()
      }
    },
    checkname () {
        var storage = window.localStorage
        var aaa = storage.getItem('user')
        var user = JSON.parse(aaa)
        var l = user.length
        var i = 0
        var flag = 1
        for(i = 0;i < 1;i++){
          if (user[i].username === this.regForm.username){
            flag = 0
            break
          }
        }
        if (flag === 0){
          return 0
        }
    },
    submit() {
      var storage = window.localStorage
      var aaa = storage.getItem('user')
      var user = JSON.parse(aaa)
      var a = {
        username: this.regForm.username,
        psd: this.regForm.password,
        money:0
      }
      user.push(a)
      console.log(user)

      var d = JSON.stringify(user)
      storage.setItem('user', d)
      this.switchTo('/Login')
    },
    switchTo (path){
        this.$router.replace(path)
    },
    reset () {
      this.regForm.username = ''
      this.regForm.password = ''
      this.regForm.rePassword = ''
    }
  }
};
</script>

<style scoped>
.center {
  /* position: relative; */
  width:1300px;
  min-width: 380px;
  margin: 40px auto;
  padding: 40px 0;
  border-radius: 6px;
  background: #f0f3f8;
}
</style>