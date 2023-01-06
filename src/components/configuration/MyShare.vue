<template>
    <div>
        <div>
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
              <span class="text">分享文字</span>
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
              <span>分享文字</span>
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
                :src="fileImags"
                style="width: 100px; height: 100px"
              ></el-image>
              <span>分享文字</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import bgcImg from "/src/assets/images/title.jpg";
import fileImg from "/src/assets/images/file.png";
import fileImags from "/src/assets/images/file.jpg"
    export default {
        name:'MyShare',
        data() {
    return {
      bgcImg,
      fileImg,
      fileImags
    };
  },
    }
</script>

<style scoped>
.block{
  height:100px;
  display:flex;
  align-items:center;
}
.text{
  display:inline-block;
  height:100px;
  line-height:100px;
  flex-shrink:0;
  font-size:14px;
}
</style>