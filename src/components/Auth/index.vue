<template>
<div class="d-flex justify-center align-center" style="height: 80vh">
  <v-card width="40%">
    <v-app-bar
      dark
      prominent
      elevation="0"
      height="150"
      src="https://picsum.photos/1920/1080?random"
      class="header"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,100,100,.6), rgba(100,100,100,.6)"
          class="filtered-img"
        ></v-img>
      </template>

      <v-app-bar-title><p class="text-h2">{{ title }}</p></v-app-bar-title>
    </v-app-bar>
    <v-slide-y-reverse-transition hide-on-leave>
    <component :is="component"></component>
    </v-slide-y-reverse-transition>
  </v-card>
</div>
</template>

<script src="./Auth.ts"></script>
<style src="./Auth.scss" lang="scss" scoped></style>
