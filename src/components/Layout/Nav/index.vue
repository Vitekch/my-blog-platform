<template>
  <v-navigation-drawer
    v-model="$store.state.isNavVisible"
    absolute
    bottom
    temporary
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group>
        <v-list-item>
          <v-list-item-title>Foo</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script src="./Nav.ts"></script>
<style src="./Nav.scss" lang="scss"></style>
