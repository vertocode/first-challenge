<template>
  <v-app>
    <div class="main">
      <HeaderTitle
          title="Let`s get your client protected"
          class="ma-1 mt-1"
      />
      <v-row>
        <v-col cols="8">
          <FormStarting  @form-validator="next($event)"/>
        </v-col>
        <v-col>
          <ContactStarting />
        </v-col>
      </v-row>
      <div class="my-5 mx-auto">
        <v-btn
            color="primary"
            class="button"
            type="submit"
            :@validator="!this.next"
            v-if="nextForm"
        >
          Next
        </v-btn>
      </div>
    </div>
  </v-app>
</template>

<script>

import HeaderTitle from '@/components/HeaderTitle'
import FormStarting from "./components/FormStarting";
import ContactStarting from "./components/ContactStarting";

export default {
  name: 'App',

  components: {
    ContactStarting,
    HeaderTitle,
    FormStarting
  },
  data() {
    return {
      nextForm: false
    }
  },
  methods: {
    next(event) {
      this.nextForm = event
      console.log(event)
    }
  }
}
</script>

<style>
.main {
  background-color: #fcfcfc;
}
.mx-auto {
  width: max-content;
}
.button {
  width: 100px;
}
</style>
