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
    updateMenuName : (state,menuName)=>{
        state.menuName = menuName
    },
    updateWrapSlide:(state,bool)=>{
        state.wrapSlide = bool
    }
}

export default mutations