<template>
 <header>
      <div class="header center body">
        <router-link to='/' class="header__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
              fill="#CDA274"
            />
          </svg>
          <p class="header__logo__text">Interno</p>
        </router-link>
        <div class="header__nav__menu">
          <router-link to='/' class="header__nav__menu__link">Home</router-link>
          <router-link to='/Project' class="header__nav__menu__link">Project</router-link>
          <router-link to='/Articles' class="header__nav__menu__link">Blog</router-link>
        </div>
      </div>
    </header>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>