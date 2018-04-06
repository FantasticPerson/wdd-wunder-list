import Models from '../model'

export default {
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