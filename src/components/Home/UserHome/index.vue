<template>
  <div class="d-flex justify-center">
    <v-card
      width="70%"
      height="80vh"
      outlined class="d-flex flex-column justify-space-between overflow-auto pa-4"
    >
      <BlogPost
        v-for="(item, idx) in postsData"
        :key="idx"
        :user="item.user"
        :date="item.date"
        :content="item.content"
      />
    </v-card>
    <ImageFullView />
  </div>
</template>

<script src="./UserHome.ts"></script>
<style src="./UserHome.scss" lang="scss"></style>
