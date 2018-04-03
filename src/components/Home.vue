<template>
    <div class="container">
        <SliderBar/>
        <MainContent/>
    </div>
</template>
<script>
import MainContent from './MainContent'
import SliderBar from './SliderBar'

export default {
    components:{
        MainContent,
        SliderBar
    }
}
</script>
<style scoped>
    .container{
        height:100vh;
        width:100%;
    }
</style>


