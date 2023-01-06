<template>
    <div>
        <!-- <p>{{this.$route.params.path[1]}}</p> -->
        <div style="float: left">
          <div class="filbox">
            <el-image
                :src="bgcImg"
                style="width: 100px; height: 100px"
              ></el-image>
            <span class="filPath">{{this.$route.params.path[1]}}</span>
            <!-- <div>文件类型：{{ item.type }}</div> -->
          </div>
        </div>
    </div>
</template>

<script>
    import bgcImg from "/src/assets/images/title.jpg";
    export default {
        name:'FirstCatalog',
        data(){
            return{
                bgcImg,
                data:[]
            }
        },
        methods:{

        },
       mounted(){
        console.log(this.$route.params.path);
        this.data=this.$route.params.path
        console.log(this.data);
       }
    }
</script>

<style scoped>
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
</style>