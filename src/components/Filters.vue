<template>
    <ul class="filters-collections">
        <FilterItem v-for="item in filters" :key="item.id" :data="item" :filterId="filterId"></FilterItem>
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
            'filters','filterId'
        ])
    },
    components:{
        FilterItem
    }
}
</script>
<style scoped>

</style>
