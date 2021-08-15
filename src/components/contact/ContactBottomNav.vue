<template>
  <div class="bottomNav">
    <router-link to="phone">Keypad</router-link>
    <router-link to="recents">Recents</router-link>
    <router-link to="contact">Contacts</router-link>
    <router-link to="places">Places</router-link>
  </div>
</template>
<style lang="scss" scoped>
.bottomNav {
  background: rgb(0, 0, 0);
  width: 100%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  a {
    text-decoration: none;
    color: grey;
    padding: 1vh;
  }
  a:hover {
    background: rgb(212, 212, 212);
    border-radius: 50px;
    animation-name: fadeIn;
    animation-duration: 0.2s;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0.1;
  }
  20% {
    opacity: 0.2;
  }
  40% {
    opacity: 0.3;
  }
  60% {
    opacity: 0.5;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
  }
}
</style>
