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
import axios from 'axios'

export default {
  name: "app",
  components: {Navbar,BottomNav},
  data() {
    return {

    };
  },
  created:function(){
    // using JSONPlaceholder
    const baseURI = 'http://localhost:8060';
    axios.get(`${baseURI}`)
    .then((result) => {
    console.log(result.length)
    for (let i = 0; i < result.data.length; i++){
      console.log(result.data[i].workerman_admin_name)
    }

    this.datas = result.data
    }
)},
  mounted() {},
  methods: {
    

  },
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
