<template>
  <Header />
  <main v-if="!loading" class="mt-2 p-7 text-center">
    <button class="hover:bg-green-600 hover:text-white transform duration-300 text-xs tracking-wide rounded-lg p-1 mb-2 uppercase" @click="refreshData"><i class="fas fa-sync-alt"> Refresh data</i></button>
    <GlobalCases :stats="worldStatus" />
    <PieChart :pieChartStats="worldStatus" />
    <CountryTables @get-country="getCountry" :countryStats="countryStats" />
    <div v-if="!loadingChart">
      <LineChart :lineChartStats="lineChartStats" />
    </div>
  </main>
  <main v-else class="flex flex-col justify-center text-center mt-32 p-5">
    <img :src="loadingImage" class="w-20 mx-auto" alt="loading.." />
    <span class="text-lg">Getting data, this may take a while...</span>
  </main>
</template>

<script>
import GlobalCases from './components/GlobalCases.vue'
import Header from './components/Header.vue'
import CountryTables from './components/CountryTables.vue'
import LineChart from './components/LineChart.vue'
import PieChart from './components/PieChart.vue'

export default {
  name: 'App',
  components: {
    Header,
    GlobalCases,
    CountryTables,
    LineChart,
    PieChart
},
  data() {
    return {
      worldStatus: [],
      countryStats: [],
      lineChartStats: [],
      loading: true,
      loadingChart: true,
      loadingImage: require('@/assets/loading.gif'),
      baseUrl: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api',
      apiHost: 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
      apiKey: '75e629b8a7msh589773de52d5426p172818jsnd01590b0a88d'
    }
  },
  methods: {
    async getWorldData() {
      const response = await fetch(`${this.baseUrl}/npm-covid-data/world`, {
        method: 'GET',
        headers: { 
          'x-rapidapi-host': this.apiHost,
          'x-rapidapi-key': this.apiKey
        }
      })
      const worldData = await response.json()
      const getData = worldData.find(findWorld => findWorld.Country === 'World')
      return getData
    },
    async getCountryData() {
      const response = await fetch(`${this.baseUrl}/npm-covid-data/`, {
        method: 'GET',
        headers: { 
          'x-rapidapi-host': this.apiHost,
          'x-rapidapi-key': this.apiKey
        }
      })
      let countryData = await response.json()
      let exceptData = ['World','Total:']
      countryData = countryData.filter(allCountry => !exceptData.includes(allCountry.Country))
      return countryData
    },
    async getLineData(country) {
      const response = await fetch(`${this.baseUrl}/covid-ovid-data/sixmonth/${country}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': this.apiHost,
          'x-rapidapi-key': this.apiKey
        }
      })
      const dateData = await response.json()
      return dateData
    },
    async getCountry(country) {
      this.loadingChart = true
      const data = await this.getLineData(country)
      this.lineChartStats = data
      this.loadingChart = false
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
