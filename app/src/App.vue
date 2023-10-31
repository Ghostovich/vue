<template>
  <HeaderComponent />
  <IndexComponent />
  <ArticlesComponent/>
  <BlogDetailsComponent/>
  <ProjectComponent />
  <FooterComponent />
</template>

<script>
import BlogDetailsComponent from './components/BlogDetailsComponent.vue'
import IndexComponent from './components/IndexComponent.vue';
import ArticlesComponent from './components/ArticlesComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue';
import ProjectComponent from './components/ProjectComponent.vue'

import FooterComponent from './components/FooterComponent.vue';
export default {
    components: { IndexComponent, ArticlesComponent, BlogDetailsComponent, HeaderComponent, FooterComponent, ProjectComponent }
}
</script>

<style lang="scss">
</style>
