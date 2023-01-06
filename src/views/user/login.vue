<template>
  <div class="my">
    <img class="bgc" :src="bgcImage" alt="" />
    <div class="submit">
      <span class="form_title">登录</span>
      <el-form :model="loginForm">
      <div class="form_input">
        <span>用户名：</span>
        <el-form-item>
        <el-input class="inputs" type="text" v-model="loginForm.username"/>
        </el-form-item>
      </div>
      <div class="form_input">
        <span>密码：</span>
        <el-form-item>
        <el-input class="inputs" type="password" v-model="loginForm.password"/>
        </el-form-item>
      </div>
      </el-form>
      <div class="b_submit">
         <el-button class="b" @click="login">登录</el-button>
         <el-button class="home_href">重置</el-button>
      </div>
        <el-link type="primary" @click="goRegister">点击注册</el-link>
        <el-link type="primary" @click="goHomepage">首页</el-link>
        </div>
  </div>
</template>

<script>
import bgcImage from '/src/assets/images/pur.jpg'
import getLogin from '/src/api/login.js'
export default {
  name: "Login",
  data(){
      return{
          bgcImage,
          loginForm:{
            username:'',
            password:''
          }
      }
  },
  methods:{
      goRegister(){
          this.$router.push('/register')
      },
      goHomepage(){
          this.$router.push('/home')
      },
      login(){
        getLogin(this.loginForm).then((res)=>{
          console.log(res.data.code);
          localStorage.setItem('token',res.data.token);
          if(res.data.code ==200){
            this.$router.push('/home')
            this.$message({
                showClose: true,
                message: '登录成功',
                type: 'success'
                });
          }else { //  登录失败
                this.$message({
                showClose: true,
                message: '用户名或密码错误',
                type: 'error'
                });
            }
        })
      }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.from {
  overflow: hidden;
  position: relative;
}

.bgc {
  width: 100%;
  height:100%;
}

.submit {
  position: absolute;
  z-index: 9;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  margin-top: 150px;
  width: 600px;
  height: 500px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.form_title {
  text-align: center;
  margin-top: 40px;
  font-size: 18px;
}

.form_input {
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  margin-top: 20px;
}

.inputs {
  height: 40px;
  width: 400px;
  border-radius: 5px;
  border: none;
  background-color: #eee;
  color: #666;
}

.form_input span {
  width: 85px;
  align-self: center;
}

.b_submit {
  align-self: center;
}

.b {
  border: none;
  width: 80px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  background: #999;
  margin-top: 40px;
}

.b:hover {
  background: #666;
}

.back {
  margin-left: 10px;
}

.home_href {
  border: none;
  width: 80px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  background: #ffd204;
}
</style>
