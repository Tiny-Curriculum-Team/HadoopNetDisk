<template>
    <div>
        <h1>分类文件</h1>
        <div class="table">
            <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="序号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="分类名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="文件介绍">
    </el-table-column>
  </el-table>
</template>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ClassFy',
        data(){
            return{
                tableData: [{
          date: '1',
          name: 'Hbase',
          address: 'Hbase'
        }, {
          date: '2',
          name: 'Javaee',
          address: 'Javaee'
        }, {
          date: '3',
          name: 'Django',
          address: 'Django'
        }, {
          date: '4',
          name: 'Vue',
          address: 'Vue'
        }]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>