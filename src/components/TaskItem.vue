<template>
    <li class="taskItem">
        <span class="taskItem-checkWrapper">
            <span class="taskItem-check" title="标记为已完成">
                <svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>
            </span>
            <span class="taskItem-checked" title="标记为未完成">
                <svg class="task-checked" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path> <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path> </g> </svg>
            </span>
        </span>
        <div class="title-wrapper">
            <span class="title">{{data.title}}</span>
        </div>
        <span class="conversation-wrapper">
            <svg class="conversations-small rtl-flip" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g class="outlined"> <path d="M6.26,15 C5.98,15 5.68,14.96 5.38,14.9 C5.18,14.84 5.04,14.68 5,14.48 C4.98,14.26 5.08,14.06 5.26,13.96 C5.78,13.68 6.02,13.3 6,12.8 C6,12.48 5.84,12.16 5.64,11.76 C5.36,11.18 5,10.48 5,9.5 C5,7.02 7.24,5 10,5 C12.76,5 15,7.02 15,9.5 C15,11.98 12.76,14 10,14 C9.58,14 9.16,13.96 8.76,13.86 C8.38,14.28 7.56,15 6.26,15 L6.26,15 Z M10,6 C7.8,6 6,7.56 6,9.5 C6,10.24 6.28,10.78 6.54,11.32 C6.78,11.8 7,12.26 7,12.78 C7,13.22 6.9,13.62 6.7,13.96 C7.64,13.78 8.12,13.06 8.14,13.02 C8.26,12.84 8.5,12.76 8.7,12.82 C9.14,12.94 9.56,13 10,13 C12.2,13 14,11.42 14,9.5 C14,7.56 12.2,6 10,6 L10,6 Z"></path> </g> <g class="filled"> <path d="M6.26,15 C5.98,15 5.68,14.96 5.38,14.9 C5.18,14.84 5.04,14.68 5,14.48 C4.98,14.28 5.08,14.08 5.26,13.98 C5.78,13.68 6.02,13.32 6,12.8 C6,12.5 5.84,12.16 5.64,11.78 C5.36,11.2 5,10.48 5,9.5 C5,7.02 7.24,5 10,5 C12.76,5 15,7.02 15,9.5 C15,11.98 12.76,14 10,14 C9.58,14 9.16,13.96 8.76,13.88 C8.38,14.28 7.56,15 6.26,15 L6.26,15 Z" opacity="0"></path> </g> </svg>
        </span>
        <span class="due-date">
            02.04.2018
        </span>
        <span class="tag-name">
            收件箱
        </span>
        <span class="star-wrapper">
            <span class="star">
                <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>
            </span>
            <span class="remove-star">
                <svg width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>
            </span>
        </span>
        
    </li>
</template>
<script>
export default {
    props:{
        data:{
            type:Object,
            default:{},
            required:true
        },
        sClick:{
            type:Function,
            default:()=>{console.log('function is not defined')}
        },
        dClick:{
            type:Function,
            default:()=>{console.log('function is not defined')}            
        }
    }
}
</script>
<style scoped>
    .taskItem{
        height: 47px;
        list-style: none;
        height: 46px;
        border-radius: 3px;
        display: flex;
        padding-left: 4px;
        padding-right: 4px;
        align-items: center;
        position: relative;
        background-color: #FFF;
    }
    .taskItem-checkWrapper{
        cursor: pointer;
        padding-left: 8px;
        padding-right: 8px;
        height: 20px;
    }
    .task-check{
        stroke: rgba(0,0,0,0.35);
    }
    .task-checked{
        fill: rgba(0,0,0,0.35);
    }
    .title-wrapper{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 15px;
        font-weight: 500;
        color: #262626;
        cursor: default;
        position: relative;
        top: -1px;
        flex: 1;
        text-align: left;
    }
    .conversation-wrapper{
        fill: rgba(0,0,0,0.3);
        height: 20px;
        padding:0 2px;
    }
    .due-date{
        font-size: 12px;
        color: #328ad6;
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 4px;
        padding-right: 4px;
    }
    .due-date-over{
        color: #b3312d;
    }
    .star{
        cursor: pointer;
        padding-left: 6px;
        padding-right: 6px;
        fill: rgba(0,0,0,0.3);
    }
    .task-done{
        opacity: .6;
    }
    .remove-star{
        width: 22px;
        padding-left: 4px;
        padding-right: 4px;
        fill: #d74e48;
        cursor: pointer;
    }
    .tag-name{
        font-size: 12px;
        color: #328ad6;
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 4px;
        padding-right: 4px;
    }
</style>
