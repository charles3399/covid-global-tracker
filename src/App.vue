<template>
  <Header />
  <main v-if="!loading" class="mt-2 p-7 text-center">
    <button class="hover:bg-green-600 hover:text-white transform duration-300 text-xs tracking-wide rounded-lg p-1 mb-2 uppercase" @click="refreshData"><i class="fas fa-sync-alt"> Refresh data</i></button>
    <GlobalCases :stats="worldStatus" />
    <BarChart :barChartStats="worldStatus" />
    <CountryTables @get-country="getCountry" :countryStats="countryStats" />
    <div v-if="!loadingChart">
      <LineChart :lineChartStats="lineChartStats" />
    </div>
    <div v-else>
      <div v-if="loadingChartMessage !== 'Select a country to show their individual stats' ">
        <i class="pi pi-spin pi-spinner px-1" style="font-size: 1rem"></i>
      </div>
      <span class="text-lg">{{ loadingChartMessage }}</span>
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
import BarChart from './components/BarChart.vue'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    Header,
    GlobalCases,
    CountryTables,
    LineChart,
    BarChart
  },
  setup() {
    const worldStatus = ref([])
    const countryStats = ref([])
    const lineChartStats = ref([])
    const loading = ref(true)
    const loadingChart = ref(true)
    const loadingChartMessage = ref('')
    const loadingImage = ref(require('@/assets/loading.gif'))
    const baseUrl = ref('https:vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api')
    const apiHost = ref('vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com')
    const apiKey = ref('75e629b8a7msh589773de52d5426p172818jsnd01590b0a88d')

    const getWorldData = async () => {
      const response = await fetch(`${baseUrl.value}/npm-covid-data/world`, {
        method: 'GET',
        headers: { 
          'x-rapidapi-host': apiHost.value,
          'x-rapidapi-key': apiKey.value
        }
      })
      const worldData = await response.json()
      const getData = worldData.find(findWorld => findWorld.Country === 'World')
      return getData
    }

    const getCountryData = async () => {
      const response = await fetch(`${baseUrl.value}/npm-covid-data/`, {
        method: 'GET',
        headers: { 
          'x-rapidapi-host': apiHost.value,
          'x-rapidapi-key': apiKey.value
        }
      })
      let countryData = await response.json()
      let exceptData = ['World','Total:']
      countryData = countryData.filter(allCountry => !exceptData.includes(allCountry.Country))
      return countryData
    }

    const getLineChartData = async (country) => {
      const response = await fetch(`${baseUrl.value}/covid-ovid-data/sixmonth/${country}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': apiHost.value,
          'x-rapidapi-key': apiKey.value
        }
      })
      const dateData = await response.json()
      return dateData
    }

    const getCountry = async ({countryCode, countryName}) => {
      loadingChart.value = true
      loadingChartMessage.value = `Gathering data for ${countryName} please wait...`
      const data = await getLineChartData(countryCode)
      lineChartStats.value = data
      loadingChart.value = false
    }

    const refreshData = async () => {
      loading.value = true
      const worldData = await getWorldData()
      const countryData = await getCountryData()
      worldStatus.value = worldData
      countryStats.value = countryData
      loading.value = false
    }
    
    const createdData = async () => {
      const worldData = await getWorldData()
      const countryData = await getCountryData()
      worldStatus.value = worldData
      countryStats.value = countryData
      loadingChartMessage.value = 'Select a country to show their individual stats'
      loading.value = false
    }

    createdData()

    return {
      worldStatus,
      countryStats,
      lineChartStats,
      loading,
      loadingChart,
      loadingChartMessage,
      loadingImage,
      baseUrl,
      apiHost,
      apiKey,
      getWorldData,
      getCountryData,
      getLineChartData,
      getCountry,
      refreshData,
      createdData
    }
  }
}
</script>