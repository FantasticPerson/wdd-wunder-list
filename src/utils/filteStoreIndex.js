export default (indexes) => {
    return indexes
        .filter((index)=>{
            if(!index || '') return false;
            return !(index.charAt(0) === '!');
        })
}