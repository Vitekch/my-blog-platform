<template>
  <v-container class="d-flex justify-center">
    <v-row>
      <v-col cols="0" lg="2"></v-col>
      <v-col cols="12" lg="8">
        <v-card
          height="14vh"
          class="mb-2"
        >
        </v-card>
        <v-card
          height="75vh"
          outlined
          class="d-flex flex-column justify-space-between overflow-auto pa-4"
        >
          <BlogPost
            v-for="(item, idx) in postsData"
            :key="idx"
            :user="item.user"
            :date="item.date"
            :content="item.content"
            :title="item.title"
          />
        </v-card>
      </v-col>
      <v-col cols="0" lg="2"></v-col>
    </v-row>
    <ImageFullView />
  </v-container>
</template>

<script src="./UserHome.ts"></script>
<style src="./UserHome.scss" lang="scss"></style>
