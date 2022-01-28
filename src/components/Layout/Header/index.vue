<template>
  <v-app-bar
      app
      elevation="2"
    >
    <v-container>
      <v-row>
        <v-col cols="6" class="d-flex align-center justify-start" v-if="user">
          <v-app-bar-nav-icon @click="setNavVis" class="d-md-none d-sm-flex"></v-app-bar-nav-icon>
          <v-btn
            small
            color="buttonsGray1"
            outlined
            class="ma-1 d-none d-md-flex text-none justify-space-between align-center"
            @click="account"
            width="100"
          >
            <v-icon small dense>
              mdi-account-circle
            </v-icon>
            {{$t('ACCOUNT')}}
          </v-btn>
          <v-btn
            small
            text
            color="buttonsGray2"
            class="ma-1 d-none d-md-flex text-none justify-space-between align-center"
            @click="news"
            width="150"
          >
            <v-icon small dense>
              mdi-newspaper-variant
            </v-icon>
            {{$t('NEWS')}}
          </v-btn>
        </v-col>
        <v-col :cols="user ? 6 : 12" class="d-flex align-center justify-end">
          <v-btn
            small
            color="buttonsGray1"
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
            color="buttonsGray1"
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
            outlined
            color="buttonsGray1"
            class="ml-12 text-none"
            width="100"
            @click="login"
          >
            {{ $t('LOGIN') }}
          </v-btn>
          <v-btn
            v-if="user"
            small
            outlined
            color="buttonsGray1"
            class="ml-12 text-none"
            width="100"
            @click="logout"
          >
            {{ $t('LOGOUT') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script src="./Header.ts"></script>
<style src="./Header.scss" lang="scss"></style>
