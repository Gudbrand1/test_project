<template>
  <div class="home" v-if="arrays">
    <div class="home_container" v-for="(array, index) in arrays" :key="index">
      <div class="column" v-for="(column, index) in array" :key="index">
        <div class="row" v-for="(row, index) in column" :key="index">
          <router-link :to="row.href">
            <img
              class="logo"
              :src="require('./../../assets/icons/' + row.src + '.png')"
              :alt="row.alt"
            />
          </router-link>
          <p>{{ row.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
interface Icon {
  name: string;
  href: string;
  alt: string;
  src: string;
}
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class HomeMenu extends Vue {
  @Prop({
    default: [[{ name: "name", href: "#", alt: "alt", src: "#" }]],
  })
  MenuIconArray!: Array<Array<Icon>>;
  arrays = this.MenuIconArray;
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  width: 100vw;
  height: 80vh;
  .home_container {
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .column {
      width: 10vh;
      min-width: 10vh;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .row {
        height: 10vh;
        min-height: 10vh;
        background: #42b983;
        border-radius: 25%;
        box-shadow: 1px -1px 5px black;

        a {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          width: inherit;
          height: inherit;
          img {
            margin: 0 auto;
          }
        }
        p {
          margin: 0;
          color: white;
          text-shadow: 1px 1px black;
        }
      }
    }
    .logo {
      display: flex;
      justify-content: center;
      height: 100%;
    }
  }
}
</style>
