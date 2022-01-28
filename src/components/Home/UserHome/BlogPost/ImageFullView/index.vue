<template>
    <v-dialog
      v-model="$store.state.isFullViewVisible"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2 pb-4">
          <v-spacer></v-spacer>
          <v-btn
            icon
            elevation="1"
            :color="isHovered ? 'error' : 'secondary'"
            @mouseenter="isHovered = true"
            @mouseleave="isHovered = false"
            @click="$store.state.isFullViewVisible = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
          <v-img :src="img"></v-img>
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script src="./ImageFullView.ts"></script>
<style src="./ImageFullView.scss" lang="scss"></style>
