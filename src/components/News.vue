<template>
    <div class="p-2 my-7 mx-auto text-center border-1 p-shadow-11 rounded-3xl">
      <div class="px-2 m-3">
        <h1 class="mb-3 font-semibold text-2xl">Latest News</h1>
        <main v-if="!loading">
            <div v-if="news" class="flex flex-row flex-wrap justify-center">
                <div class="p-2 m-2 w-80" v-for="headlines in news.news" :key="headlines">
                    <a :href="headlines.link" target="_blank" rel="noopener noreferrer">
                        <Card>
                            <template #header>
                                <img :src="headlines.urlToImage" alt="News image headline" />
                            </template>
                            <template #title>
                                <h1 class="text-lg">{{ headlines.title }}</h1>
                            </template>
                            <template #content>
                                <p class="text-sm">Source: <strong>{{ readableWord(headlines.reference) }}</strong></p>
                            </template>
                            <template #footer>
                                <p class="text-xs italic">Date published: {{ moment(headlines.pubDate).format('LLL') }}</p>
                            </template>
                        </Card>
                    </a>
                </div>
            </div>
            <div v-else class="text-center">
                <h1 class="text-2xl">Error, unable to load</h1>
            </div>
        </main>
        <main v-else>
            <i class="pi pi-spin pi-spinner px-1 w-20 mx-auto" style="font-size: 2rem"></i>
        </main>
      </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import useNews from '../composables/useNews'
import Card from 'primevue/card'
import moment from 'moment'

export default {
    name: 'News',
    components: {
        Card
    },
    setup() {
    const {
        news,
        getNews,
        loading,
    } = useNews()

    const readableWord = (data) => {
        return data.replace(/-/g, ' ')
    }

    onMounted(getNews)

    return {
        moment,
        news,
        loading,
        readableWord
    }
}
}
</script>