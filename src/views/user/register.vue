<template>
  <div class="my">
    <img class="bgc" :src="bgcImage" alt="" />
    <div class="submit">
      <span class="form_title">注册</span>
      <el-form :model="registerForm">
        <div class="form_input">
          <span>用户名：</span>
          <el-form-item>
            <el-input
              class="inputs"
              type="text"
              v-model="registerForm.username"
            />
          </el-form-item>
        </div>
        <div class="form_input">
          <span>密码：</span>
          <el-form-item>
            <el-input
              class="inputs"
              type="password"
              v-model="registerForm.password1"
            />
          </el-form-item>
        </div>
        <div class="form_input">
          <span>确认密码：</span>
          <el-form-item>
            <el-input
              class="inputs"
              type="password"
              v-model="registerForm.password2"
            />
          </el-form-item>
        </div>
        <div class="form_input">
          <span>电话：</span>
          <el-form-item>
            <el-input
              class="inputs"
              v-model="registerForm.tele"
            />
          </el-form-item>
        </div>
        <div class="form_input">
          <span>生日：</span>
          <el-form-item>
            <!-- <el-input class="inputs" type="password" v-model="registerForm.birth"/> -->
            <el-date-picker
              v-model="registerForm.birth"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </el-form-item>
        </div>
        <div class="form_input">
          <span>头像：</span>
          <el-form-item>
            <el-upload
              class="avatar-uploader"
              action="/api/usr/signin/"
              :show-file-list="true"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </div>
      </el-form>
      <div class="b_submit">
        <el-button class="b">重置</el-button>
        <el-button class="home_href" @click="register">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import bgcImage from "/src/assets/images/pur.jpg";
import getRegistor from "/src/api/register"
export default {
  name: "Register",
  data() {
    return {
      bgcImage,
      registerForm: {
        username: "",
        password1: "",
        password2: "",
        avatar: "",
        tele: "",
        birth: "",
      },
      imageUrl:''
    };
  },
  methods: {
    register() {
      getRegistor(this.registerForm).then((res)=>{
        console.log(res);
        if(res.data.code==200){
          this.$message({
                showClose: true,
                message: '注册成功',
                type: 'success'
                });
        }else{
          this.$message({
                showClose: true,
                message: '注册失败',
                type: 'error'
                });
        }
      })
    },
  },

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
  height: 100%;
}

.submit {
  position: absolute;
  z-index: 9;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  margin-top: 80px;
  width: 600px;
  height: 650px;
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

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .avatar {
    width: 30px;
    height: 30px;
    display: block;
  }
</style>
