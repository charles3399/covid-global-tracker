import moment from 'moment'
import { ref } from 'vue'

export default function useGlobalCases(props) {
    const numbersWithCommas = (val) => {
        return Number(val).toLocaleString()
    }

    const currentDate = moment().format('LL')

    const cardDatas = ref([
        { title: 'Total Cases', icon: 'far fa-chart-bar', color: 'bg-indigo-900 text-purple-200', total: props.stats.TotalCases, new: props.stats.NewCases  },
        { title: 'Active Cases', icon: 'fas fa-exclamation-circle', color: 'bg-yellow-700 text-yellow-200', total: props.stats.ActiveCases, critical: props.stats.Serious_Critical },
        { title: 'Recoveries', icon: 'fas fa-heartbeat', color: 'bg-green-900 text-green-200', total: props.stats.TotalRecovered, new: props.stats.NewRecovered  },
        { title: 'Deaths', icon: 'fas fa-skull', color: 'bg-gray-900 text-red-200', total: props.stats.TotalDeaths, new: props.stats.NewDeaths  }
    ])

    return { numbersWithCommas, currentDate, cardDatas }
}