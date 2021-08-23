<template>
  <div class="home">
    <div class="container">
      <Menus v-for="(category, index ) in categories" :key="index" :category="category" />
    </div>
  </div>
</template>

<script>
import Menus from "../components/Menus.vue"
export default {
  name: "Home",
  components: {Menus},
  computed : {
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
  }

</style>
