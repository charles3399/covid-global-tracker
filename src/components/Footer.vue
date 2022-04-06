<template>
  <footer class="mt-4 mb-1">
      <hr class="border-1 border-gray-700">
      <div class="flex justify-center mt-3 flex-col">
          <p class="text-sm font-medium tracking-wide">&copy;Copyright {{ getYear }} COVID Global Tracker</p>
          <p class="text-sm font-medium tracking-wide">Made with <i class="fa fa-heart text-red-400" aria-hidden="true"></i> by <a href="https://charles3399.github.io/portfolio" target="__blank" class="underline">Charles</a></p>
      </div>
  </footer>
</template>

<script>
    export default {
        name: 'Footer',
        setup() {
            let getYear = new Date().getFullYear()

            return {
                getYear
            }
        }
    }
</script>

<style scoped>
</style>
