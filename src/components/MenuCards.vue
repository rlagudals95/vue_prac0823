<template>
<div>
  <!-- v-bind:class="{ active: this.$store.state.basket }" -->
  <div class="card-container" @click="setSelectedMenu(categoryItem)" v-bind:class="{ containerActive: this.$store.state.basket }">
      <div v-show="categoryItem.itemSoldOutFlag" class="sold-out">
        <img src="https://cdn.zeplin.io/60d53e6d548b21b2ce573324/assets/073ad840-85a9-4873-9e10-afdbad2c1655.svg" alt="">
      </div>
      <img class="item-img" :src="categoryItem.itemImageUrl"/>
      <div class="item-info">
          <div class="item-desc">
            <p class="item-name">{{categoryItem.itemName}}</p>
            <p class="item-price">{{categoryItem.itemPrice | makeComma}}원
            </p>
          </div>
      </div>
  </div >
</div>
</template>

<script>
import {mapActions, mapState} from "vuex"

export default {
  name: "MenuCards",
  props: ["categoryItem"],
  methods: {
    ...mapActions(['setSelectedMenu'])
  },
  computed : {
    ...mapState(['selectedMenus'])
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
    


     .card-container {
        // class 조건부 바인딩으로 반응형 구현해보자
        //height: 300.00px;
        //width:  230.00px;	
        height: 334.00px;
        width:  294.00px;	
        background-color: #000000;
        margin: 7px;
        border-radius: 17px;
        overflow: hidden;
        cursor: pointer;
    
        .sold-out {
          width: 294px;
          height: 212px;
          position: absolute;
          background-color: rgba(0,0,0,0.5) ;
          overflow: hidden;
          border-radius: 8px;
          align-items: center;

          img{
            margin: auto;
            opacity: 1 !important;
            width: 100%;
            height: 100%;
            padding: 30px;
          }
        }
        .item-img {
          object-fit: fit;       
          width: 100%;
          //height: 190px;
          height: 212px;
          margin-bottom: 15px;
        }

        .item-info {
          align-items: center;
          text-align: center;
          color: white;
          margin: auto ;
          padding: 0px 50px;
          .item-desc {
           
          }
          .item-name {
            font-size: 19px;
          }

          .item-price {
            font-weight: bold;
            margin-top: 10px;
            font-size: 19px;
          }
        }
    }

        .containerActive {
        // class 조건부 바인딩으로 반응형 구현해보자
        height: 300.00px;
        width:  230.00px;		
        background-color: #000000;
        margin: 7px;
        border-radius: 17px;
        overflow: hidden;
        cursor: pointer;
    
        .sold-out {
          width: 230px;
          height: 212px;     	
          position: absolute;
          background-color: rgba(0,0,0,0.5) ;
          overflow: hidden;
          border-radius: 8px;
          align-items: center;

          img{
            margin: auto;
            opacity: 1 !important;
            width: 100%;
            height: 100%;
            padding: 30px;
          }
        }
        .item-img {
          object-fit: fit;       
          width: 100%;
          height: 190px;
          margin-bottom: 15px;
        }

        .item-info {
          align-items: center;
          text-align: center;
          color: white;
          margin: auto ;
          padding: 0px 20px;
          .item-desc {
           
          }
          .item-name {
            font-size: 18px;
          }

          .item-price {
            font-weight: bold;
            margin-top: 10px;
            font-size: 19px;
          }
        }
    }







</style>