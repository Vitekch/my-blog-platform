<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="0" lg="1"></v-col>
      <v-col cols="12" lg="10">
      <v-card
        class="ma-4"
        style="border-radius:100px"
      >
        <v-container>
          <v-row>
            <v-col cols="4" class="d-flex justify-center align-end">
              <Avatar :avatarUrl="avatarUrl"/>
              <v-btn
                icon
                elevation="2"
                @click="showAvatarChangeDialog"
                v-if="isAmI()"
              >
                <v-icon>
                  mdi-camera
                </v-icon>
              </v-btn>
            </v-col>
            <v-col cols="6" class="d-flex flex-column justify-space-between">
              <div class="d-flex justify-end">
                <v-btn
                  icon
                  v-if="isAmI()"
                >
                  <v-icon>
                    mdi-cog
                  </v-icon>
                </v-btn>
                <v-btn
                  v-else
                  class="text-none rounded-pill"
                  color="primary"
                >
                  {{ $t('SUBSCRIBE') }}
                </v-btn>
              </div>
              <div>
                <div class="text-h2"><b>{{username}}</b></div>
                <v-divider class="my-2"></v-divider>
                <div class="text-h6 text--secondary">{{firstName}} {{lastName}}</div>
              </div>
            </v-col>
            <v-col cols="2">

            </v-col>
          </v-row>
        </v-container>
      </v-card>
      </v-col>
      <v-col cols="0" lg="1"></v-col>
      <AvatarChange />
      <PostAdd />
    </v-row>
    <v-row>
      <v-col cols="0" lg="1"></v-col>
        <v-col>
          <v-card class="ma-4">
            <v-container>
              <v-row>
                <v-col>
                  <v-btn
                    color="primary"
                    small
                    elevation="2"
                    class="rounded-pill"
                    v-if="isAmI()"
                    @click="showPostAddDialog"
                  >
                    <v-icon left>
                      mdi-plus
                    </v-icon>
                    {{ $t('ADD_POST') }}
                  </v-btn>
                </v-col>
              </v-row>
              <v-divider class="my-3"></v-divider>
              <v-row>
                <v-col></v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      <v-col cols="0" lg="1"></v-col>
    </v-row>
  </v-container>
</template>

<script src="./Account.ts"></script>
<style src="./Account.scss" lang="scss"></style>
