<template>
  <div>
    <h1>用户基本信息</h1>
    <div class="mainbox">
      <div class="avatar">
        <el-avatar :size="100" :src="avatar"></el-avatar>
      </div>
      <div class="info">
        <el-form ref="form" :model="form" label-width="80px">
  <el-form-item>
  </el-form-item>
  <el-form-item label="性别">
    <el-select v-model="form.region" placeholder="请选择性别">
      <el-option label="男" value="shanghai"></el-option>
      <el-option label="女" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="用户名">
    <el-input v-model="form.delivery"></el-input>
  </el-form-item>
 <el-form-item label="生日">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
  
  <el-form-item label="个人介绍">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from "/src/assets/images/title.jpg";
export default {
  name: "BaseInfor",
  data() {
    return {
      avatar,
      form: {
          name: '',
          region: '',
          date1: '',
          delivery: '',
          desc: ''
        }
    };
  },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
};
</script>

<style scoped>
.mainbox {
  width: 700px;
  height: 600px;
  margin: 0 auto;
  background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.avatar {
  height: 100px;
  width: 100px;
  float: left;
  margin-left: 300px;
  border-radius: 50%;
  margin-top:35px;
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
</style>
