<template>
  <div class="firstRow">
    <p>Phone</p>
    <div class="icons">
      <a class="plus" href="#" v-if="Contacts">+</a>
      <a class="plus" style="opacity: 0" v-if="!Contacts">+</a>
      <a href="#">&#x1F50E;&#xFE0E;</a>
      <a href="#">
        <div>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {},
})
export default class contact extends Vue {
  @Prop({ default: false }) Contacts!: boolean;
}
</script>
<style lang="scss" scoped>
.firstRow {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background: black;
  color: #fff;
  height: 15vh;
  width: 100%;
  font-size: 50px;
  .icons {
    width: 20vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .plus {
      font-size: 90px;
    }
    a {
      color: #fff;
      text-decoration: none;
      div {
        margin-top: -60px;
        span {
          display: flex;
          flex-direction: column;
          height: 17px;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
