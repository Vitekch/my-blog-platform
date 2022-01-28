<template>
  <v-card outlined class="post-body ma-4">
    <v-card-title>
    <v-container>
      <v-row class="d-flex align-start pa-2">
        <v-col class="d-flex align-end pa-0">
          <v-avatar size="40" color="accent">
            <v-icon>
              mdi-account
            </v-icon>
          </v-avatar>
          <span class="d-none d-md-flex align-end ml-5">
            <span class="text-body-1"><b>{{user}}</b></span>
            <span class="text-caption ml-2">{{date}}</span>
          </span>
        </v-col>
        <v-spacer></v-spacer>
        <v-btn
          icon
        >
          <v-icon>
            mdi-dots-vertical
          </v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <v-chip-group
          active-class="primary--text"
          column
        >
          <Tag v-for="(tag, idx) in content.tags" :key="idx" :tag="tag"></Tag>
        </v-chip-group>
      </v-row>
    </v-container>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <pre v-if="content.text" class="pa-3">{{content.text}}</pre>
      <v-container>
        <v-row>
          <v-col
            v-for="(img, idx) in content.imgs"
            :key="idx"
            class="d-flex child-flex"
            cols="4"
          >
            <v-img
              :src="img"
              class="rounded-lg"
              width="300px"
              aspect-ratio="1"
              @click="openImage(img)"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script src="./BlogPost.ts"></script>
<style src="./BlogPost.scss" lang="scss" scoped></style>
