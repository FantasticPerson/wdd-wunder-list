<template>
  <div id="app">
    <AddFilterModal></AddFilterModal>
    <Home/>
  </div>
</template>

<script>

import Home from './components/Home'
import AddFilterModal from './base/addFilterModal'

export default {
  name: 'App',
  components:{
    Home,
    AddFilterModal
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
