<template>
  <div class="border-1 p-shadow-11 rounded-3xl mx-auto text-center bg-indigo-900 text-white">
      <div class="px-2 my-7">
        <h1 class="mb-3 font-semibold text-2xl">Philippines total cases and deaths for the past 6 months</h1>
        <p class="italic text-xs">(Click on the label below to show individual datasets)</p>
        <Chart type="line" :data="chartdata" :options="options" />
      </div>
      <div class="px-2 mt-7">
        <h1 class="mb-3 font-semibold text-2xl">Philippines new cases and deaths for the past 6 months</h1>
        <p class="italic text-xs">(Click on the label below to show individual datasets)</p>
        <Chart type="line" :data="chartdataNew" :options="options" />
      </div>
  </div>
</template>

<script>
import Chart from 'primevue/chart'
import moment from 'moment'

export default {
  name: 'LineChart',
  props: ['lineChartStats'],
  components: {
      Chart
  },
  data() {
      return {
          chartdata: {
              labels: this.sortTotalDate(),
              datasets: [
                  {
                      label: 'Total cases',
                      backgroundColor: 'rgba(68, 226, 94, 0.548)',
                      borderColor: '#30c746',
                      tension: 0,
                      fill: true,
                      data: this.sortTotalCases()
                  },
                  {
                      label: 'Total deaths',
                      backgroundColor: 'rgba(238, 74, 74, 0.548)',
                      borderColor: '#fc4747c5',
                      tension: 0,
                      fill: true,
                      data: this.sortTotalDeaths()
                  }
              ]
          },
          chartdataNew: {
              labels: this.sortNewDate(),
              datasets: [
                  {
                      label: 'New cases',
                      backgroundColor: 'rgba(68, 226, 94, 0.548)',
                      borderColor: '#30c746',
                      tension: 0,
                      fill: true,
                      data: this.sortNewCases()
                  },
                  {
                      label: 'New deaths',
                      backgroundColor: 'rgba(238, 74, 74, 0.548)',
                      borderColor: '#fc4747c5',
                      tension: 0,
                      fill: true,
                      data: this.sortNewDeaths()
                  }
              ]
          },
          options: {
              responsive: true,
              plugins: {
                  legend: {
                      labels: {
                          font: {
                              size: 10,
                          },
                          color: '#fff'
                      }
                  }
              },
              scales: {
                  x: {
                      ticks: {
                          color: '#fff',
                          font: {
                              size: 14,
                          }
                      },
                      grid: {
                          color: '#fff'
                      }
                  },
                  y: {
                      ticks: {
                          color: '#fff',
                          font: {
                              size: 14,
                          }
                      },
                      grid: {
                          color: '#fff'
                      }
                  }
              }
          }
      }
  },
  methods: {
      sortTotalDate() {
          let mappedData = this.lineChartStats.map(e => moment(e.date).format('ll'))
          mappedData.reverse()
          return mappedData
      },
      sortTotalCases() {
          let mappedData = this.lineChartStats.map(e => e.total_cases)
          mappedData.sort()
          return mappedData
      },
      sortTotalDeaths() {
          let mappedData = this.lineChartStats.map(e => e.total_deaths)
          mappedData.sort()
          return mappedData
      },
      sortNewDate() {
          let mappedData = this.lineChartStats.map(e => moment(e.date).format('ll'))
          mappedData.reverse()
          return mappedData
      },
      sortNewCases() {
          let mappedData = this.lineChartStats.map(e => e.new_cases)
          mappedData.reverse()
          return mappedData
      },
      sortNewDeaths() {
          let mappedData = this.lineChartStats.map(e => e.new_deaths)
          mappedData.reverse()
          return mappedData
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
