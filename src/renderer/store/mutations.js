const mutations = {
    updateUserInfo : (state,userInfo)=>{
        state.userInfo = userInfo
    },
    updateTodoList : (state,todoList)=>{
        state.todoList = todoList
    },
    updateSubTodoList : (state,subTodoList)=>{
        state.subTodoList = subTodoList
    },
    updateFilterId : (state,filterId)=>{
        state.filterId = filterId
    },
    updateWrapSlide:(state,bool)=>{
        state.wrapSlide = bool
    },
    updateFilterList:(state,list)=>{
        state.filterList = list
    },
    updateContextFilter:(state,obj)=>{
        state.contextFilter = obj
    }
}

export default mutations