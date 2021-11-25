<template>
  <Header />
  <main v-if="!loading">
    <SelectCountry
      @get-country="getCountry"
      :title="title"
      :countries="countries"
      :clear="clearCountry"
    />
    <CardCases
      :stats="status"
    />
  </main>
  <main v-else class="flex flex-col justify-center text-center mt-32 p-5">
    <img :src="loadingImage" class="w-20 mx-auto" alt="loading.." />
    <span class="text-lg">Fetching data, this may take a while...</span>
  </main>
</template>

<script>
import CardCases from './components/CardCases.vue'
import Header from './components/Header.vue'
import SelectCountry from './components/SelectCountry.vue'

export default {
  name: 'App',
  components: {
    Header,
    SelectCountry,
    CardCases,
  },
  data() {
    return {
      status: {},
      countries: [],
      title: 'Worldwide',
      loading: true,
      loadingImage: require('@/assets/loading.gif')
    }
  },
  methods: {
    async getApiData() {
      const resp = await fetch('https://api.covid19api.com/summary')
      const data = await resp.json()
      return data
    },
    getCountry(e) {
      this.status = e
      this.title = e.Country
    },
    async clearCountry() {
      this.loading = true
      const data = await this.getApiData()
      this.status = data.Global
      this.title = 'Worldwide'
      this.loading = false
    }
  },
  async created() {
    const data = await this.getApiData()

    this.status = data.Global
    this.countries = data.Countries
    this.loading = false
  },
}
</script>
