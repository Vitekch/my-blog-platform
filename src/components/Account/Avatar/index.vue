<template>
  <v-avatar
    size="200"
    color="grey lighten-2"
  >
    <v-img
      :src="avatarUrl"
      v-if="avatarUrl && !loading"
    >
    </v-img>
    <v-progress-circular
      v-else-if="loading"
      indeterminate
      color="primary"
    ></v-progress-circular>
    <v-icon size="100" dark v-else>
        mdi-account
    </v-icon>
  </v-avatar>
</template>

<script src="./Avatar.ts"></script>
<style src="./Avatar.scss" lang="scss"></style>
