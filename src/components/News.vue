<template>
    <div class="p-2 my-7 mx-auto text-center border-1 p-shadow-11 rounded-3xl">
      <div class="px-2 m-3">
        <h1 class="mb-3 font-semibold text-2xl">News</h1>
        <div class="flex flex-row flex-wrap justify-center">
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
                            <p class="text-sm">Source: {{ headlines.reference }}</p>
                        </template>
                        <template #footer>
                            <p class="text-xs italic">Date published: {{ moment(headlines.pubDate).format('LLL') }}</p>
                        </template>
                    </Card>
                </a>
            </div>
        </div>
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
    } = useNews()

    onMounted(getNews)

    return {
        moment,
        news
    }
}
}
</script>