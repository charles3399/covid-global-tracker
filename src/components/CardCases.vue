<template>
    <div class="mt-1 flex flex-wrap flex-row justify-center text-center">
        <div class="bg-indigo-900 text-purple-200 shadow-xl p-5 m-2 rounded-lg w-72 tracking-wide">
            <h2 class="uppercase text-2xl font-bold"><i class="far fa-chart-bar"></i> Cases</h2>
            <h3 class="uppercase text-lg mt-2">Total: <span class="text-2xl font-extrabold">{{ numbersWithCommas(stats.TotalConfirmed) }}</span></h3>
            <h3 class="uppercase text-lg mt-2">New: <span class="text-2xl font-extrabold">{{ numbersWithCommas(stats.NewConfirmed) }}</span></h3>
        </div>
        <div class="bg-gray-800 text-red-300 shadow-xl p-5 m-2 rounded-lg w-72 tracking-wide">
            <h2 class="uppercase text-2xl font-bold"><i class="fas fa-skull"></i> Deaths</h2>
            <h3 class="uppercase text-lg mt-2">Total: <span class="text-2xl font-extrabold">{{ numbersWithCommas(stats.TotalDeaths) }}</span></h3>
            <h3 class="uppercase text-lg mt-2">New: <span class="text-2xl font-extrabold">{{ numbersWithCommas(stats.NewDeaths) }}</span></h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardCases',
    props: ['stats'],
    data() {
        return {
            numbersWithCommas(val) {
                return Number(val).toLocaleString()
            }
        }
    }
}
</script>

<style scoped>
</style>