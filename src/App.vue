<template>
  <Header />
  <main v-if="!loading" class="mt-2 p-7 text-center">
    <button class="hover:bg-green-600 hover:text-white transform duration-300 text-xs tracking-wide rounded-lg p-1 mb-2 uppercase" @click="refreshData"><i class="fas fa-sync-alt"> Refresh data</i></button>
    <button :style="scrollVisibility" @click="scrollTop" class="text-blue-400 hover:text-blue-600 text-5xl fixed right-10 bottom-12 z-10"><i class="fas fa-arrow-circle-up"></i></button>
    <GlobalCases :stats="worldStatus" />
    <CountryTables @get-country="getCountry" :countryStats="countryStats" />
    <!-- <div v-if="!loadingChart">
      <LineChart :lineChartStats="lineChartStats" />
    </div>
    <div v-else>
      <div v-if="loadingChartMessage !== 'Select a country to show their individual stats' ">
        <i class="pi pi-spin pi-spinner px-1" style="font-size: 1rem"></i>
      </div>
      <span class="text-lg">{{ loadingChartMessage }}</span>
    </div> -->
    <News />
    <Footer />
  </main>
  <main v-else class="flex flex-col justify-center text-center mt-32 p-5">
    <i class="pi pi-spin pi-spinner px-1 w-20 mx-auto" style="font-size: 2rem"></i>
    <span class="text-lg">Getting data, this may take a while...</span>
  </main>
</template>

<script>
import GlobalCases from './components/GlobalCases.vue'
import Header from './components/Header.vue'
import CountryTables from './components/CountryTables.vue'
//import LineChart from './components/LineChart.vue'
import Footer from './components/Footer.vue'
import useCovidData from './composables/useCovidData'
import News from './components/News.vue'

export default {
  name: 'App',
  components: {
    Header,
    GlobalCases,
    CountryTables,
    //LineChart,
    Footer,
    News
},
  setup() {
    const {
      scrollVisibility,
      worldStatus,
      countryStats,
      //lineChartStats,
      loading,
      //loadingChart,
      //loadingChartMessage,
      scrollTop,
      getCountry,
      refreshData,
    } = useCovidData()

    return {
      scrollVisibility,
      worldStatus,
      countryStats,
      //lineChartStats,
      loading,
      //loadingChart,
      //loadingChartMessage,
      scrollTop,
      getCountry,
      refreshData,
    }
  }
}
</script>