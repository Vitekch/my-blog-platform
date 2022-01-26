<template>
  <div>
    <v-form @submit.prevent="login" ref="loginForm" class="d-flex flex-column mx-10 mt-10 mb-10">
      <v-text-field
        v-model="username"
        dense
        required
        :rules="[rules.required]"
        :label="$t('USERNAME')"
        class="mb-2"
      >
      </v-text-field>
      <v-text-field
        v-model="password"
        :type="isPasswordHide ? 'password' : 'text'"
        dense
        required
        :rules="[rules.required]"
        :label="$t('PASSWORD')"
        class="mb-5"
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
      <div class="d-flex align-center">
        <span class="text-caption text--secondary">
            {{ $t('HAVENT_AN_ACCOUNT') }}<br>
            <router-link to="/auth/Registration">
              {{ $t('REGISTRATION_NOW') }}!
            </router-link>
        </span>
        <v-spacer></v-spacer>
        <v-btn
            width="70px"
            type="submit"
            dark
            depressed
            class="text-none"
            :loading="loading"
            color="primary"
        >
            {{ $t('LOGIN') }}
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script src="./Login.ts"></script>
<style src="./Login.scss" lang="scss"></style>
