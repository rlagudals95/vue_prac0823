<template>
  <div class="card-container">
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
export default {
  name: "MenuCards",
  props: ["categoryItem"],
  
}
</script>

<style lang="scss" scoped>
     .card-container {
        height: 250.50px;
        width:   220.50px	;	
        background-color: #000000;
        margin: 7px;
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;

        .item-img {
          object-fit: fit;       
          width: 100%;
          height:  158.70px;
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
            font-size: 15px;
          }

          .item-price {
            font-weight: bold;
            margin-top: 5px;
          }
        }
    }
</style>