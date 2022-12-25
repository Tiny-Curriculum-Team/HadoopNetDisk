<template>
  <div class="my">
    <img class="bgc" :src="bgcImage" alt="" />
    <div class="submit">
      <span class="form_title">注册</span>
      <div class="form_input">
        <span>用户名：</span>
        <el-input class="inputs" type="text" />
      </div>
      <div class="form_input">
        <span>密码：</span>
        <el-input class="inputs" type="password" />
      </div>
      <div class="form_input">
        <span>确认密码：</span>
        <el-input class="inputs" type="password" />
      </div>
      <div class="form_input">
        <span>电话：</span>
        <el-input class="inputs" type="password" />
      </div>
      <div class="form_input">
        <span>生日：</span>
        <el-input class="inputs" type="password" />
      </div>
      <div class="form_input">
        <span>头像：</span>
        <el-input class="inputs" type="password" />
      </div>

      <div class="b_submit">
         <el-button class="b">重置</el-button>
         <el-button class="home_href">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import bgcImage from '/src/assets/images/pur.jpg'
export default {
  name: "Register",
  data(){
      return{
          bgcImage
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
  height: 550px;
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
