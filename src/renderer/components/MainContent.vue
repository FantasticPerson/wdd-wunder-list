<template>
    <div :class="classNames">
        <TaskItemContext v-if="showContext"  :clickX="clickX" :clickY="clickY" :data="clickData"></TaskItemContext>
        <div class="list-toolbar">
            <h1 class="title">{{filterName}}</h1>
            <div class="actionBar">
                <div class="actionBar-bottom">
                    <span class="tab">
                        <svg class="sort-az" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-disabled="false"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="sort-az"> <path d="M14.2,2.3 C14.12,2.12 13.94,2 13.76,2 L13.26,2 C13.06,2 12.88,2.12 12.8,2.3 L10.04,8.3 C9.94,8.54 10.04,8.84 10.3,8.96 C10.54,9.08 10.84,8.96 10.96,8.7 L11.74,7 L15.26,7 L16.04,8.7 C16.14,8.9 16.32,9 16.5,9 C16.58,9 16.64,8.98 16.7,8.96 C16.96,8.84 17.06,8.54 16.96,8.3 L14.2,2.3 Z M5.64,3.02 C5.56,3 5.48,3 5.4,3 C5.3,3.02 5.22,3.08 5.14,3.16 L3.14,5.14 C2.96,5.34 2.96,5.66 3.14,5.86 C3.34,6.04 3.66,6.04 3.86,5.86 L5,4.7 L5,8.5 C5,8.78 5.22,9 5.5,9 C5.78,9 6,8.78 6,8.5 L6,4.7 L7.14,5.86 C7.24,5.96 7.38,6 7.5,6 C7.62,6 7.76,5.96 7.86,5.86 C8.04,5.66 8.04,5.34 7.86,5.14 C5.68,2.98 5.8,3.08 5.64,3.02 L5.64,3.02 Z M14.8,6 L12.2,6 L13.5,3.16 L14.8,6 Z M6,15.3 L6,11.5 C6,11.22 5.78,11 5.5,11 C5.22,11 5,11.22 5,11.5 L5,15.3 L3.86,14.14 C3.66,13.96 3.34,13.96 3.14,14.14 C2.96,14.34 2.96,14.66 3.14,14.86 C5.28,17 5.2,16.96 5.4,17 C5.56,17.02 5.74,16.98 5.86,16.84 L7.86,14.86 C8.04,14.66 8.04,14.34 7.86,14.14 C7.66,13.96 7.34,13.96 7.14,14.14 L6,15.3 Z M15.94,11.26 C15.86,11.1 15.68,11 15.5,11 L11.5,11 C11.22,11 11,11.22 11,11.5 C11,11.78 11.22,12 11.5,12 L14.56,12 L11.08,17.22 C10.98,17.38 10.98,17.58 11.06,17.74 C11.14,17.9 11.32,18 11.5,18 L15.5,18 C15.78,18 16,17.78 16,17.5 C16,17.22 15.78,17 15.5,17 L12.44,17 L15.92,11.78 C16.02,11.62 16.02,11.42 15.94,11.26 L15.94,11.26 Z" id="sort"></path> </g> </g> </svg>
                        <span class="tab-text">排序</span>
                    </span>
                    <span class="tab">
                        <svg class="folder-option" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g id="Layer 1"> <path d="M3.5,11c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5Z"></path> <path d="M9.5,11c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5Z"></path> <path d="M15.5,11c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5Z"></path> </g> </svg>
                        <span class="tab-text">更多</span>
                    </span>
                </div>
            </div>
        </div>
        <div class="task-scrolls">
            <ScrollContainer>
                <AddTask :filterId="filterId" v-if="filterId !== -1"></AddTask>
                <h2 class="show-more" v-if="filterId === -1">
                    <span class="filter-name">{{weekTitle}}</span>
                </h2>
                <div class="tasks">
                    <ol class="task-list" v-if="notDonetodoItems && notDonetodoItems.length > 0">
                        <TaskItem v-for="item in notDonetodoItems" :key="item.id" :data="item" :filterId="filterId" :filters="filters"></TaskItem>
                    </ol>
                </div>
                <h2 class="show-more" v-if="showShowMore" @click.prevent.stop="showMoreClick"><span>显示以完成的任务</span></h2>
                <div class="tasks" v-if="showNotDoneTodo && showShowMore">
                    <ol class="task-list" v-if="doneTodoItems && doneTodoItems.length > 0">
                        <TaskItem v-for="item in doneTodoItems" :key="item.id" :data="item" :filterId="filterId" :filters="filters"></TaskItem>
                    </ol>
                </div>
            </ScrollContainer>
        </div>
    </div>
</template>
<script>

import ScrollContainer from '../base/scrollContainer'
import AddTask from './AddTask' 
import TaskItem from './TaskItem'
import {mapGetters,mapActions} from 'vuex'
import moment from 'moment'
import TaskItemContext from './TaskItemContext'
import EventBus from '../utils/bus'
import Reducers from '../store/reducers'

export default {
    data(){
        return {
            classNames:'container',
            showNotDoneTodo:false,
            weekTitle:'',
            showContext:false,
            clickX:0,
            clickY:0,
            clickData:{}
        }
    },
    computed:{
        ...mapGetters([
            'filterId',
            'filters',
            'notDonetodoItems',
            'doneTodoItems'
        ]),
        filterName(){
            let filterItem = this.filters.find((item)=>{
                return this.filterId === item.id
            })
            if(filterItem){
                return filterItem.title
            }
        },
        showShowMore(){
            if(this.filterId !== -3 && this.filterId !== -2 && this.filterId !== -1){
                return true
            }
            return false
        }
    },
    mounted(){
        let month = moment().month()
        let date = moment().date()
        date = String(date).length === 1 ? '0'+date : date
        this.weekTitle = `今天,${month+1}月.${date}`
        /*window.onresize = ()=>{
            this.windowResize()
        }
        this.windowResize()*/

        EventBus.$on('showTaskItemContext',(data)=>{
            this.clickX = data.clickX
            this.clickY = data.clickY
            this.clickData = data.data
            this.showContext = true
            this.updateContextTaskItem(data.data)
        })
        EventBus.$on('hideContextMenu',(data)=>{
            this.showContext = false
        })
        EventBus.$on('doTaskItemTask',(data)=>{
            if(data.taskName === 'delete'){
                Reducers.dealWidthDelTodoItem(this.clickData.id)
                this.showContext = false
                // this.$modal.show('edit-task-modal')
            } else {
                this.showContext = false
                this.$modal.show('edit-task-modal')
            }
        })
    },
    methods:{
        ...mapActions([
            'updateContextTaskItem'
        ]),
        windowResize(){
            if(window.innerWidth > 900){
                this.classNames = 'container';
            } else {
                this.classNames = 'container flex-base';
            }
        },
        showMoreClick(){
            this.showNotDoneTodo = !this.showNotDoneTodo
        },
        
    },
    components:{
        ScrollContainer,
        AddTask,
        TaskItem,
        TaskItemContext
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
        display: flex;
        flex-direction: column;
    }

    .flex-base{
        padding-left:42px;
    }

    .list-toolbar{
        background: #0483b7;
        position: relative;
        height: 45px;
        min-height: 45px;
        display: flex;
    }

    .list-toolbar h1{
        flex: 1;
        font-size: 20px;
        color: #fff;
        padding: 10px 14px;
        font-weight: 200;
        white-space: nowrap;
        overflow: hidden;
        text-align: left;
        line-height: 26px;
    }
    .actionBar{
        opacity: 1;
        filter: none;
        padding: 0 !important;
        transition: opacity 200ms ease-in;
        position: relative;
    }
    .actionBar-bottom{
        text-align: center;
        font-size: 0;
        padding-top: 0;
        height: 45px;
    }
    .tab{
        cursor: pointer;
        display: inline-block;
        min-width: 40px;
        padding: 6px;
        margin: 0 5px;
    }
    .tab svg{
        fill: #fff;
    }
    .tab-text{
        font-size: 10px;
        color: #fff;
        display: block;
        text-align: center;
    }
    .taskList{
        position: relative;
        flex: 1;
    }
    .task-scrolls{
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        flex: 1;
    }
    .show-more{
        margin-top: 20px !important;
        margin-bottom: 10px;
        word-wrap: break-word;
        word-break: break-word;
        font-size: 11px;
        color: #fff;
        position: relative;
        text-align: left;
    }
    .show-more span{
        background: rgba(4,131,183,0.75);
        color: #fff;
        padding: 3px 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 400;
        display: inline-block;
        box-sizing: border-box;
        line-height: 16px;
        border-radius: 3px;
        cursor: pointer;
    }
    .filter-name{
        background: rgba(4,131,183,0.75);
        color: #fff;
        padding: 3px 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 400;
        display: inline-block;
        box-sizing: border-box;
        line-height: 16px;
        border-radius: 3px;
    }
</style>
