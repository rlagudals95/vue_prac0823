<template>
        <div class="card-wrap" v-bind:class="{ active: this.$store.state.basket }">   
            <div class="branch_name">구도로떡볶이</div>
            <MenuCards v-scroll-spy="{ offset:100 }" :categoryItem="categoryItem" v-for="(categoryItem, index ) in category.categoryItems" :key="index"  />      
        </div>
</template>
<script>
import MenuCards from './MenuCards.vue'

export default {
 name: 'menus',
 components: {MenuCards},
 props: ['category'],
 methods: {
 },
 computed: {
 },

}
</script>

<style lang='scss' scoped>
    .card-wrap {
        color: white;
        width: 100%;
        height: 100vh;
        background-image: url('https://cdn.zeplin.io/60d53e6d548b21b2ce573324/assets/abe58885-e813-49ed-8b8b-43b83c0534c8.png');
        background-size: cover;    
        padding: 160px 0px 60px 20px;
        display: flex;
        flex-wrap: wrap;
    }   
    /* .card-wrap {
        color: white;
        width: 100%;
        height: 100vh;
        background-image: url('https://cdn.zeplin.io/60d53e6d548b21b2ce573324/assets/abe58885-e813-49ed-8b8b-43b83c0534c8.png');
        background-size: cover;    
        padding: 160px 0px 60px 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-gap: 7px;
    } */
    
     .branch_name{
        //background-color: red;
        position:  absolute;
        color: white;
        top: 13%;
        left: 30px;
        border-left: 5px solid #ff0000;
        font-size: 22.50px;
        font-weight: bold;
        padding-left: 15px;
    }
    // 장바구니 크기와 동일
    .active {
        color: white; 
        background: green;
        width: 80% !important;
        height: 100vh;
        background-image: url('https://cdn.zeplin.io/60d53e6d548b21b2ce573324/assets/abe58885-e813-49ed-8b8b-43b83c0534c8.png');
        background-size: cover;    
        padding: 160px 0px 60px 20px;
        display: flex;
        flex-wrap: wrap;
    }    
    /* .active {
        color: white; 
        background: green;
        width: 80%;
        height: 100vh;
        background-image: url('https://cdn.zeplin.io/60d53e6d548b21b2ce573324/assets/abe58885-e813-49ed-8b8b-43b83c0534c8.png');
        background-size: cover;    
        padding: 160px 0px 60px 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-gap: 100px;
    } */

</style>