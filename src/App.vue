<template>
  <div id="app">
    <div class="main_container">
      <router-view />
      <div id="nav" v-if="menu">
        <router-link to="/"><SvgCircle /></router-link> |
        <router-link to="/Menu"><SvgCircle /></router-link>
        <!-- Replace the router by a function on scroll top event.  -->
        <!-- Reuse the router transformed with a v-for and add it to the new menu to add additionnal submenus -->
      </div>
    </div>
    <div class="bottom-nav">
      <router-link :to="this.$router.history._startLocation">
        <img src="../src/assets/navigation/triangle.png" alt="triangle" />
      </router-link>
      <router-link to="/">
        <img src="../src/assets/navigation/circle.png" alt="circle" />
      </router-link>
      <router-link to="/aaa">
        <img src="../src/assets/navigation/square.png" alt="square" />
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SvgCircle from "@/components/navigation/SvgCircle.vue"; // @ is an alias to /src

@Component({
  components: {
    SvgCircle,
  },
})
export default class Index extends Vue {
  menu = this.$store.state.common.menu;

  updated() {
    this.$nextTick(() => {
      this.$router.app.$route.name === "Home" ||
      this.$router.app.$route.name === "Menu"
        ? this.$store.dispatch("displayMenu", true)
        : this.$store.dispatch("displayMenu", false);
      return (this.menu = this.$store.state.common.menu);
    });
  }
}
</script>

<style lang="scss">
@import "assets/style/_flexbox-center-mixin.scss";
@import "assets/style/_library.scss";
html {
  margin: $no-margin;
  padding: $no-padding;
  max-width: $full-width;
  max-height: $full-height;
  min-width: $full-width;
  min-height: $full-height;
}
body {
  margin: $no-margin;
  padding: $no-padding;
  max-width: $full-width;
  max-height: $full-height;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(2, 0, 36);
  padding: $no-padding;
  margin: $no-margin;
  background: $linear-gradient;
  .main_container {
    min-height: $the-app-container-height;
  }
}

#nav {
  @include centered-space-around;
  height: 8.75vh;
  font-size: calc(8px + 1vw);
  a {
    max-width: 4vh;
    &.router-link-exact-active {
      fill: #42b983;
    }
  }
}

.bottom-nav {
  @include centered-space-around;
  min-height: $the-bottom-nav;
  background: $app-bottom-nav-background;

  a {
    height: 5vh;
    min-height: 16px;
    img {
      height: 100%;
    }
  }
  a:first-child img {
    rotate: -90deg;
  }
}
</style>
