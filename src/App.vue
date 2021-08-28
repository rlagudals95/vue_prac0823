<template>
  <div class="app-wrapper">
    <div class="app">  
      <Navbar/>
      <router-view />
      <BottomNav/>
    </div>
  </div>
</template>

<script>

//import Navigation from "./components/Navigation.vue"
import Navbar from "./components/Navbar.vue"
import BottomNav from "./components/BottomNav.vue"

export default {
  name: "app",
  components: {Navbar,BottomNav},
  data() {
    return {

    };
  },
  created() {

  },
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">



* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', 'Helvetica Neue', sans-serif;
}

</style>
