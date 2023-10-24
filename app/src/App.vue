<template>
  <IndexComponent />
  <ArticlesComponent/>
  <BlogDetailsComponent/>
</template>

<script>
import BlogDetailsComponent from './components/BlogDetailsComponent.vue'
import IndexComponent from './components/IndexComponent.vue';
import ArticlesComponent from './components/ArticlesComponent.vue'
export default {
    components: { IndexComponent, ArticlesComponent, BlogDetailsComponent }
}
</script>

<style lang="scss">
</style>
