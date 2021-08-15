<template>
  <div
    class="InputTextContainer"
    :style="[
      InputFocused,
      InputStyle,
      BorderRadiusTop,
      BorderRadiusBottom,
      Background,
    ]"
  >
    <label
      v-if="displayLabel"
      :class="Alignment"
      :style="BorderRadiusTop"
      class="InputLabel"
      for="name"
      >{{ label }}</label
    >
    <input
      :class="Alignment"
      :style="[BorderRadiusBottom, Color]"
      class="Input"
      type="text"
      @VModel="value"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :required="required"
      @focus="inputFocus(true)"
      @blur="inputBlur()"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class InputText extends Vue {
  @Prop() private name!: string;
  @Prop() private id!: string;
  @Prop() private placeholder!: string;
  @Prop() private label!: string;
  @Prop({ default: "" }) private value!: string;
  @Prop({ default: 200 }) private width!: number;
  @Prop({ default: "px" }) private widthSuffix!: string;
  @Prop({ default: 40 }) private height!: number;
  @Prop({ default: "px" }) private heightSuffix!: string;
  @Prop({ default: false }) private required!: boolean;
  @Prop({ default: "center" }) private alignment!: "left" | "center" | "right";
  @Prop({ default: "#1c38ac" }) private color!: string;
  @Prop({ default: "#c0c0ff" }) private background!: string;
  @Prop({ default: 12 }) private fontSize!: number;
  @Prop({ default: "px" }) private fontSizeSuffix!: string;
  @Prop({ default: 0 }) private borderRadius!: number;
  @Prop({ default: "#674ab3" }) private outlineColor!: string;
  @Prop({ default: false }) private displayLabel!: boolean;
  @Prop({ default: true }) private displayOutline!: boolean;
  @Prop({ default: false }) private alwaysDisplayOutline!: boolean;

  InputFocused = {};

  inputFocus(value?: boolean) {
    this.InputFocused =
      value && this.displayOutline ? this.Outlined : this.NotOutlined;
  }

  Background = {
    background: this.background,
  };
  InputStyle = {
    width: this.width + this.widthSuffix,
    height: this.height + this.heightSuffix,
  };
  Alignment = {
    Left: this.alignment === "left",
    Centered: this.alignment === "center",
    Right: this.alignment === "right",
  };
  BorderRadiusTop = {
    borderTopLeftRadius: this.borderRadius + "%",
    borderTopRightRadius: this.borderRadius + "%",
  };
  BorderRadiusBottom = {
    borderBottomLeftRadius: this.borderRadius + "%",
    borderBottomRightRadius: this.borderRadius + "%",
  };
  Outlined = {
    boxShadow: `0px 0px 4px ${this.outlineColor}`,
  };
  NotOutlined = {
    boxShadow: `0px 0px 0px transparent`,
  };
  Color = {
    color: this.color,
    fontSize: this.fontSize + this.fontSizeSuffix,
  };
  inputBlur() {
    this.alwaysDisplayOutline ? this.inputFocus(true) : this.inputFocus(false);
  }
}
</script>
<style scoped lang="scss">
.InputTextContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .InputLabel {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border: 0;
  }
  .Input {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border: 0;
    background: transparent;
  }
  .Input:focus {
    outline: none;
    border: none;
  }
  .Input::placeholder {
    color: #4d5fa7;
  }
  .Left {
    display: flex;
    justify-content: left;
    align-content: flex-start;
    align-items: center;
    text-align: left;
  }
  .Centered {
    display: flex;
    align-items: stretch;
    text-align: center;
  }
  .Right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
  }
}
</style>
