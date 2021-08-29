<template>
  <div class="home">
    <div class="container">
      <div v-show="completeMsg" class="complete">
          <div class="complete-box"></div>
          <div class="complete-msg">주문이 완료되었습니다.</div>
      </div>
      <Menus v-for="(category, index ) in categories" :key="index" :category="category" />
      <Basket />
    </div>
  </div>
</template>

<script>
import Menus from "../components/Menus.vue"
import Basket from "../components/Basket.vue"
import {mapState} from "vuex"
export default {
  name: "Home",
  components: {Menus,Basket},
  methods: {
    // ...mapMutations({setSelectedMenu:'setSelectedMenu'}),
    // setSelectedMenu () {
    //   this.$store.commit("setSelectedMenu")
    // }
  },
  computed : {
    ...mapState(['completeMsg']),
    categories() {
      return this.$store.state.categories;
    },
  }
};
</script>

<style lang="scss" scoped>
  .home {
    /* background-image: url('https://cdn.zeplin.io/60d53e6d548b21b2ce573324/assets/abe58885-e813-49ed-8b8b-43b83c0534c8.png');
    height: 100vh;
   
    background-size: cover; */
       width: 100%;
       height: 100%;
  }

  .complete-box {
    background-color:#fc0000;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 200px;
    transform: translate(-50%, -50%);
    border-radius: 10px; 
    opacity: 0.8;
    z-index: 500;
  }

  .complete-msg{
    color:white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 54px;
    text-align: center;
    font-weight: bold;
    opacity: 0.9;
    z-index: 501;
  }
  
 
</style>
