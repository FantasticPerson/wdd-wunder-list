<template>
    <div :class="classNames">
        <div class="search-bar">
            <span class="toggle-icon" title="Toggle Sidebar" @click="toggleClick()">
                <svg class="list-toggle" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M0.5,3.5l19,0" style="fill:none;stroke-width:1px;stroke:white;"></path> <path d="M0.5,9.53l19,0" style="fill:none;stroke-width:1px;stroke:white;"></path> <path d="M0.5,15.5l19,0" style="fill:none;stroke-width:1px;stroke:white;"></path> </g> </svg>
            </span>
            <div class="search-input-wrapper"> 
                <input ref="searchInput" class="chromeless search-input" type="text"> 
            </div>
            <span class="search-icon-wrapper"> 
                <span class="search-icon hidden" title="搜索" v-if="showSearchIcon" @click.prevent.stop="changeSearchMode(true)">
                    <svg class="search rtl-flip" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g> <path d="M8.5025,15 C4.9225,15 2.0025,12.08 2.0025,8.5 C2.0025,4.92 4.9225,2 8.5025,2 C12.0825,2 15.0025,4.92 15.0025,8.5 C15.0025,12.08 12.0825,15 8.5025,15 L8.5025,15 Z M8.5025,3 C5.4625,3 3.0025,5.46 3.0025,8.5 C3.0025,11.54 5.4625,14 8.5025,14 C11.5425,14 14.0025,11.54 14.0025,8.5 C14.0025,5.46 11.5425,3 8.5025,3 L8.5025,3 Z M17.5025,18 C17.3825,18 17.2425,17.96 17.1425,17.86 L13.6425,14.36 C13.4625,14.16 13.4625,13.84 13.6425,13.64 C13.8425,13.46 14.1625,13.46 14.3625,13.64 L17.8625,17.14 C18.0425,17.34 18.0425,17.66 17.8625,17.86 C17.7625,17.96 17.6225,18 17.5025,18 L17.5025,18 Z" id="z"></path> </g> </g> </svg>
                </span> 
                <span class="search-stop-icon" title="退出搜索" v-if="!showSearchIcon" @click.prevent.stop="changeSearchMode(false)">
                    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.991,10.832c-1.716,1.671 -3.445,3.329 -5.137,5.022c-0.058,0.052 -0.12,0.095 -0.195,0.12c-0.039,0.013 -0.05,0.014 -0.09,0.021c-0.046,0.004 -0.046,0.004 -0.092,0.004c-0.078,-0.007 -0.151,-0.024 -0.22,-0.062c-0.193,-0.108 -0.294,-0.336 -0.244,-0.551c0.018,-0.078 0.055,-0.143 0.102,-0.205c1.627,-1.785 3.329,-3.499 5.053,-5.19c-1.671,-1.716 -3.329,-3.445 -5.022,-5.137c-0.052,-0.058 -0.095,-0.12 -0.12,-0.195c-0.081,-0.242 0.039,-0.513 0.272,-0.616c0.056,-0.025 0.117,-0.04 0.179,-0.042c0.128,-0.006 0.242,0.038 0.342,0.114c1.785,1.627 3.499,3.329 5.19,5.053c1.716,-1.671 3.445,-3.329 5.137,-5.022c0.058,-0.052 0.12,-0.095 0.195,-0.12c0.059,-0.02 0.121,-0.028 0.182,-0.025c0.255,0.011 0.465,0.221 0.476,0.476c0.006,0.128 -0.038,0.242 -0.114,0.342c-1.627,1.785 -3.329,3.499 -5.053,5.19c1.671,1.716 3.329,3.445 5.022,5.137c0.052,0.058 0.095,0.12 0.12,0.195c0.07,0.21 -0.009,0.447 -0.191,0.571c-0.066,0.045 -0.137,0.069 -0.214,0.083c-0.046,0.004 -0.046,0.004 -0.092,0.004c-0.078,-0.007 -0.151,-0.024 -0.22,-0.062c-0.036,-0.02 -0.044,-0.028 -0.076,-0.052c-1.785,-1.627 -3.499,-3.329 -5.19,-5.053Z"></path> </g> </svg> 
                </span> 
            </span>
        </div>
    </div>
</template>
<script>
let canClick = true;
export default {
    data(){
        return {
            classNames:'container',
            showSearchIcon:true
        }
    },
    created(){
        window.onresize = ()=>{
            this.windowResize()
        }
        this.windowResize()
    },
    mounted(){
        const {searchInput} = this.$refs
        searchInput.onfocus = ()=>{
            this.onInputFocusChange(true)
        }

        searchInput.onblur = ()=>{
            this.onInputFocusChange(false)
        }
    },
    methods:{
        windowResize(){
            if(window.innerWidth > 900){
                this.classNames = 'container';
            } else {
                this.classNames = 'container flex-base';
            }
        },
        onInputFocusChange(bool){
            const {searchInput} = this.$refs
            if(bool){
                this.showSearchIcon = false
            } else {
                if(searchInput.value.trim().length === 0){
                    this.showSearchIcon = true
                } else {
                    this.showSearchIcon = false
                }
            }
        },
        toggleClick(){
            
        },
        changeSearchMode(bool){
            if(!canClick) return;

            canClick = false;
            setTimeout(()=>{
                canClick = true
            },500)

            const {searchInput} = this.$refs
            if(bool){
                searchInput.focus()
                this.showSearchIcon = false
            } else {
                searchInput.value = ""
                searchInput.blur()
                this.showSearchIcon = true
            }
        }
    }
}
</script>
<style scoped>
    .container{
        transition: width 100ms ease;
        width:280px;
        background-color: #F7F7F7;
        height: 100vh;
        position: absolute;
        top:0;
        z-index: 3;
    }
    .flex-base{
        width:42px;
    }
    .search-bar{
        background-color: #03719e;
        height: 45px;
        display: flex;
    }
    .list-toggle{
        width: 45px;
        height: 45px;
        fill: #fff;
        padding: 13px 11px 12px 11px;
        flex-shrink: 0;
    }
    .search-input-wrapper{
        flex:1;
    }
    .search-input-wrapper input{
        font-size: 18px;
        color: #fff;
        height: 45px;
        border: none !important;
        background: none !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        padding: 0;
        line-height: 20px;
        width: 100%;
        padding: 6px;
        font-weight: 500;
        font-size: 15px;
        transition: all 0.15s ease-in-out;
        user-select: text;
    }
    .search,.search-stop-icon{
        cursor: pointer;
        color:#FFF;
        fill:#FFF;
        width: 45px;
        height: 45px;
        padding:13px 11px 12px 11px;
        display: inline-block;
    }
</style>