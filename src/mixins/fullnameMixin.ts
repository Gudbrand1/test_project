import Vue from "vue";
import Component from "vue-class-component";

// You can declare mixins as the same style as components.
@Component
export class FullnameMixin extends Vue {
  fullnameMixin = (firstname: string, lastname: string) => {
    const fullname = firstname + ' ' + lastname;
    return fullname;
  }
}
