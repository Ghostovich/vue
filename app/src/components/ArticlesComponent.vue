<template>
  <div class="borders center">
      <div class="borders__block"></div>
      <div class="borders__block"></div>
      <div class="borders__block"></div>
    </div>
     <header>
      <div class="header center body">
        <a href="/site/index.html" class="header__logo">
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
        </a>
        <div class="header__nav__menu">
          <a href="#" class="header__nav__menu__link">Home</a>
          <a href="#" class="header__nav__menu__link">Project</a>
          <a href="#" class="header__nav__menu__link">Blog</a>
        </div>
      </div>
    </header>
    <main>
      <div class="articles__main">
        <section class="articles__head center body">
          <div class="articles__head__block">
            <div class="articles__head__heading">Articles & News</div>
            <div class="articles__head__discription">Home / Blog</div>
          </div>
        </section>
        <section class="articles__post center body">
          <div class="articles__post__heading">Latest Post</div>
          <div class="articles__post__block">
            <img
              src="@/assets/images/articlesPost.png"
              alt="post"
              class="articles__post__img"
            />
            <div class="articles__post__info">
              <h3 class="articles__post__info__heading">
                Low Cost Latest Invented Interior Designing Ideas
              </h3>
              <p class="articles__post__info__text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpis dignissim maximus.posuere in.Contrary to popular belief.
              </p>
              <p class="articles__post__info__text">
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classica.
              </p>
              <div class="articles__post__info__date">
                <p>25 December,2022</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="53"
                  viewBox="0 0 52 53"
                  fill="none"
                >
                  <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                  <path
                    d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                    stroke="#292F36"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section class="articles center body articles__page">
          <h2 class="articles__heading articles__page__heading">
            Articles & News
          </h2>
          <p class="articles__description articles__page__description">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>
          <div class="articles__blocks" id="app">
            <div
  class="articles__block"
  v-for="article in articles"
  :key="articles.id"
>
  <div  v-html="article.img"></div>
  <p class="articles__block__design" v-html="article.p"></p>
  <h3 class="articles__block__heading" v-html="article.h3"></h3>
  <div class="articles__block__date">
    <p v-html="article.date"></p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="53"
      viewBox="0 0 52 53"
      fill="none"
    >
      <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
      <path
        d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
        stroke="#292F36"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</div>
          </div>
        </section>
        <section class="articles__buttons center body">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
          >
            <circle cx="26.5" cy="26.5" r="25.5" stroke="#CDA274" />
            <text x="19" y="31" fill="black" class="text">01</text>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
          >
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            <text x="18" y="31" fill="black" class="text">02</text>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
          >
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            <text x="18" y="31" fill="black" class="text">03</text>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
          >
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            <path
              d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </section>
      </div>
    </main>
    <footer>
      <section class="footer center">
        <div class="footer__block">
          <a href="/site/index.html" class="header__logo">
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
          </a>
          <p class="footer__block__discription">
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <div class="footer__block__logos">
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z"
                fill="#292F36"
              />
            </svg>
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z"
                fill="#292F36"
              />
            </svg>
          </div>
        </div>
        <div class="footer__block additionallyPadding">
          <p class="footer__block__heading footer__block__heading__hover">
            Pages
          </p>
          <p class="footer__block__discription footer__block__heading__hover">
            Home
          </p>
          <p class="footer__block__discription footer__block__heading__hover">
            Project
          </p>
          <p class="footer__block__discription footer__block__heading__hover">
            Blog
          </p>
        </div>
        <div class="footer__block">
          <p class="footer__block__heading">Contact</p>
          <p class="footer__block__discription">
            55 East Birchwood Ave. Brooklyn, New York 11201
          </p>
          <p class="footer__block__discription">contact@interno.com</p>
          <p class="footer__block__discription">(123) 456 - 7890</p>
        </div>
      </section>
    </footer>
</template>

<script>
  export default {
    data() {
    return {
      articles: [
        {
          id: 1,
          img: '<img src="@/assets/images/articles (1).png" alt="img" class= "articles__block__img"/>',
          p: "Kitchan Design",
          h3: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022"
        },
        {
          id: 2,
          img: '<img src="@/assets/images/articles (2).png" alt="img"class="articles__block__img"/>',

          p: "Living Design",
          h3: "Low Cost Latest Invented Interior Designing <br />Ideas.",
          date: "22 December,2022"
        },
        {
          id: 3,
          img: "<img src='@/assets/images/articles (3).png' alt='img' class='articles__block__img'/>",
          p: "Interior Design",
          h3: "Best For Any Office & Business Interior <br />Solution",
          date: "25 December,2022"
        },
        {
          id: 4,
          img: '<img src="@/assets/images/articles (4).png" alt="img" class= "articles__block__img"/>',
          p: "Kitchan Design",
          h3: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022"
        },
        {
          id: 5,
          img: '<img src="@/assets/images/articles (5).png" alt="img"class="articles__block__img"/>',

          p: "Living Design",
          h3: "Low Cost Latest Invented Interior Designing <br />Ideas.",
          date: "22 December,2022"
        },
        {
          id: 6,
          img: "<img src='@/assets/images/articles (6).png' alt='img' class='articles__block__img'/>",
          p: "Interior Design",
          h3: "Best For Any Office & Business Interior <br />Solution",
          date: "25 December,2022"
        },
      ],
    };
  },
  methods: {

  },
  }
</script>

<style lang="scss" scoped>

</style>