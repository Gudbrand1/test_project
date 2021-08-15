<template>
  <div class="contact">
    <ContactFirstRow :Contacts="true" />
    <div class="contactList" v-if="array">
      <div class="column">
        <div v-for="contacts in array" :key="contacts.id">
          <div
            :class="
              contacts.contacts.length < 2 ? 'MultipleContact' : 'OneContact'
            "
          >
            <p class="letter">{{ contacts.letter }}</p>
            <div :class="contacts.contacts.length < 2 ? 'other' : 'sameLetter'">
              <div
                class="row"
                v-for="contact in contacts.contacts"
                :key="contact.id"
              >
                <div class="contactInfos">
                  <img src="@/assets/icons/contact.png" alt="#" />
                  <div class="contactInfosText">
                    <p>
                      {{ fullnameMixin(contact.firstname, contact.lastname) }}
                    </p>
                    <div class="consistency"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactBottomNav />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Mixins } from "vue-property-decorator";
import contactArray from "@/assets/placeholder/contactArray";
import ContactBottomNav from "@/components/contact/ContactBottomNav.vue";
import ContactFirstRow from "@/components/contact/ContactFirstRow.vue";
import { FullnameMixin } from "@/mixins/fullnameMixin";

@Component({
  components: { ContactBottomNav, ContactFirstRow },
})
export default class contact extends Mixins(FullnameMixin) {
  array = contactArray;
}
</script>
<style lang="scss" scoped>
.contactList {
  height: 70vh;
  width: 100vw;
  overflow: hidden;
  background: black;
  .contact {
    display: flex;
    flex-direction: column;
    p {
      margin: 0;
    }
  }
  .column {
    max-height: 90vh;
    min-height: 70vh;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: scroll;
    p {
      margin: 0;
    }
    .letter {
      text-align: left;
      color: honeydew;
      text-shadow: 1px 0px grey;
      margin-left: 6.75vw;
    }
    .sameLetter {
      border-radius: 25px;
      background: rgb(66, 66, 66);
      .row {
        border: none;
      }
    }
    .row:hover {
      animation-name: BackgroundChange;
      animation-duration: 0.3s;
    }
    .row {
      height: 10vh;
      display: flex;
      flex-direction: row;
      background: rgb(66, 66, 66);
      border: black solid 1px;
      border-radius: 50px;
      color: #fff;
      padding: 1.5vh 2vh 1.4vh;
      .contactInfos {
        width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        img {
          width: 10vh;
          height: 10vh;
          border-radius: 50%;
          background: greenyellow;
          margin-left: 2vw;
          //   bind a random color when the contact is created
        }
        .contactInfosText {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 2vw;
          border-bottom: 1px solid white;
          p {
            overflow: hidden;
            width: 65vw;
            text-overflow: ellipsis;
            font-size: 30px;
            padding: 2vh;
            margin: 0;
          }
          .consistency {
            width: 65vw;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
        }
      }
    }
  }
  @keyframes BackgroundChange {
    0% {
      background: rgb(66, 66, 66);
    }
    20% {
      background: rgb(77, 77, 77);
    }
    40% {
      background: rgb(88, 88, 88);
    }
    50% {
      background: rgb(99, 99, 99);
    }
    60% {
      background: rgb(88, 88, 88);
    }
    80% {
      background: rgb(77, 77, 77);
    }
    100% {
      background: rgb(66, 66, 66);
    }
  }
}
</style>
