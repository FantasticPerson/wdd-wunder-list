<template>
    <div class="outer" @click.prevent.stop="onBgClick">
        <div class="container" @click.prevent.stop="()=>{}">
            <ul class="list-menu">
                <li class="item border-b normal" @click="onEditClick('setUserName')">编辑用户名</li>
                <li class="item disable border-b">备份</li>
                <li class="item disable">恢复备份</li>
            </ul>
        </div>
    </div>
</template>
<script>

import EventBus from '../utils/bus'

export default {
    methods:{
        onBgClick:()=>{
            EventBus.$emit('hideUserMenu')
        },
        onEditClick:()=>{
            EventBus.$emit('setUserName')
        }
    }
}
</script>
<style scoped>
    .outer{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
    }
    .container{
        position: absolute;
        background: #fff;
        min-height: 15px;
        min-width: 200px;
        max-width: 304px;
        z-index: 1500;
        color: #262626;
        box-shadow: 0 1px 4px rgba(0,0,0,0.2);
        border-radius: 3px;
        width: 200px;
        border: 1px solid #f9f9f9;
        padding: 12px;
        font-size: 13px;
        text-align: left;
        height: 100px;
        left: 10px;
        top:84px;
    }
    ul{
        list-style: none;
    }
    .item{
        margin: 5px;
        cursor: pointer;
    }
    .border-b{
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    .disable{
        color: #aaa;
    }
    .disable{
        cursor: initial;
    }
</style>

