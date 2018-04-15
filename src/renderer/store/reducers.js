import Models from '../model'

export default {
    dealWithAddTodoItem : (obj) =>{
        return Models.TodoList.add(obj)
        .then(()=>{
            return Models.TodoList.getAll()   
        })
        .then((list)=>{
            my_vue.$store.dispatch('updateTodoList',list)
        })
    },
    dealWithUpdateTodoItem : (obj) => {
        return Models.TodoList.update(obj)
        .then(()=>{
            return Models.TodoList.getAll()
        })
        .then((list)=>{
            my_vue.$store.dispatch('updateTodoList',list)
        })
    },
    dealWidthDelTodoItem:(id) => {
        return Models.TodoList.delete(id)
        .then(()=>{
            return Models.TodoList.getAll()
        })
        .then((list)=>{
            my_vue.$store.dispatch('updateTodoList',list)
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
            my_vue.$store.dispatch('updateTodoList',list)
        })
    },
    getSubTodoList:()=>{
        return Models.SubTodoList.getAll().then((list)=>{
            my_vue.$store.dispatch('updateSubTodoList',list)
        })
    },
    getUserInfo:()=>{
        return Models.UserInfo.get().then((user)=>{
            my_vue.$store.dispatch('updateUserInfo',user)
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
            my_vue.$store.dispatch('updateFilterList',baseMenuList.concat(list))
        })
    },
    dealWithAddOrUpdateFilter:(item)=>{
        return Models.Filters.add(item).then(()=>{
            return Promise.resolve()
        },()=>{
            Promise.resolve()
        })
    },
    dealWithDeleteFilter:(item)=>{
        return Models.Filters.delete(item.id).then(()=>{
            return Models.TodoList.deleteByFilterId(item.id)
        },()=>{
            return Promise.resolve()
        })
    }
}