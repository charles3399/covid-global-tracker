<template>
  <div class="p-2 my-7 mx-auto text-center border-1 p-shadow-11 rounded-3xl">
      <div class="px-2 m-3">
        <h1 class="mb-3 font-semibold text-2xl">Overall world condition</h1>
        <Chart type="bar" :data="chartdata" :options="options" />
      </div>
  </div>
</template>

<script>
import Chart from 'primevue/chart'

export default {
  name: 'BarChart',
  props: ['barChartStats'],
  components: {
    Chart
  },
  data() {
    return {
      chartdata: {
        labels: ['Total Cases', 'Total Deaths', 'Recovered', 'Active'],
        datasets: [
          {
            backgroundColor: ['#313281', '#111827', '#21532E', '#71401C'],
            data: [this.barChartStats.TotalCases, this.barChartStats.TotalDeaths, this.barChartStats.TotalRecovered, this.barChartStats.ActiveCases],
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        responsive: true,
        maintainAspectRatio: true
      }
    }
  }
}
</script>

<style scoped>
</style>
