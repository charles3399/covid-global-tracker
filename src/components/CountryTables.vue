<template>
    <div class="p-2 my-5">
        <DataTable
            class="p-datatable-sm p-shadow-11 p-p-4 rounded-3xl"
            :value="countryStats"
            :resizableColumns="true"
            columnResizeMode="expand"
            responsiveLayout="stack"
            showGridlines
            breakpoint="960px"
            stripedRows
            :paginator="true"
            :rows="5"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[5,10,20,50]"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
            v-model:filters="filters"
            :globalFilterFields="['Country']"
            >
                <template #header>
                    <div id="country-title">
                        <h3 class="text-3xl font-bold py-3" id="country-label">Countries</h3>
                        <!-- <p class="italic text-xs" id="country-description">(Select a country below to show individual stats)</p> -->
                    </div>
                    <div class="p-d-flex p-flex-wrap p-jc-center p-ai-center">
                        <div>
                            <span class="p-input-icon-right p-m-1">
                                <i class="pi pi-times cursor-pointer" @click="clearFilter()" />
                                <InputText type="text" class="p-px-1 p-py-1" v-model="filters['global'].value" placeholder="Search a country" />
                            </span>
                        </div>
                    </div>
                </template>
                <Column field="Country" header="Country" filterField="Country" :sortable="true">
                    <template #body="slotProps">
                        <!-- <span class="font-bold cursor-pointer hover:text-green-700" @click="getCountry(slotProps.data.ThreeLetterSymbol, slotProps.data.Country)">{{ slotProps.data.Country }}</span> -->
                        <span class="font-bold">{{ slotProps.data.Country }}</span>
                    </template>
                </Column>
                <Column field="rank" header="Rank" :sortable="true"></Column>
                <Column field="TotalCases" header="Total Cases" :sortable="true">
                    <template #body="slotProps">
                        <span class="text-purple-900">{{numbersWithCommas(slotProps.data.TotalCases)}}</span>
                    </template>
                </Column>
                <Column field="TotalDeaths" header="Total deaths" :sortable="true">
                    <template #body="slotProps">
                        <span class="text-red-700">{{numbersWithCommas(slotProps.data.TotalDeaths)}}</span>
                    </template>
                </Column>
                <Column field="TotalRecovered" header="Recovered" :sortable="true">
                    <template #body="slotProps">
                        <span class="text-green-500">{{numbersWithCommas(slotProps.data.TotalRecovered)}}</span>
                    </template>
                </Column>
                <Column field="ActiveCases" header="Active cases" :sortable="true">
                    <template #body="slotProps">
                        <span class="t text-yellow-500">{{numbersWithCommas(slotProps.data.ActiveCases)}}</span>
                    </template>
                </Column>
                <Column field="Serious_Critical" header="Critical" :sortable="true">
                    <template #body="slotProps">
                        <span class="t text-blue-500">{{numbersWithCommas(slotProps.data.Serious_Critical)}}</span>
                    </template>
                </Column>
                <Column field="TotalTests" header="Total Tests" :sortable="true">
                    <template #body="slotProps">
                        <span class="t text-indigo-500">{{numbersWithCommas(slotProps.data.TotalTests)}}</span>
                    </template>
                </Column>
        </DataTable>
    </div>
</template>

<script>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import useCountryTables from '../composables/useCountryTables'

export default {
    name: 'CountryTables',
    props: {
        countryStats: {
            type: Object
        }
    },
    components: {
        DataTable,
        Column,
        InputText
    },
    setup(props, context) {
        const {
            filters,
            numbersWithCommas,
            getCountry,
            clearFilter,
            initFilters,
        } = useCountryTables(props, context)

        return {
            filters,
            numbersWithCommas,
            getCountry,
            clearFilter,
            initFilters,
        }
    }
}

</script>

<style scoped>
    @media ( max-width: 960px ) {
        #country-label {
            font-size: 16pt;
        }
        #country-description {
            font-size: 8pt;
        }
    }
</style>