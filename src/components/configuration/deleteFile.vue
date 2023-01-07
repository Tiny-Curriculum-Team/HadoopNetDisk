<template>
    <div>
        <span>请输入需要删除的文件路径</span>
        <el-input class="input" v-model="file_paths"></el-input>
        <el-button type="danger" @click="deleteFils" class="delFile">删除文件</el-button>
    </div>
</template>

<script>
import deleteFile from "/src/api/delete"
    export default {
        name:"deleteFile",
        data(){
            return{
                file_paths:''
            }
        },
        methods:{
            deleteFils(){
                const token = localStorage.getItem('token')
                deleteFile(token,this.file_paths).then((res)=>{
                    if(res.data.code ==200){
            this.$message({
                showClose: true,
                message: '删除成功',
                type: 'success'
                });
          }
                })
            }
        }
    }
</script>

<style scoped>
.input{
    margin-top: 10px;
}

.delFile{
    margin-top: 10px;
}

</style>