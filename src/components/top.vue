<template>
  <div class="box" >
    <p>行业排名</p>
    <el-table :data="tableData" style="width: 100%">  
    <el-table-column prop="name" label="行业名称" >
    </el-table-column>
    <el-table-column prop="num" label="涨跌率"  sortable>
      <template #default="{ row }">
        <p :style="row.num>0?'color:red':'color:green'" style="padding:0;margin: 0;">
          {{row.num>0?`+${row.num}`: row.num}}%</p>  
      </template>
    </el-table-column>
    <el-table-column prop="gp" label="股票"> </el-table-column>
  </el-table>
  <div  class="block" >
    <el-pagination layout="prev, pager, next" :total="data.length" @current-change="onChange"> </el-pagination>
  </div>
  </div>
  
</template>

<script setup lang="ts">
import { ref } from "vue"
import { onMounted } from "vue"
let tableData=ref([])
let data=[
{name:'石油石化1',num:0.06,gp:'通力石化'},
  {name:'石油石化2',num:-0.06,gp:'通力石化'},
  {name:'石油石化3',num:-0.06,gp:'通力石化'},
  {name:'石油石化4',num:0.07,gp:'通力石化'},
  {name:'石油石化5',num:-0.07,gp:'通力石化'},
  {name:'石油石化6',num:-0.06,gp:'通力石化'},
  {name:'石油石化7',num:-0.06,gp:'通力石化'},
  {name:'石油石化8',num:-0.06,gp:'通力石化'},
  {name:'石油石化9',num:-0.06,gp:'通力石化'},
  {name:'石油石化10',num:-0.06,gp:'通力石化'},
  {name:'石油石化11',num:-0.06,gp:'通力石化'},
  {name:'石油石化12',num:-0.06,gp:'通力石化'},
  {name:'石油石化13',num:-0.06,gp:'通力石化'},
  {name:'石油石化14',num:-0.06,gp:'通力石化'},
  {name:'石油石化15',num:-0.06,gp:'通力石化'},
  {name:'石油石化16',num:-0.06,gp:'通力石化'},
  {name:'石油石化17',num:-0.06,gp:'通力石化'},
  {name:'石油石化18',num:-0.06,gp:'通力石化'},
  {name:'石油石化19',num:-0.06,gp:'通力石化'},
  {name:'石油石化20',num:-0.06,gp:'通力石化'},
  {name:'石油石化21',num:-0.06,gp:'通力石化'},
]
let [page1,page2,page3]:any=[[],[],[]]
data.forEach((e,index) => {
  if(index<8){
    page1.push(e)
  }else if(index<16){
    page2.push(e)
  }else{
    page3.push(e)
  }
});
const onChange  = (index:number) => {
  if(index==1) tableData.value=page1
  else if(index==2) tableData.value=page2
  else tableData.value=page3
  
}
onMounted(() => {
  tableData.value=page1
})
</script>

<style scoped lang="scss">
.box{
  min-height: 420px;
  height: 420px;
  .block{
    display: flex;
  justify-content: center;
  }
}

</style>