<template>
  <div class="p-8 m-3 mx-auto">
      <Chart type="bar" :data="chartdata" :options="options" />
  </div>
</template>

<script>
import Chart from 'primevue/chart'

export default {
  name: 'LineChart',
  components: {
      Chart
  },
  data() {
      return {
          chartdata: {
              labels: ['USA', 'France', 'China', 'UK' ,'Germany'],
              datasets: [
                  {
                      label: '2020',
                      backgroundColor: '#30c746',
                      borderColor: '#30c746',
                      data: [65, 59, 80, 81, 56]
                  },
                  {
                      label: '2021',
                      backgroundColor: '#d64545',
                      borderColor: '#d64545',
                      data: [88, 103, 32, 100, 75]
                  }
              ]
          },
          options: {
              responsive: true,
              plugins: {
                  legend: {
                      labels: {
                          font: {
                              size: 15,
                              weight: 'bold'
                          }
                      }
                  }
              }
          }
      }
  }
}
</script>

<style scoped>
</style>
