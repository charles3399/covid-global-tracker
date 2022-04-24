import { ref, onMounted } from 'vue'

export default function useCovidData() {
    const scrollVisibility = ref({ display: 'none' })
    const worldStatus = ref([])
    const countryStats = ref([])
    const lineChartStats = ref([])
    const loading = ref(true)
    const loadingChart = ref(true)
    const loadingChartMessage = ref('')
    const baseUrl = ref(process.env.VUE_APP_URL)
    const apiHost = ref(process.env.VUE_APP_HOST)
    const apiKey = ref(process.env.VUE_APP_KEY)

    const scrollTop = () => {
      window.scrollTo({top: 0})
    }

    const buttonVisibility = () => {
      window.onscroll = () => {
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          scrollVisibility.value.display = 'block'
        }
        else {
          scrollVisibility.value.display = 'none'
        }
      }
    }

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

    onMounted(() => {
      buttonVisibility()
    })

    createdData()

    return {
        scrollVisibility,
        worldStatus,
        countryStats,
        lineChartStats,
        loading,
        loadingChart,
        loadingChartMessage,
        scrollTop,
        getWorldData,
        getLineChartData,
        getCountry,
        refreshData,
    }
}