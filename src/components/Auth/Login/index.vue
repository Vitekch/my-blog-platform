<template>
  <div>
    <v-form @submit.prevent="login" ref="loginForm" class="d-flex flex-column mx-10 mt-10 mb-10">
      <v-text-field
        v-model="username"
        dense
        required
        :rules="[ rules.required ]"
        :label="$t('USERNAME')"
        class="mb-2"
        color="var(--accent)"
      >
      </v-text-field>
      <v-text-field
        v-model="password"
        :type="isPasswordHide ? 'password' : 'text'"
        dense
        required
        :rules="[ rules.required, rules.length  ]"
        :label="$t('PASSWORD')"
        class="mb-5"
        color="var(--accent)"
      >
        <v-btn
            slot="append"
            icon
            @click="switchPasswordHide"
        >
          <v-icon>
            {{ isPasswordHide ? 'mdi-eye' : 'mdi-eye-off' }}
          </v-icon>
        </v-btn>
      </v-text-field>
      <div class="d-flex align-end">
        <span class="text-caption text--secondary">
            {{ $t('HAVENT_AN_ACCOUNT') }}
            <router-link to="/auth/Registration">
              {{ $t('REGISTRATION_NOW') }}!
            </router-link>
        </span>
        <v-spacer></v-spacer>
        <v-btn
            width="70px"
            type="submit"
            dark
            color="var(--accent)"
            depressed
            class="text-none"
            :loading="loading"
        >
            {{ $t('LOGIN') }}
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script src="./Login.ts"></script>
<style src="./Login.scss" lang="scss"></style>
