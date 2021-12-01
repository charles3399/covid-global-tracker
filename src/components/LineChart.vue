<template>
  <div class="px-2 m-3 mx-auto text-center">
      <h1 class="mb-3 font-semibold uppercase">Number of cases comparison for 2020 vs 2021</h1>
      <p class="italic text-xs">(Click on the label below to show individual datasets)</p>
      <Chart type="line" :data="chartdata" :options="options" />
  </div>
</template>

<script>
import Chart from 'primevue/chart'
import moment from 'moment'

export default {
  name: 'LineChart',
  components: {
      Chart
  },
  data() {
      return {
          chartdata: {
              labels: moment.months(),
              datasets: [
                  {
                      label: '2020',
                      backgroundColor: 'rgba(68, 226, 94, 0.548)',
                      borderColor: '#30c746',
                      tension: .4,
                      fill: true,
                      data: [10, 15, 180, 250, 553, 683, 890, 1423, 1200, 1054, 1313, 986]
                  },
                  {
                      label: '2021',
                      backgroundColor: 'rgba(182, 46, 46, 0.548)',
                      borderColor: '#d64545',
                      tension: .4,
                      fill: true,
                      data: [1029, 1500, 1376, 1400, 1210, 1000, 920, 766, 899, 430, 561]
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
                          },
                          color: '#000'
                      }
                  }
              },
              scales: {
                  x: {
                      ticks: {
                          color: '#000',
                          font: {
                              size: 15,
                              weight: 'bold'
                          }
                      },
                      grid: {
                          color: '#000'
                      }
                  },
                  y: {
                      ticks: {
                          color: '#000',
                          font: {
                              size: 15,
                              weight: 'bold'
                          }
                      },
                      grid: {
                          color: '#000'
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
