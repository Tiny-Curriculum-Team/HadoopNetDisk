<template>
    <div>
        <div style="margin-top: 50px; margin-left: 50px">
        <p style="margin-top:10px">请输入分享密码</p>
        <el-input v-model="share_password" show-password style="width:360px"></el-input>
        <p style="margin-top:20px">请选择文件分享失效日期</p>
        <el-date-picker
              v-model="deadline"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
      <el-upload
        class="upload-demo"
        drag
        action=""
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :limit="1"
        :file-list="fileList"
        :before-upload="BeforeUpload"
        :http-request="Upload"
        style="margin-top:20px"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
        <el-button type="primary">点击上传</el-button>
      </div>
        <div class="el-upload__tip" slot="tip">请勿上传1G以上的文件</div>
      </el-upload>
      
    </div>
    </div>
</template>

<script>
import shareFile from '/src/api/share'
    export default {
        name:"Share",
    data() {
    return {
      fileList: [],
      newFile: new FormData(),
      share_password:'',
      deadline:''
    };
  },methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
       this.newFile.append("file", file);
      console.log(file);
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    BeforeUpload(file) {
      if (file) {
        this.newFile.append("file", file);
      } else {
        return false;
      }
    },
    Upload() {
      const token = localStorage.getItem("token");
      this.newFile.append('token',token);
      this.newFile.append('share_password',this.share_password);
      this.newFile.append('deadline',this.deadline);
      const newData = this.newFile;
      shareFile(newData).then((res) => {
        console.log(res);
        if(res.data.code ==200){
            this.$message({
                showClose: true,
                message: '上传成功',
                type: 'success'
                });
          }
      });
    },
  },
  }
</script>

<style scoped>

</style>
