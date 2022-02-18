<template>
  <v-dialog
    v-model="$store.state.isAvatarChangeVisible"
    width="700"
  >
    <v-card>
      <v-card-title style="background: var(--v-blogPostBg-base)">
        <h1 class="text-h2" style="color: var(--v-secondary-base)">{{ $t('AVATAR_CHANGE') }}</h1>
        <v-spacer></v-spacer>
        <v-divider vertical class="mx-6"></v-divider>
        <v-btn
          icon
          elevation="1"
          :color="isHovered ? 'error' : ''"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
          @click="$store.state.isAvatarChangeVisible = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
        <v-container>
          <v-row>
            <v-col class="d-flex justify-center">
              <v-img
                :src="imageUrl"
              >

              </v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8" class="d-flex align-end">
              <v-file-input
                v-model="file"
                accept="image/*"
                hide-details
                @change="selectFile"
              >
              </v-file-input>
            </v-col>
            <v-col cols="4" class="d-flex align-end justify-center">
              <v-btn
                color="primary"
                @click="uploadFile"
              >
                {{ $t('SUBMIT') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      <v-card-actions>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script src="./AvatarChange.ts"></script>
<style src="./AvatarChange.scss" lang="scss"></style>
