<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }">구도로떡볶이</router-link>
      </div>
      <div class="nav-links">
        <ul class="nav_ul" v-show="!mobile">
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
          <router-link v-if="admin" class="link" :to="{ name: 'CreatePost' }"
            >Create Post</router-link>
          <router-link
            v-if="!this.$store.state.user"
            class="link"
            :to="{ name: 'Login' }"
            >Login/Resister</router-link
          >
        </ul>
        <div
          v-if="user"
          @click="toggleProfileMenu"
          class="profile"
          ref="profile"
        >
          <!-- this.$store.state.user>> user라고 줄여 써도 된다 -->
          <span>{{ this.$store.state.profileInitials }}</span>
          <div v-show="profileMenu" class="profile-menu">
            <div class="info">
              <p class="initials">{{ this.$store.state.profileInitials }}</p>
              <div class="right">
                <p>
                  {{ this.$store.state.profileFirstName }}
                  {{ this.$store.state.profileLastName }}
                </p>
                <p>{{ this.$store.state.profileUserName }}</p>
                <p>{{ this.$store.state.profileEmail }}</p>
              </div>
            </div>
            <div class="options">
              <div class="option">
                <router-link class="option" :to="{ name: 'Profile' }">
                  <userIcon class="icon" />
                  <p>Profile</p>
                </router-link>
              </div>
              <div class="option">
                <router-link
                  v-if="admin"
                  class="option"
                  :to="{ name: 'Admin' }"
                >
                  <adminIcon class="icon" />
                  <p>Admin</p>
                </router-link>
              </div>
              <div @click="signOut" class="option">
                <signOutIcon class="icon" />
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" />
    <!-- mobile -->
    <transition name="mobile-nav">
      <!-- mobileNav가 true일때만 보임 -->
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
        <router-link v-if="admin" class="link" to="#">Create Post</router-link>
        <router-link class="link" :to="{ name: 'Login' }"
          >Login/Resister</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script>


export default {
  name: "navigation",
  components: {
  
  },
  data() {
    return {
    
    };
  },


};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  margin: 0;

}

header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }

  nav {
    display: flex;
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;
      }
      .nav-links {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex: 1;
      }
    }
  }
  .nav-links {
    display: flex;
  
  }
  // 수정할 부분
  .nav_ul {
    margin-right: 32px;
    .link {
      margin-right: 32px;
    }
    .link:last-child {
      margin-right: 0;
    }
  }




   
   

  // 수정할 부분
  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;
      color: #fff;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>
