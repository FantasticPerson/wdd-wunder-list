export default class TodoList{
}

TodoList.store = null

TodoList.add = (obj)=>{
    return TodoList.store.put(obj)
}

TodoList.getAll = ()=>{
    return TodoList.store.toArray()
}

TodoList.delete = (id)=>{
    return TodoList.store.get(id)
        .then((result)=>{
            return TodoList.store.delete(id)
        },()=>{
            return Promise.resolve()
        })
}

TodoList.update = (obj)=>{
    return TodoList.store.put(obj)
}

TodoList.find = (id)=>{
    return TodoList.store.get(id)
}