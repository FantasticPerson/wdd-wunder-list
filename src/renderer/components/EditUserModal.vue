<template>
    <modal name="edit-user-modal" :width="392" :height="143">
        <div class="content">
            <div class="content-header">
                <h3 class="center">{{'编辑用户信息'}}</h3>
                <div class="separator">
                    <input type="text" ref="addInput" placeholder="输入名字" :value="userInfo.name"/>
                </div>
            </div>
            <div class="options">
                <div class="cols">
                    <div class="buttons">
                        <button class="cancel" @click.prevent.stop="cancel">取消</button>
                        <button class="confirm" @click.prevent.stop="confirm">确定</button>
                    </div>
                </div>
            </div>
        </div>
    </modal>
</template>
<script>

import Reducers from '../store/reducers'
import {mapGetters} from 'vuex'

export default {
    name:'EditUserModal',
    computed:{
        ...mapGetters([
            'userInfo'
        ])
    },
    methods:{
        cancel(){
            this.$modal.hide('edit-user-modal')
        },
        confirm(){
            const {addInput} = this.$refs
            let value = addInput.value.trim()
            if(value.length > 0 && value !== this.userInfo.name){
                Reducers.dealWithAddUserInfo({
                    ...this.userInfo,
                    name:value
                })
                this.$modal.hide('edit-user-modal')
            }
        },
    }
}
</script>
<style scoped>
    .content{
        width:392px;
        border-radius: 3px;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        background-color: #fafafa;
    }
    .content-header{
        padding:14px 14px 0;
        border-radius: 4px 4px 0 0;
        border-bottom: 1px solid #ebebeb;
        background-color: #FFF;
    }
    h3{
        font-weight: bold;
        text-align: center;
    }
    .separator{
        zoom: 1;
        margin: 14px 0;
        position: relative;
    }
    .separator::before{
        position: absolute;
        bottom: 0;
        width: 100%;
        content: '';
        height: 1px;
        border-bottom: 1px solid #e0e0df;
    }
    input{
        padding: 9px 10px 10px;
        width: 100%;
        box-sizing: border-box;
        padding: 6px;
        font-weight: 500;
        font-size: 15px;
        color: #262626;
        border: none;
        background: #fff;
        transition: all 0.15s ease-in-out;
        box-shadow: inset 0 0 0 1px #d6d6d6;
        border-radius: 3px;
    }
    .options{
        padding: 12px;
        flex-shrink: 0;
    }
    .cols{
        margin: 0 6px;
    }
    .buttons{
        float: right;
        display: flex;
    }
    button{
        box-sizing: border-box;
        float: none;
        text-align: center;
        width: 100%;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
        width: 100px;
        position: relative;
        cursor: pointer;
        color: #737272;
        font-weight: bold;
        font-size: 13px;
        line-height: 13px;
        padding: 8px 12px;
        background: #fafafa;
        box-shadow: inset 0 0 0 1px #d6d6d6;
        border: none;
        margin-right: 7px;
        border-radius: 3px;
    }

    .confirm{
        box-shadow: inset 0 0 0 1px #328ad6;
        background-color: #328ad6;
        color: #fff;
    }
</style>
