import { ref } from 'vue'
import moment from 'moment'

export default function useLineChart(props) {
    const sortTotalDate = () => props.lineChartStats.map(e => moment(e.date).format('ll')).reverse()

    const sortTotalCases = () => props.lineChartStats.map(e => e.total_cases).reverse()

    const sortTotalDeaths = () => props.lineChartStats.map(e => e.total_deaths).reverse()

    const sortNewDate = () => props.lineChartStats.map(e => moment(e.date).format('ll')).reverse()

    const sortNewCases = () => props.lineChartStats.map(e => e.new_cases).reverse()

    const sortNewDeaths = () => props.lineChartStats.map(e => e.new_deaths).reverse()

    const countryName = () => props.lineChartStats[0].Country

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