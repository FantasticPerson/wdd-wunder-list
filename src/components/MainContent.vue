<template>
    <div :class="classNames">
        456
    </div>
</template>
<script>


export default {
    data(){
        return {
            classNames:'container'
        }
    },
    mounted(){
        window.onresize = ()=>{
            this.windowResize()
        }
        this.windowResize()
    },
    methods:{
        windowResize(){
            if(window.innerWidth > 900){
                this.classNames = 'container';
            } else {
                this.classNames = 'container flex-base';
            }
        }
    }
}

</script>
<style scoped>
    .container{
        position: absolute;
        height: 100vh;
        padding-left: 280px;
        transition: left 100ms ease;
        background-color: #ccc;
        width: 100%;
        top:0;
        left: 0;
        background-image: url(../assets/img/08.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center top;
    }

    .flex-base{
        padding-left:42px;
    }
</style>
