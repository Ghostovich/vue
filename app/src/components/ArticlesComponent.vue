<template>
  <div class="borders center">
      <div class="borders__block"></div>
      <div class="borders__block"></div>
      <div class="borders__block"></div>
    </div>
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
            <div>
                <img :src='article.img' alt="img" class= "articles__block__img"/></div>
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
</template>

<script>
  export default {
    data() {
    return {
      articles: [
        {
          id: 1,
          img: require('@/assets/images/articles (1).png'),
          // img: '<img src="@/assets/images/articles (1).png" alt="img" class= "articles__block__img"/>',
          p: "Kitchan Design",
          h3: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022"
        },
        {
          id: 2,
          img: require("@/assets/images/articles (2).png"),

          p: "Living Design",
          h3: "Low Cost Latest Invented Interior Designing <br />Ideas.",
          date: "22 December,2022"
        },
        {
          id: 3,
          img: require("@/assets/images/articles (3).png"),
          p: "Interior Design",
          h3: "Best For Any Office & Business Interior <br />Solution",
          date: "25 December,2022"
        },
        {
          id: 4,
          img: require("@/assets/images/articles (4).png"),
          p: "Kitchan Design",
          h3: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022"
        },
        {
          id: 5,
          img: require("@/assets/images/articles (5).png"),

          p: "Living Design",
          h3: "Low Cost Latest Invented Interior Designing <br />Ideas.",
          date: "22 December,2022"
        },
        {
          id: 6,
          img: require("@/assets/images/articles (6).png"),
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