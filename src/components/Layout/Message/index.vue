<template>
  <v-snackbar
    v-model="message.isMessageActive"
    :color="message.type"
  >
    {{ message.text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        text
        v-bind="attrs"
        @click="hideMessage"
        class="text-none"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script src="./Message.ts"></script>
<style src="./Message.scss" lang="scss"></style>
