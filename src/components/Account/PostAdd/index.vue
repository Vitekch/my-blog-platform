<template>
  <v-dialog
    v-model="$store.state.isPostAddVisible"
    width="600"
  >
    <v-card>
      <v-card-title style="background: var(--v-blogPostBg-base)">
        <h1 class="text-h2" style="color: var(--v-secondary-base)">{{ $t('NEW_POST') }}</h1>
        <v-spacer></v-spacer>
        <v-divider vertical class="mx-6"></v-divider>
        <v-btn
          icon
          elevation="1"
          :color="isHovered ? 'error' : ''"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
          @click="$store.state.isPostAddVisible = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-form>
          <v-container>
            <v-row>
            <v-col>
                <v-text-field
                    :label="$t('TITLE')"
                    dense
                >
                </v-text-field>
            </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea
                    outlined
                    :label="$t('CONTENT')"
                    >
                    </v-textarea>
                </v-col>
            </v-row>
          </v-container>
      </v-form>
      <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            type="submit"
            dark
            depressed
            class="text-none"
            color="primary"
        >
            {{ $t('SUBMIT') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script src="./PostAdd.ts"></script>

<style src="./PostAdd.scss" lang="scss"></style>
