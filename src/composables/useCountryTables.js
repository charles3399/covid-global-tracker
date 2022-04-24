import {FilterMatchMode,FilterOperator} from 'primevue/api'
import { ref } from 'vue'

export default function useCountryTables(props, context) {
    const filters = ref(null)

    const numbersWithCommas = (val) => {
        return Number(val).toLocaleString()
    }

    const getCountry = (countryCode, countryName) => {
        context.emit('get-country', {
            countryCode: countryCode.toUpperCase(),
            countryName: countryName
        })
    }

    const clearFilter = () => {
        initFilters()
    }

    const initFilters = () => {
        filters.value = {
            'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
            'Country': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]}
        }
    }

    initFilters()

    return {
        filters,
        numbersWithCommas,
        getCountry,
        clearFilter,
        initFilters,
    }
}