<template>
  <div class="column">
    <ContactFirstRow />
    <div class="number_container">
      <InputText
        class="Input_text"
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
        :value="PhoneNumber"
      />
      <button @mousedown="removeChar()" @mouseup="removeAllChars()">
        &#129044;
      </button>
    </div>
    <div class="row">
      <button @click="addChar('1')">1<span></span></button>
      <button @click="addChar('2')">2<span>ABC</span></button>
      <button @click="addChar('3')">3<span>DEF</span></button>
    </div>
    <div class="row">
      <button @click="addChar('4')">4<span>GHI</span></button>
      <button @click="addChar('5')">5<span>JKL</span></button>
      <button @click="addChar('6')">6<span>MNO</span></button>
    </div>
    <div class="row">
      <button @click="addChar('7')">7<span>PQRS</span></button>
      <button @click="addChar('8')">8<span>TUV</span></button>
      <button @click="addChar('9')">9<span>WXYZ</span></button>
    </div>
    <div class="row">
      <button @click="addChar('*')">*<span></span></button>
      <button @mousedown="addChar('0')" @mouseup="replaceChar('+')">
        0<span>+</span>
      </button>
      <button @click="addChar('#')">#<span></span></button>
    </div>
    <div class="row callButton">
      <button>
        <img src="@/assets/icons/phoneIcon.png" alt="phone" />
      </button>
    </div>
    <ContactBottomNav />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InputText from "@/components/input/InputText.vue";
import ContactBottomNav from "@/components/contact/ContactBottomNav.vue";
import ContactFirstRow from "@/components/contact/ContactFirstRow.vue";

@Component({
  components: { InputText, ContactFirstRow, ContactBottomNav },
})
export default class phone extends Vue {
  PreventAllCharRemoverFn = true;
  PreventModifyZeroByPlus = true;
  PhoneNumber = "";
  Input = {
    placeholder: "",
    width: 80,
    widthSuffix: "vw",
    height: 10,
    heightSuffix: "vh",
    alignment: "center",
    color: "#fff",
    background: "#000000",
    fontSize: 30,
    fontSizeSuffix: "em",
    borderRadius: 0,
    outlineColor: "white",
    displayLabel: false,
    displayOutline: false,
    alwaysDisplayOutline: false,
    value: "",
  };

  addChar(char: string) {
    this.PreventModifyZeroByPlus = true;
    setTimeout(() => {
      this.PreventModifyZeroByPlus = false;
    }, 500);
    this.PhoneNumber += char;
    this.PreventModifyZeroByPlus = true;
  }

  replaceChar(char: string) {
    this.PhoneNumber = this.PreventModifyZeroByPlus
      ? this.PhoneNumber
      : this.PhoneNumber.slice(0, -1) + char;
  }

  removeChar() {
    this.PhoneNumber = this.PhoneNumber.slice(0, -1);

    setTimeout(() => {
      this.PreventAllCharRemoverFn = false;
    }, 500);
    this.PreventAllCharRemoverFn = true;
  }

  removeAllChars() {
    this.PhoneNumber = this.PreventAllCharRemoverFn ? this.PhoneNumber : "";
  }
}
</script>
<style lang="scss" scoped>
.column {
  display: flex;
  flex-direction: column;
  background: #000000;
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    button {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin: 1vh;
      padding: 0;
      width: 33vh;
      height: 10vh;
      border: none;
      color: white;
      font-size: 25px;
      text-shadow: 1px -1px grey;
      background: #000000;
      span {
        color: rgb(190, 190, 190);
        text-shadow: 1px -1px #000000;
      }
      &.active {
        box-shadow: 0px 0px 6px rgb(161, 172, 161);
      }
      img {
        height: calc(100% - 3vh);
        width: calc(100% - 3vh);
        margin: 0 auto;
      }
    }
  }
  .number_container {
    display: flex;
    flex-direction: row;
    height: 10vh;
    .Input_text {
      height: 100%;
    }
    button {
      font-size: 6vw;
      color: #e3e3e3;
      width: 20vw;
      height: 100%;
      border: none;
      padding: 0;
      margin: 0;
      background: #000000;
    }
  }
}
</style>
