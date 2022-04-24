import { ref } from 'vue'

export default function useBarChart(props) {
    const chartData = ref({
        labels: ['Total Cases', 'Total Deaths', 'Recovered', 'Active'],
        datasets: [
            {
                backgroundColor: ['#313281', '#111827', '#21532E', '#71401C'],
                data: [props.barChartStats.TotalCases, props.barChartStats.TotalDeaths, props.barChartStats.TotalRecovered, props.barChartStats.ActiveCases],
            }
        ]
    })

    const options = ref({
        plugins: {
            legend: {
              display: false
            }
          },
          responsive: true,
          maintainAspectRatio: true
    })

    return {
        chartData,
        options
    }
}