<template>
  <div class="card-container" @click="setSelectedMenu(categoryItem)">
      <img class="item-img" :src="categoryItem.itemImageUrl"/>
      <div class="item-info">
          <div class="item-desc">
            <p class="item-name">{{categoryItem.itemName}}</p>
            <p class="item-price">{{categoryItem.itemPrice}}</p>
          </div>
      </div>
  </div >
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
  }
}
</script>

<style lang="scss" scoped>
     .card-container {
        height: 334.00px;
        width:  294.00px;	
        background-color: #000000;
        margin: 7px;
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;

        .item-img {
          object-fit: fit;       
          width: 100%;
          height:  212px;
          margin-bottom: 15px;
        }

        .item-info {
          align-items: center;
          text-align: center;
          color: white;
          margin: auto ;

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
</style>