<template>
  <div class="home">
    <div class="home_container">
      <HomeMenu class="HomeMenu" :MenuIconArray="arrays" />
      <InputText
        class="InputText"
        :placeholder="Input.placeholder"
        :width="Input.width"
        :widthSuffix="Input.widthSuffix"
        :height="Input.height"
        :heightSuffix="Input.heightSuffix"
        :alignment="Input.alignment"
        :color="Input.color"
        :fontSize="Input.fontSize"
        :borderRadius="Input.borderRadius"
        :outlineColor="Input.outlineColor"
        :displayLabel="Input.displayLabel"
        :displayOutline="Input.displayOutline"
        :alwaysDisplayOutline="Input.alwaysDisplayOutline"
        :background="Input.background"
        :value="Input.value"
      />
      <p class="ResearchBarLegend">Powered By :</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as Arrays from "@/assets/placeholder/iconArray3Lines";
import HomeMenu from "@/components/menu/HomeMenu.vue";
import InputText from "@/components/input/InputText.vue";

@Component({
  components: { HomeMenu, InputText },
})
export default class Home extends Vue {
  arrays = Arrays;
  Input = {
    placeholder: "Research 🔍",
    width: 80,
    widthSuffix: "vw",
    height: 10,
    heightSuffix: "vh",
    alignment: "center",
    color: "#1c38ac",
    background: "transparent",
    fontSize: 30,
    fontSizeSuffix: "em",
    borderRadius: 0,
    outlineColor: "white",
    displayLabel: false,
    displayOutline: true,
    alwaysDisplayOutline: false,
    value: "",
  };
}
</script>
<style lang="scss" scoped>
.InputTextContainer::v-deep input {
  height: 10vh !important;
  background: #e3e3e3 !important;
}

.home {
  height: 81.25vh;
  .home_container {
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    .ResearchBarLegend {
      margin: 0;
      color: transparent;
    }
  }
  .HomeMenu {
    height: 70vh;
  }
}
</style>
