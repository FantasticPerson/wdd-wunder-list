import moment from 'moment'

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
    filterId:state=>state.filterId,
    todoItemNextId:state=>{
        let id = -1;
        state.todoList.map((item)=>{
            if(item.id > -10){
                id = item.id
            }
        })
        return ++id
    },
    filterNextId:state=>{
        let id = 0
        state.filterList.forEach(item => {
            if(item.id > id){
                id = item.id
            }
        }); 
        return ++id;
    },
    contextFilter:state=>state.contextFilter,
    contextTaskItem:state=>state.contextTaskItem,
    notDonetodoItems:state=>{
        if(state.filterId === -4 || state.filterId >= 0){
            let list = state.todoList.filter(item=>{
                return item.filterId === state.filterId}
            )
            return list.filter(item=>item.status === 0)
        }
        if(state.filterId === -3){
            let list = state.todoList.filter(item=>item.star === 1)
            return list.filter(item=>{
                return item.status === 0
            })
        }
        if(state.filterId === -2){
            let list = state.todoList.filter(item=>{
                let cData = moment(item.date).format('WW,YYYY')
                let now = moment().format('WW,YYYY')
                return cData === now
            })
            return list.filter(item=>item.status === 0)
        }
        if(state.filterId === -1){
            let list = state.todoList.filter(item=>{
                let cData = moment(item.date).format('DD,MM,YYYY')
                let now = moment().format('DD,MM,YYYY')
                return cData === now
            })
            return list.filter(item=>item.status === 0)
        }
    },
    doneTodoItems:state=>{
        if(state.filterId === -4 || state.filterId >= 0){
            let list = state.todoList.filter(item=>item.filterId === state.filterId)
            return list.filter(item=>item.status === 1)
        }
        if(state.filterId === -3){
            let list = state.todoList.filter(item=>item.star === 1)
            return list.filter(item=>item.status ===1)
        }
        if(state.filterId === -2){
            let list = state.todoList.filter(item=>{
                let cData = moment(item.date).format('WW,YYYY')
                let now = moment().format('WW,YYYY')
                return cData === now
            })
            return list.filter(item=>item.status === 1)
        }
        if(state.filterId === -1){
            let list = state.todoList.filter(item=>{
                let cData = moment(item.date).format('DD,MM,YYYY')
                let now = moment().format('DD,MM,YYYY')
                return cData === now
            })
            return list.filter(item=>item.status === 1)
        }
    }
}