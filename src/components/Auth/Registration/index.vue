<template>
  <div>
    <v-form
      @submit.prevent="registration"
      ref="regForm"
      class="d-flex flex-column mx-10 mt-10 mb-10"
    >
      <v-text-field
        v-model="username"
        dense
        required
        :rules="[rules.required]"
        :label="$t('USERNAME')"
        class="mb-2"
        color="var(--accent)"
      >
      </v-text-field>
      <v-container class="d-flex flex-column mb-2 pa-0">
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="firstName"
              dense
              required
              :rules="[rules.required]"
              :label="$t('FIRST_N')"
              color="var(--accent)"
            >
            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="lastName"
              dense
              :label="$t('LAST_N')"
              color="var(--accent)"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pt-0">
            <v-radio-group
              v-model="gender"
              :label="$t('GENDER')"
            >
              <v-radio
                :label="$t('FEMALE')"
                value="female"
                color="var(--accent)"
              ></v-radio>
              <v-radio
                :label="$t('MALE')"
                value="male"
                color="var(--accent)"
              ></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
      </v-container>
      <v-text-field
        v-model="password"
        :type="isPasswordHide ? 'password' : 'text'"
        dense
        required
        :rules="[rules.length, rules.required]"
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
      <v-text-field
        v-model="confirmPassword"
        :type="isPasswordHide ? 'password' : 'text'"
        dense
        :rules="[comparePasswords]"
        required
        :label="$t('CONFIRM_P')"
        class="mb-5"
        color="var(--accent)"
      >
      </v-text-field>
      <div class="d-flex align-end">
        <span class="text-caption text--secondary">
            {{ $t('HAVE_AN_ACCOUNT') }}
            <router-link to="/auth/Login">
              {{ $t('LOGIN') }}!
            </router-link>
        </span>
        <v-spacer></v-spacer>
        <v-btn
            type="submit"
            dark
            color="var(--accent)"
            depressed
            class="text-none"
        >
            {{ $t('SUBMIT') }}
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script src="./Registration.ts"></script>
<style src="./Registration.scss" lang="scss"></style>
