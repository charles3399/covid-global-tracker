import { ref } from 'vue'
import moment from 'moment'

export default function useLineChart(props) {

    const lineChartData = props.lineChartStats

    const sortTotalDate = () => lineChartData.map(e => moment(e.date).format('ll')).reverse()

    const sortTotalCases = () => lineChartData.map(e => e.total_cases).reverse()

    const sortTotalDeaths = () => lineChartData.map(e => e.total_deaths).reverse()

    const sortNewDate = () => lineChartData.map(e => moment(e.date).format('ll')).reverse()

    const sortNewCases = () => lineChartData.map(e => e.new_cases).reverse()

    const sortNewDeaths = () => lineChartData.map(e => e.new_deaths).reverse()

    const countryName = () => lineChartData[0].Country

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