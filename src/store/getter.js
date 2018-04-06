export default {
    todoItems : state => state.todoList,
    doneTodoItems : state => state.todoList.filter(item => item.status === 1),
    notDoneTodoItems : state => {
        return state.todoList.filter(item=>item.status === 0)
    },
    subTodoItems : state => (id)=>{
        return state.subTodoList.filter((item)=>{
            item.pId === id
        })
    },
    starTodoItems : state => state.todoList.filter(item => item.star === 1),
    notDoneStarTodoItems : (state,getters) => {
        return getters.starTodoItems.filter((item)=>{
            return item.status === 0
        })
    },
    filters:state=>state.filterList,
    filterId:state=>state.filterId
}