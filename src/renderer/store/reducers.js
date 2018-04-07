import Models from '../model'

export default {
    dealWithAddTodoItem : (obj) =>{
        return Models.TodoList.add(obj)
        .then(()=>{
            return Models.TodoList.getAll()   
        })
        .then((list)=>{
            my_vue.$store.commit('updateTodoList',list)
        })
    },
    dealWithUpdateTodoItem : (obj) => {
        return Models.TodoList.update(obj)
        .then(()=>{
            return Models.TodoList.getAll()
        })
        .then((list)=>{
            my_vue.$store.commit('updateTodoList',list)
        })
    },
    dealWidthFindTodoItem : (id,cb) => {
        Models.TodoList.find(id)
        .then((item)=>{
            cb(item)
        })
    },
    getTodoList:()=>{
        return Models.TodoList.getAll().then((list)=>{
            my_vue.$store.commit('updateTodoList',list)
        })
    },
    getSubTodoList:()=>{
        return Models.SubTodoList.getAll().then((list)=>{
            my_vue.$store.commit('updateSubTodoList',list)
        })
    },
    getUserInfo:()=>{
        return Models.UserInfo.get().then((user)=>{
            my_vue.$store.commit('updateUserInfo',user)
        })
    },
    getFilterList:()=>{
        let baseMenuList = [
            {
                id:-4,
                title:'收件箱'
            },
            {
                id:-3,
                title:'已加星标'
            },
            {
                id:-2,
                title:'今天'
            },
            {
                id:-1,
                title:'周'
            }
        ]
        return Models.Filters.getAll().then((list)=>{
            my_vue.$store.commit('updateFilterList',baseMenuList.concat(list))
        })
    },
    dealWithAddFilter:(item)=>{
        return Models.Filters.add(item).then(()=>{
            return Promise.resolve()
        },()=>{
            Promise.resolve()
        })
    }
}