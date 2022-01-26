<template>
  <v-app-bar
      app
      dense
      elevation="2"
    >
    <!-- <v-app-bar-nav-icon @click="setNavVis" class="hidden-lg-only"></v-app-bar-nav-icon> -->
    <v-app-bar-nav-icon @click="setNavVis"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-btn
      small
      color="var(--color-1)"
      icon
      class="ma-1"
      @click="changeLang"
    >
      <v-icon>
        mdi-web
      </v-icon>
    </v-btn>
    <v-btn
      small
      color="var(--color-1)"
      icon
      class="ma-1 ml-11"
      @click="changeTheme"
    >
      <v-icon>
        mdi-theme-light-dark
      </v-icon>
    </v-btn>
    <v-btn
      v-if="!user"
      small
      outlined
      class="ml-12"
      @click="login"
    >
      {{ $t('LOGIN') }}
    </v-btn>
    <v-btn
      v-if="user"
      small
      outlined
      class="ml-12"
      @click="logout"
    >
      {{ $t('LOGOUT') }}
    </v-btn>
  </v-app-bar>
</template>

<script src="./Header.ts"></script>
<style src="./Header.scss" lang="scss"></style>
