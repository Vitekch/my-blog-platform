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
        label="Username"
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
              label="Fist Name"
              color="var(--accent)"
            >
            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="lastName"
              dense
              label="Last Name"
              color="var(--accent)"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pt-0">
            <v-radio-group
              v-model="gender"
              label="Gender"
            >
              <v-radio
                label="Female"
                value="female"
                color="var(--accent)"
              ></v-radio>
              <v-radio
                label="Male"
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
        label="Password"
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
        label="Confirm Password"
        class="mb-5"
        color="var(--accent)"
      >
      </v-text-field>
      <div class="d-flex align-end">
        <span class="text-caption text--secondary">
            Already have an account? <router-link to="/auth/SignIn">Sign In!</router-link>
        </span>
        <v-spacer></v-spacer>
        <v-btn
            width="70px"
            type="submit"
            dark
            color="var(--accent)"
            depressed
            class="text-none"
        >
            Submit
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script src="./Registration.ts"></script>
<style src="./Registration.scss" lang="scss"></style>
