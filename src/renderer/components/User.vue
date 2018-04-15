<template>
    <div class="user-toolbar" @click.prevent.stop="onUserClick">
        <span class="user">
            <span class="user-avatar">
                <div class="avatar">d</div>
            </span>
            <span class="user-name">dandan.wu</span>
            <span class="user-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M10.502,13c-0.132,0 -0.26,-0.053 -0.354,-0.146l-4.002,-4c-0.195,-0.195 -0.195,-0.512 0,-0.708c0.195,-0.195 0.512,-0.195 0.707,0l3.649,3.647l3.644,-3.647c0.195,-0.195 0.512,-0.195 0.707,0c0.195,0.195 0.195,0.512 0,0.708l-3.997,4c-0.094,0.093 -0.221,0.146 -0.354,0.146"></path> </g> </svg>
            </span>
        </span>
        <div class="stream-count">
            <span class="activity-count">
                <svg class="bell" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="bell"> <path d="M15.2,10.14 C14.74,9.6 14.46,8.92 14.4,8.2 L14.28,6.94 C14.14,5.08 12.76,3.54 11,3.12 L11,3 C11,2.44 10.56,2 10,2 C9.44,2 9,2.44 9,3 L9,3.12 C7.24,3.54 5.86,5.08 5.72,6.94 L5.6,8.2 C5.54,8.92 5.28,9.6 4.8,10.16 L4.04,11.06 C3.38,11.88 3,12.9 3,13.94 L3,14.5 C3,14.78 3.22,15 3.5,15 L16.5,15 C16.78,15 17,14.78 17,14.5 L17,13.94 C17,12.9 16.62,11.88 15.96,11.06 L15.2,10.14 Z M16,14 L4,14 L4,13.94 C4,13.14 4.28,12.34 4.82,11.7 L5.58,10.8 C6.18,10.08 6.52,9.2 6.6,8.28 L6.7,7.02 C6.84,5.34 8.3,4 10,4 C11.7,4 13.16,5.34 13.3,7.02 L13.4,8.28 C13.48,9.2 13.84,10.08 14.42,10.8 L15.18,11.7 C15.72,12.34 16,13.14 16,13.94 L16,14 Z M12.3,16.1 C12.08,15.94 11.76,15.98 11.58,16.2 C10.82,17.22 9.18,17.22 8.4,16.2 C8.24,15.98 7.92,15.94 7.7,16.1 C7.48,16.26 7.44,16.58 7.62,16.8 C8.18,17.56 9.06,18 10,18 C10.94,18 11.82,17.56 12.38,16.8 C12.56,16.58 12.52,16.26 12.3,16.1 L12.3,16.1 Z" id="m"></path> </g> </g> </svg>
                <span class="count">{{overDayNum}}</span>
            </span>
        </div>
    </div>
</template>
<script>

import EventBus from '../utils/bus'
import {mapGetters} from 'vuex'
import moment from 'moment'

export default {
    computed:{
        ...mapGetters([
            'notDoneTodoItems'
        ]),
        overDayNum(){
            console.log(this.notDoneTodoItems)
            let list = this.notDoneTodoItems.filter((item)=>{
                let cData = moment(item.dueDate.length > 0 ? item.dueDate : item.date).format('YYYY/MM/DD')
                let now = moment().format('YYYY/MM/DD')
                let nowTime = moment(now)
                let cDataTime = moment(cData)

                return nowTime.diff(cDataTime) > 0
            })
            return list.length
        }
    },
    methods:{
        onUserClick:()=>{
            EventBus.$emit('showUserMenu')
        }
    }
}
</script>
<style scoped>
    .user-toolbar{
        height: 45px;
        display: flex;
        align-items: center;
        padding-top: 2px;
        padding-bottom: 4px;
        padding-left: 5px;
        cursor: pointer;
    }
    .user{
        height: 45px;
        align-items: center;
        display: flex;
        flex: 1;
        overflow: hidden;
    }
    .user-avatar{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #61D8E6;
        color: white;
        line-height: 32px;
        font-size: 15px;
    }
    .user-name{
        padding-left: 5px;
        padding-right: 5px;
        white-space: nowrap;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        font-size: 15px;
        line-height: 32px;
        color: #262626;
    }
    .user-arrow{
        height: 20px;
        width: 20px;
    }
    .stream-count{
        display: flex;
        margin-top: 3px;
        flex-shrink: 0;
    }
    .activity-count{
        position: relative;
        padding-left: 10px;
        padding-right: 10px;
        fill:#737272;
    }
    .count{
        position: absolute;
        top: -8px;
        right: 6px;
        background: #d74e48;
        color: #fff;
        font-size: 10px;
        line-height: 10px;
        border-radius: 20px;
        padding: 2px 2px 3px 2px;
        text-align: center;
        min-width: 11px;
        box-sizing: content-box;
    }
</style>
