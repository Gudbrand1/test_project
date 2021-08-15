<template>
  <div class="TheMenu">
    <HomeMenu :MenuIconArray="arrays" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as Arrays from "@/assets/placeholder/iconArray";
import HomeMenu from "@/components/menu/HomeMenu.vue";
@Component({
  components: { HomeMenu },
})
export default class TheMenu extends Vue {
  arrays = Arrays;
}
</script>
<style lang="scss" scoped>
.TheMenu {
  height: 81.25vh;
}
</style>
