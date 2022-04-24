<template>
  <div class="border-1 p-shadow-11 rounded-3xl mx-auto text-center bg-indigo-900 text-white">
      <div class="px-2 my-7">
        <h1 class="mb-3 font-semibold text-2xl leading-tight">{{ countryName() }} new cases and deaths for the past 6 months</h1>
        <p class="italic text-xs">(Click one of the labels below to show individual datasets)</p>
        <Chart type="line" :data="chartdataNewCases" :options="options" />
      </div>
      <div class="px-2 mt-7">
        <h1 class="mb-3 font-semibold text-2xl leading-tight">{{ countryName() }} total cases and deaths for the past 6 months</h1>
        <p class="italic text-xs">(Click one of the labels below to show individual datasets)</p>
        <Chart type="line" :data="chartdataTotalCases" :options="options" />
      </div>
  </div>
</template>

<script>
import Chart from 'primevue/chart'
import useLineChart from '../composables/useLineChart'

export default {
  name: 'LineChart',
  props: {
      lineChartStats: {
          type: Object
      }
  },
  components: {
    Chart
  },
  setup(props) {
    const {
        chartdataTotalCases,
        chartdataNewCases,
        options,
        sortTotalDate,
        sortTotalCases,
        sortTotalDeaths,
        sortNewDate,
        sortNewCases,
        sortNewDeaths,
        countryName
    } = useLineChart(props)

    return {
        chartdataTotalCases,
        chartdataNewCases,
        options,
        sortTotalDate,
        sortTotalCases,
        sortTotalDeaths,
        sortNewDate,
        sortNewCases,
        sortNewDeaths,
        countryName
    }
  }
}
</script>

<style scoped>
    @media (max-width: 500px) {
        h1 {
            font-size: 10pt;
        }
    }
</style>
