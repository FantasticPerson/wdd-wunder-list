export default class UserInfo{ 
}

UserInfo.store = null

UserInfo.getAll = (userInfo)=>{
    return UserInfo.store.toArray()
}

UserInfo.update = (obj)=>{
    return UserInfo.add(obj)
}

UserInfo.get = (id)=>{
    return UserInfo.get(id)
}

UserInfo.add = (obj)=>{
    return UserInfo.store.put(obj)
}