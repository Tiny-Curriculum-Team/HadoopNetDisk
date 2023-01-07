<template>
  <div>
    <div>
      <el-button>显示全部文件</el-button>
      <input
        class="searcher"
        size="small"
        placeholder="请输入查找的文件名"
        el-icon-search
        v-model="prefix"
        @keyup.enter="searchFiles"
      >
    </div>
    
    <!-- <div>
      <div v-for="item of 4" :key="item">
        <div style="float: left">
          <div
            style="
              width: 1000px;
              height: 100px;
              margin-top: 20px;
              margin-left: 80px;
              border: 1px solid #ddd;
            "
          >
            <div class="block">
              <span class="demonstration"></span>
              <el-image
                :src="bgcImg"
                style="width: 100px; height: 100px"
              ></el-image>
              <span>这是一个文件介绍</span>
            </div>
          </div>
        </div>
        <div style="float: left">
          <div
            style=" width: 1000px; border: 1px ;border: 1px solid #ddd;margin-top:20px;margin-left:80px"
          >
            <div class="block">
              <span class="demonstration"></span>
              <el-image
                :src="fileImg"
                style="width: 100px; height: 100px"
              ></el-image>
              <span>这是一个文件介绍</span>
            </div>
          </div>
        </div>
        <div style="float: left">
          <div
            style=" width: 1000px; border: 1px ;solid #d9d9d9; borderRadius: 4px;margin-top:20px;margin-left:80px"
          >
            <div class="block">
              <span class="demonstration"></span>
              <el-image
                :src="fileImags"
                style="width: 100px; height: 100px"
              ></el-image>
              <span>这是一个文件介绍</span>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <el-form v-model="fils">
      <div v-for="(item, index) in fils" :key="index">
        <div style="float: left">
          <div class="filbox">
            <el-image
                :src="bgcImg"
                style="width: 100px; height: 100px"
              ></el-image>
            <span v-if="item.type==='DIRECTORY'" class="filPath" @click="goFile(item.file_name)">{{ item.file_name }}</span>
            <span v-else class="filPath">{{ item.file_name }}</span>
            <div>文件类型：{{ item.type }}</div>
          </div>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import bgcImg from "/src/assets/images/title.jpg";
import fileImg from "/src/assets/images/file.png";
import fileImags from "/src/assets/images/file.jpg";

import getfile from "/src/api/file";
import searchFile from "/src/api/search"

export default {
  name: "AllFile",
  data() {
    return {
      bgcImg,
      fileImg,
      fileImags,
      fils: [],
      prefix:''
      // require_path:''
    };
  },
  methods: {
    searchFiles() {
      const token = localStorage.getItem('token')
      searchFile(token,this.prefix).then((res)=>{
        this.fils = res.data;
        if(res.data.code ==200){
            this.$message({
                showClose: true,
                message: '搜索成功',
                type: 'success'
                });
          }
      })
    },
    getfiles() {
      let require_path = ''
      let token = localStorage.getItem('token')
      getfile(token,require_path).then((res) => {
        // console.log(res.data.data.data.length);
        this.fils = res.data;
        // for(var i=0;i<res.data.data.data.length;i++){
        //   this.fils.push(res.data.data.data[i])
        // }
        // res.data.data.data=this.fils;
        // console.log(this.fils);
      });
    },
    goFile(name){
      // console.log(e);
      // var test = e.split("\\");
      // console.log(test);
      this.$router.push({
        path:'/home/allfile/first-catalog',
        name:'FirstCatalog',
        params:{
          name
        }
      })
    }
  },
  mounted() {
    this.getfiles();
  },
};
</script>

<style scoped>
.searcher {
  width: 400px;
  height: 32px;
  margin-left: 700px;
}
.filbox {
  width: 1000px;
  height: 100px;
  margin-top: 20px;
  margin-left: 80px;
  border: 1px solid #ddd;
  display:flex;
  align-items:center;
  flex-wrap:wrap;
}
.filPath{
  display:inline-block;
  height:100px;
  width:400px;
  line-height:100px;
  flex-shrink:0;
  font-size:14px;
  margin-left:20px;
}
</style>
