<template>
    <div class="container" @click.prevent.stop="onBgClick">
        <div class="content" :style="styleObj" ref="wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>

import EventBus from '../utils/bus'

export default {
    data(){
        return {
            styleObj:{
                left:0,
                top:0,
                opacity:0
            }
        }
    },
    mounted(){
        setTimeout(()=>{
            const {wrapper} = this.$refs
            let width = wrapper.clientWidth
            let height = wrapper.clientHeight

            let wWidth = window.innerWidth
            let wHeight = window.innerHeight

            let top = this.clickY + height > wHeight ? wHeight - height : this.clickY
            let left = this.clickX + width > wWidth ? wWidth - width : this.clickX

            this.styleObj = {
                top:top+'px',
                left:left+'px',
                opacity:1
            }
        },20)
    },
    methods:{
        onBgClick(){
            EventBus.$emit('hideContextMenu')
        }
    },
    props:{
        clickX:{
            type:[Number,String],
            required:true
        },
        clickY:{
            type:[Number,String],
            required:true
        }
    }
}
</script>
<style scoped>
    .container{
        position: fixed;
        top:0;
        left:0;
        right: 0;
        bottom:0;
        z-index:1000;
        width: 100%;
        height:100%;
        background: transparent;
    }
    .content{
        transition: opacity 200 ease-in;
        position: fixed;
        background-color: #FFF;
    }
    
</style>
