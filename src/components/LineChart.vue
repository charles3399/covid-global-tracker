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
import moment from 'moment'
import { ref } from 'vue'

export default {
  name: 'LineChart',
  props: ['lineChartStats'],
  components: {
    Chart
  },
  setup(props) {
    const sortTotalDate = () => {
        return props.lineChartStats.map(e => moment(e.date).format('ll')).reverse()
    }

    const sortTotalCases = () => {
        return props.lineChartStats.map(e => e.total_cases).reverse()
    }

    const sortTotalDeaths = () => {
        return props.lineChartStats.map(e => e.total_deaths).reverse()
    }

    const sortNewDate = () => {
        return props.lineChartStats.map(e => moment(e.date).format('ll')).reverse()
    }

    const sortNewCases = () => {
        return props.lineChartStats.map(e => e.new_cases).reverse()
    }

    const sortNewDeaths = () => {
        return props.lineChartStats.map(e => e.new_deaths).reverse()
    }

    const countryName = () => {
        return props.lineChartStats[0].Country
    }

    const chartdataTotalCases = ref({
        labels: sortTotalDate(),
        datasets: [
            {
                label: 'Total cases',
                backgroundColor: 'rgba(68, 226, 94, 0.548)',
                borderColor: '#30c746',
                tension: 0,
                fill: true,
                data: sortTotalCases()
            },
            {
                label: 'Total deaths',
                backgroundColor: 'rgba(238, 74, 74, 0.548)',
                borderColor: '#fc4747c5',
                tension: 0,
                fill: true,
                data: sortTotalDeaths()
            }
        ]
    })

    const chartdataNewCases = ref({
        labels: sortNewDate(),
        datasets: [
            {
                label: 'New cases',
                backgroundColor: 'rgba(68, 226, 94, 0.548)',
                borderColor: '#30c746',
                tension: 0,
                fill: true,
                data: sortNewCases()
            },
            {
                label: 'New deaths',
                backgroundColor: 'rgba(238, 74, 74, 0.548)',
                borderColor: '#fc4747c5',
                tension: 0,
                fill: true,
                data: sortNewDeaths()
            }
        ]
    })

    const options = ref({
        responsive: true,
        pointRadius: 1,
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
    })

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
