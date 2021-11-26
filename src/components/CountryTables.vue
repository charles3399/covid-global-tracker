<template>
    <div class="p-5 my-5">
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
            >
                    <template #header>
                        <h3 class="text-3xl font-bold">Countries</h3>
                    </template>
                <Column field="Country" header="Country" :sortable="true"></Column>
                <Column field="rank" header="Rank" :sortable="true"></Column>
                <Column field="TotalCases" header="Total Cases" :sortable="true">
                    <template #body="slotProps">
                        {{numbersWithCommas(slotProps.data.TotalCases)}}
                    </template>
                </Column>
                <Column field="ActiveCases" header="Active Cases" :sortable="true">
                    <template #body="slotProps">
                        {{numbersWithCommas(slotProps.data.ActiveCases)}}
                    </template>
                </Column>
                <Column field="TotalRecovered" header="Recovered" :sortable="true">
                    <template #body="slotProps">
                        {{numbersWithCommas(slotProps.data.TotalRecovered)}}
                    </template>
                </Column>
                <Column field="Serious_Critical" header="Critical" :sortable="true">
                    <template #body="slotProps">
                        {{numbersWithCommas(slotProps.data.Serious_Critical)}}
                    </template>
                </Column>
        </DataTable>
    </div>
</template>

<script>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

export default {
    name: 'CountryTables',
    props: ['countryStats'],
    components: {
        DataTable,
        Column
    },
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