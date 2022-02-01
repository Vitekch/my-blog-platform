<template>
  <v-avatar
    size="200"
    color="accent"
  >
    <v-img
      :src="avatarUrl"
      v-if="avatarUrl"
    >
    </v-img>
    <v-icon size="100" dark v-else>
        mdi-account
    </v-icon>
  </v-avatar>
</template>

<script src="./Avatar.ts"></script>
<style src="./Avatar.scss" lang="scss"></style>
