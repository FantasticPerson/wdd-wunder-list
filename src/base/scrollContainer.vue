<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
export default {

}
</script>
<style>
    .wrapper{
        overflow-x: hidden;
        overflow-y: auto;
        height:100%;
        margin-right: 7px;
        margin-left: 7px;
        padding-left: 7px;
        padding-right: 7px;
    }
    .wrapper *::-webkit-scrollbar{
        width:6px;
    }
    .wrapper *::-webkit-scrollbar-button{
        height:0;
        background-color:transparent
    }
    .wrapper *::-webkit-scrollbar-corner{
        background-color:transparent
    }
    .wrapper *::-webkit-scrollbar-track{
        background-color:transparent
    }
    .wrapper *::-webkit-scrollbar-thumb{
        border-radius:6px;
        background-color:rgba(0,0,0,0.2)
    }
    .wrapper *::-webkit-resizer{
        height:0;
        background-color: transparent
    }
</style>


