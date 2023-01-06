<template>
  <div>
    <h1>文件传输</h1>
    <div style="margin-top: 50px; margin-left: 50px">
      <el-upload
        class="upload-demo"
        drag
        action=""
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="1"
        :on-exceed="handleExceed"
        :file-list="fileList"
        :before-upload="BeforeUpload"
        :http-request="Upload"
        :headers="headers"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__tip" slot="tip">请勿上传1G以上的文件</div>
      </el-upload>
       <el-input v-model="path" placeholder="请输入存放路径"></el-input>
       <div class="el-upload__text"><el-button type="primary">点击上传</el-button></div>
    </div>
    <!-- <div class="upload">
      <div class="div-label">
        <label
          >请输入需要下载的文件<span style="font-weight: bold;padding-bottom:20px"
            ></span
          ></label
        >
        <el-input placeholder="请输入文件路径"></el-input>
      </div>
      <el-button
        @click="download"
        class="el-button-color add-button-box"
        size="medium"
        type="primary"
      >
        <i class="el-icon-download el-icon--right">下载文件</i>
      </el-button>
    </div> -->
  </div>
</template>

<script>
import getfile from "/src/api/upload"
export default {
  name: "Transmit",
  data() {
    return {
      headers: {
        Authorization:localStorage.getItem("token"),
      },
      fileList: [],
      newFile:new FormData(),
      filename:'',
      suffix:'',
      path:''
    };
  },
  methods:{
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      BeforeUpload(file){
        if(file){
          this.newFile.append('file',file);
          this.filename = this.newFile.get('file').name.split('.')[0]
          this.suffix = this.newFile.get('file').type.split('/')[1]
          // console.log(this.filename);
          // console.log(this.newFile.get('file'));
        }else{
          return false
        }
      },
      Upload(){
        const token = localStorage.getItem('token')
        const newData = this.newFile;
        console.log(newData);
        getfile(token,this.filename,this.suffix,this.path,newData).then((res=>{
          console.log(res);
        }))
      }
  }
};
</script>

<style scoped>
.div-label {
  margin-top: 100px;
}
.upload {
  width: 500px;
  height: 500px;
  margin-left: 50px;
}
</style>
