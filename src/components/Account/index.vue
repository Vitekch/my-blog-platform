<template>
  <v-row class="d-flex justify-center">
    <v-col cols="0" lg="1"></v-col>
    <v-col cols="12" lg="10">
    <v-card
      class="ma-4"
    >
      <v-container>
        <v-row>
          <v-col cols="4" class="d-flex justify-center align-end">
            <Avatar />
            <v-btn
              icon
              elevation="2"
              @click="showAvatarChangeDialog"
            >
              <v-icon>
                mdi-camera
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="8" class="d-flex flex-column justify-space-between">
            <div class="d-flex justify-end">
              <v-btn
                icon
              >
                <v-icon>
                  mdi-cog
                </v-icon>
              </v-btn>
            </div>
            <div>
              <div class="text-h2"><b>{{username}}</b></div>
              <v-divider class="my-2"></v-divider>
              <div class="text-h6 text--secondary">{{firstName}} {{lastName}}</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    </v-col>
    <v-col cols="0" lg="1"></v-col>
    <AvatarChange />
  </v-row>
</template>

<script src="./Account.ts"></script>
<style src="./Account.scss" lang="scss"></style>
