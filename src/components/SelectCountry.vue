<template>
    <div class="m-5 text-center">
        <select class="form-select m-3 w-80 p-1 border border-gray-900 cursor-pointer rounded"
            v-model="selected"
            @change="onChange()">
            <option value="0">Select country</option>
            <option class="cursor-pointer"
                v-for="country in countries"
                :key="country"
                :value="country.ID"
            >
                {{ country.Country }}
            </option>
        </select>
        <button class="rounded-lg p-1 mb-5 hover:bg-red-500 hover:border-red-500 hover:text-white border border-gray-500 transform duration-300" @click="clear"><i class="far fa-times-circle"></i> Clear</button>
        <h3 class="text-3xl font-extrabold tracking-wide">{{ title }}</h3>
        <p>As of {{ currentDate }}</p>
    </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'SelectCountry',
  props: ['countries', 'title' ,'clear'],
  data() {
      return {
          currentDate: moment().format('LL'),
          selected: 0
      }
  },
  methods: {
      onChange() {
          const country = this.countries.find((item) => item.ID === this.selected)
          this.$emit('get-country', country)
      }
  }
}
</script>

<style scoped>
</style>