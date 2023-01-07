<template>
    <div>
        <div style="margin-top: 50px; margin-left: 50px">
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