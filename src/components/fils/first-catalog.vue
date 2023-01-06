<template>
    <div>
        <h1>11111</h1>
        <p>{{this.$route.params.path}}</p>
    </div>
</template>

<script>
    export default {
        name:'FirstCatalog',
        data(){
            return{
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

</style>