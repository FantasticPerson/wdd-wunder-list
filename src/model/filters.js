export default class Filters{

}

Filters.store = null

Filters.add = (item)=>{
    return Filters.store.put(item)
}

Filters.getAll = ()=>{
    return Filters.store.toArray()
}

Filters.delete = (id)=>{
    return Filters.store.get(id)
        .then((result)=>{
            Filters.store.delete(id)
        },()=>{
            return Promise.resolve()
        })
}

Filters.update = (item)=>{
    return Filters.store.put(item)
}