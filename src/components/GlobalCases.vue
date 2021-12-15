<template>
    <div class="text-center">
        <h1 class="text-4xl font-extrabold">Worldwide</h1>
        <p class="my-3">As of {{ currentDate }}</p>
    </div>
    <div class="mt-1 flex flex-wrap flex-row justify-center text-center">
        <div v-for="cardData in cardDatas" :key="cardData" :class="cardData.color" class="p-5 m-1 rounded-lg w-72 tracking-wide">
            <h2 class="uppercase text-2xl font-bold"><i :class="cardData.icon"></i> {{ cardData.title }}</h2>
            <h3 class="uppercase text-lg mt-2">Total: <span class="text-2xl font-extrabold">{{ numbersWithCommas( cardData.total ) }}</span></h3>
            <h3 v-if="cardData.new" class="uppercase text-lg mt-2">New: <span class="text-2xl font-extrabold">{{ numbersWithCommas( cardData.new) }}</span></h3>
            <h3 v-if="cardData.critical" class="uppercase text-lg mt-2">Critical: <span class="text-2xl font-extrabold">{{ numbersWithCommas( cardData.critical) }}</span></h3>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'CardCases',
    props: ['stats'],
    data() {
        return {
            numbersWithCommas(val) {
                return Number(val).toLocaleString()
            },
            currentDate: moment().format('LL'),
            cardDatas: [
                { title: 'Total Cases', icon: 'far fa-chart-bar', color: 'bg-indigo-900 text-purple-200', total: this.stats.TotalCases, new: this.stats.NewCases  },
                { title: 'Active Cases', icon: 'fas fa-exclamation-circle', color: 'bg-yellow-700 text-yellow-200', total: this.stats.ActiveCases, critical: this.stats.Serious_Critical },
                { title: 'Recoveries', icon: 'fas fa-heartbeat', color: 'bg-green-900 text-green-200', total: this.stats.TotalRecovered, new: this.stats.NewRecovered  },
                { title: 'Deaths', icon: 'fas fa-skull', color: 'bg-gray-900 text-red-200', total: this.stats.TotalDeaths, new: this.stats.NewDeaths  }
            ]
        }
    }
}
</script>

<style scoped>
</style>