const articles = {
  data() {
    return {
      articles: [
        {
          id: 1,
          img: '<img src="/site/images/articles (1).png" alt="img" class= "articles__block__img"/>',
          p: "Kitchan Design",
          h3: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022"
        },
        {
          id: 2,
          img: '<img src="/site/images/articles (2).png" alt="img"class="articles__block__img"/>',

          p: "Living Design",
          h3: "Low Cost Latest Invented Interior Designing <br />Ideas.",
          date: "22 December,2022"
        },
        {
          id: 3,
          img: "<img src='/site/images/articles (3).png' alt='img' class='articles__block__img'/>",
          p: "Interior Design",
          h3: "Best For Any Office & Business Interior <br />Solution",
          date: "25 December,2022"
        },
        {
          id: 4,
          img: '<img src="/site/images/articles (4).png" alt="img" class= "articles__block__img"/>',
          p: "Kitchan Design",
          h3: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022"
        },
        {
          id: 5,
          img: '<img src="/site/images/articles (5).png" alt="img"class="articles__block__img"/>',

          p: "Living Design",
          h3: "Low Cost Latest Invented Interior Designing <br />Ideas.",
          date: "22 December,2022"
        },
        {
          id: 6,
          img: "<img src='/site/images/articles (6).png' alt='img' class='articles__block__img'/>",
          p: "Interior Design",
          h3: "Best For Any Office & Business Interior <br />Solution",
          date: "25 December,2022"
        },
      ],
    };
  },
  methods: {

  },
  template: `<div
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
</div>`
}