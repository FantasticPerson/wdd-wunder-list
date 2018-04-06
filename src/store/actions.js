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
    updateMenuName:(context,menuName)=>{
        context.commit('updateMenuName',menuName)
    },
    updateWrapSlide:(context,bool)=>{
        context.commit('updateWrapSlide',bool)
    }
}

export default actions

export const actionList = {
    dealWithAddTodoItem : (obj) =>{
        Models.TodoList.add(obj)
        .then(()=>{
            return Models.TodoList.getAll()   
        })
        .then((list)=>{
            console.log(list)
        })
    },
    dealWithUpdateTodoItem : (obj) => {
        Models.TodoList.update(obj)
        .then(()=>{
            return Models.TodoList.getAll()
        })
        .then((list)=>{
            console.log(list)
        })
    },
    dealWidthFindTodoItem : (id,cb) => {
        Models.TodoList.find(id)
        .then((item)=>{
            cb(item)
        })
    }
}