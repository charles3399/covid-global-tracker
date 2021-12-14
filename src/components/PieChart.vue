<template>
  <div class="p-2 my-7 mx-auto text-center border-1 p-shadow-11 rounded-3xl bg-gray-800 text-white">
      <div class="px-2 m-3">
        <h1 class="mb-3 font-semibold text-2xl">Overall world condition</h1>
        <Chart type="doughnut" :data="chartdata" :options="options" />
      </div>
  </div>
</template>

<script>
import Chart from 'primevue/chart'

export default {
  name: 'PieChart',
  props: ['pieChartStats'],
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
                      data: [this.pieChartStats.TotalCases, this.pieChartStats.TotalDeaths, this.pieChartStats.TotalRecovered, this.pieChartStats.ActiveCases],
                      hoverOffset: 4
                  }
              ]
          },
          options: {
              legend: {
                  labels: {
                      fontColor: '#fff'
                  }
              },
              responsive: true,
              aspectRatio: 2.5,
          }
      }
  }
}
</script>

<style scoped>
</style>
