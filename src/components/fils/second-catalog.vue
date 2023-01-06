<template>
  <div>
    <el-form v-model="fils">
      <div v-for="(item, index) in fils" :key="index">
        <div style="float: left">
          <div class="filbox">
            <el-image
              :src="bgcImg"
              style="width: 100px; height: 100px"
            ></el-image>
            <span class="filPath" @click="goFile(item.file_name)">{{
              item.file_name
            }}</span>
            <div>文件类型：{{ item.type }}</div>
          </div>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import bgcImg from "/src/assets/images/title.jpg";
import getfile from "/src/api/file";
export default {
  name: "SecondCatalog",
  data() {
    return {
      bgcImg,
      data: '',
      fils: [],
      lastName:''
    };
  },
  methods: {
    getfils() {
      let require_path =this.lastName+ '/'+ this.data;
      let token = localStorage.getItem("token");
      getfile(token, require_path).then((res) => {
        this.fils = res.data;
      });
    },
    // goFile(name) {
    //   // console.log(e);
    //   // var test = e.split("\\");
    //   // console.log(test);
    //   this.$router.push({
    //     path: "/home/allfile/second-catalog",
    //     name: "SecondCatalog",
    //     params: {
    //       name,
    //     },
    //   });
    // },
  },
  mounted() {
    console.log(this.$route.params.name);
    this.data = this.$route.params.name;
    this.lastName = this.$route.params.lastName;
    console.log(this.data);
    this.getfils()
  },
};
</script>

<style scoped></style>
