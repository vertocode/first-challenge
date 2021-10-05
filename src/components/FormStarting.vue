<template>
  <v-form v-model='next' class="v-card p-4">
    <v-card elevation="2" class="pa-3">
      <h3>Please enter a few details about your client:</h3>
      <v-row class="pa-3"
      >
        <v-col cols="12">
          <v-autocomplete
              :append-icon="classBind"
              :items="items"
              id="1"
              :rules="rulesAutoComplete"
              dense
              v-model="valuesCamp1"
              label="Occupation"
              outlined
          >
          </v-autocomplete>
        </v-col>
        <v-col cols="12">
          <v-autocomplete
              :append-icon="classBind"
              :items="items"
              id="2"
              :rules="rulesAutoComplete"
              dense
              v-model="valuesCamp2"
              label="State"
              outlined
              messages="Coverage exclusive to Australian companies"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
              :append-icon="classBind"
              :rules="rulesAutoComplete"
              id="3"
              dense
              v-model="valuesCamp3"
              label="Annual Revenues"
              outlined
              messages="Up to $50M maximum annual revenues"
          >
            <template #prepend-inner>
              <span>AUD</span>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
              name="input4"
              :append-icon="classBind"
              :rules="rules"
              id="4"
              dense
              v-model="valuesCamp4"
              label="Number of Employees"
              outlined
              messages="Up to 100 maximum number of employees">

           <!-- <template #append v-if="rules">
              <v-icon color="green">mdi-check</v-icon>
            </template> -->
          </v-text-field>

        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>

export default {
  data() {
    return {
      rules: [
          v =>  (v.length > 0 && parseInt(v) < 100) || 'Only numbers under 100!',
      ],
      rulesAutoComplete: [
        v => v.length > 0 || 'Put some value'
      ],
      classBind: '', //mdi-check
      next: false,
      items: [
          'value1',
          'value2',
          'value3'
      ],
      valuesCamp1: '',
      valuesCamp2: '',
      valuesCamp3: '',
      valuesCamp4: ''
    }
  },
  watch: {
    next() {
      this.$emit('form-validator', this.next)
      console.log(this.$computed)
    },
  }
}
</script>

<style scoped>
  h3 {
    font-size: 13px;
    font-weight: normal;
  }
  form {
    margin-top: 25px;
    margin-left: 50px;
  }
  span {
    font-size: 12px;
  }
</style>

