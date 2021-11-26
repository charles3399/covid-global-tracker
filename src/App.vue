<template>
  <Header />
  <main v-if="!loading" class="mt-2 p-7 text-center">
    <button class="hover:bg-green-600 hover:text-white transform duration-300 text-xs tracking-wide rounded-lg p-1 mb-2 uppercase" @click="refreshData"><i class="fas fa-sync-alt"> Refresh data</i></button>
    <GlobalCases :stats="worldStatus" />
    <CountryTables :countryStats="countryStats" />
  </main>
  <main v-else class="flex flex-col justify-center text-center mt-32 p-5">
    <img :src="loadingImage" class="w-20 mx-auto" alt="loading.." />
    <span class="text-lg">Fetching data, this may take a while...</span>
  </main>
</template>

<script>
import GlobalCases from './components/GlobalCases.vue'
import Header from './components/Header.vue'
import CountryTables from './components/CountryTables.vue'

export default {
  name: 'App',
  components: {
    Header,
    GlobalCases,
    CountryTables
},
  data() {
    return {
      worldStatus: [],
      countryStats: [],
      loading: true,
      loadingImage: require('@/assets/loading.gif'),
      apiKey: '75e629b8a7msh589773de52d5426p172818jsnd01590b0a88d',
    }
  },
  methods: {
    async getWorldData() {
      const response = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world', {
        method: 'GET',
        headers: { 
          'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com','x-rapidapi-key': this.apiKey
        }
      })
      const worldData = await response.json()
      const getData = worldData.find(findWorld => { return findWorld.Country === 'World' })
      return getData
    },
    async getCountryData() {
      const response = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', {
        method: 'GET',
        headers: { 
          'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com','x-rapidapi-key': this.apiKey
        }
      })
      let countryData = await response.json()
      let exceptData = ['World','Total:']
      countryData = countryData.filter(allCountry => !exceptData.includes(allCountry.Country))
      return countryData
    },
    async refreshData() {
      this.loading = true
      const worldData = await this.getWorldData()
      const countryData = await this.getCountryData()
      this.worldStatus = worldData
      this.countryStats = countryData
      this.loading = false
    }
  },
  async created() {
    const worldData = await this.getWorldData()
    const countryData = await this.getCountryData()
    this.worldStatus = worldData
    this.countryStats = countryData
    this.loading = false
  }
}
</script>
