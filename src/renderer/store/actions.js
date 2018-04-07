import Models from '../model'

const actions = {
    updateUserInfo : (context,userInfo)=>{
        context.commit('updateUserInfo',userInfo)
    },
    updateTodoList : (context,todoList)=>{
        context.commit('updateTodoList',todoList) 
    },
    updateSubTodoList : (context,subTodoList)=>{
        context.commit('updateSubTodoList',subTodoList)
    },
    updateFilterId:(context,filterId)=>{
        context.commit('updateFilterId',filterId)
    },
    updateWrapSlide:(context,bool)=>{
        context.commit('updateWrapSlide',bool)
    },
    updateFilterList:(context,list)=>{
        context.commit('updateFilterList',list)
    },
    updateContextFilter:(context,obj)=>{
        context.commit('updateContextFilter',obj)
    }
}

export default actions