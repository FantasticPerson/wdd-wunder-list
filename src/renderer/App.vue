<template>
  <div id="app">
    <AddFilterModal></AddFilterModal>
    <RemoveFilterModal></RemoveFilterModal>
    <EditTaskItemModal></EditTaskItemModal>
    <Home/>
  </div>
</template>

<script>

import Home from './components/Home'
import AddFilterModal from './base/addFilterModal'
import RemoveFilterModal from './base/removeFilterModal'
import EditTaskItemModal from './components/EditTaskItemModal'

export default {
  name: 'App',
  components:{
    Home,
    AddFilterModal,
    RemoveFilterModal,
    EditTaskItemModal
  }
}
</script>

<style>
#app {
  font-family: "Lato","Microsoft Yahei","微软雅黑","STXihei","Meiryo UI","Meiryo","メイリオ","ＭＳ Ｐゴシック","MS PGothic","Hiragino Kaku Gothic Pro","Arial Unicode MS","Helvetica Neue","Helvetica","Arial",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
