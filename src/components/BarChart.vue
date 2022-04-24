<template>
  <div class="p-2 my-7 mx-auto text-center border-1 p-shadow-11 rounded-3xl">
      <div class="px-2 m-3">
        <h1 class="mb-3 font-semibold text-2xl">Overall world condition</h1>
        <Chart type="bar" :data="chartData" :options="options" />
      </div>
  </div>
</template>

<script>
import Chart from 'primevue/chart'
import useBarChart from '../composables/useBarChart'

export default {
  name: 'BarChart',
  props: {
    barChartStats: {
      type: Object
    }
  },
  components: {
    Chart
  },
  setup(props) {
    const { chartData, options } = useBarChart(props)

    return { chartData, options }
  }
}
</script>

<style scoped>
</style>
