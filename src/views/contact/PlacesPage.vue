<template>
  <div>
    <ContactFirstRow />
    <div class="places">TBD</div>
    <ContactBottomNav />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContactBottomNav from "@/components/contact/ContactBottomNav.vue";
import ContactFirstRow from "@/components/contact/ContactFirstRow.vue";

@Component({
  components: { ContactFirstRow, ContactBottomNav },
})
export default class Places extends Vue {}
</script>
<style lang="scss" scoped>
.places {
  height: 70vh;
  width: 100vw;
  background: black;
}
</style>
