import axios from 'axios'
import { ref } from 'vue'

export default function useNews() {
    const news = ref([])
    const loading = ref(true)
    const baseUrl = ref(process.env.VUE_APP_URL)
    const apiHost = ref(process.env.VUE_APP_HOST)
    const apiKey = ref(process.env.VUE_APP_KEY)

    const getNews = async() => {
        const options = {
            method: 'GET',
            url: `${baseUrl.value}/news/get-coronavirus-news/0`,
            headers: {
                'x-rapidapi-host': apiHost.value,
                'x-rapidapi-key': apiKey.value
            }
        }

        loading.value = true
        const response = await axios.request(options)
        const newsData = await response.data
        news.value = newsData
        console.log(newsData)
        loading.value = false
    }

    return {
        news,
        getNews,
        loading
    }
}