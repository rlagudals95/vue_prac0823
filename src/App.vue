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

@font-face {
    font-family: 'this_is_font_name';  //원하는 이름을 입력해주세요
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
    font-weight: normal; //폰트의 두께를 설정해주세요
    font-style: normal;  
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", "noto-sans";
}

.app {
    font-family: this_is_font_name;  
  
}
/* .app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
} */
</style>
