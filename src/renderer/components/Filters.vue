<template>
    <ul class="filters-collections">
        <FilterItem v-for="item in filters" :key="item.id" :data="item" :filterId="filterId" :todoList="notDoneTodoItems"></FilterItem>
    </ul>
</template>
<script>

import FilterItem from './FilterItem'
import {mapGetters} from 'vuex'

export default {
    data(){
        return {
            
        }
    },
    computed:{
        ...mapGetters([
            'filters','filterId','notDoneTodoItems'
        ])
    },
    components:{
        FilterItem
    }
}
</script>
<style scoped>

</style>
