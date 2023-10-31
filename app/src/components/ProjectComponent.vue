<template>
  <div class="borders center">
      <div class="borders__block"></div>
      <div class="borders__block"></div>
      <div class="borders__block"></div>
  </div>
  <main>
    <div class="project">
      <section class="project__head center body">
        <div class="project__head__block">
            <div class="project__head__heading">Our Project</div>
            <div class="project__head__discription">Home / Project</div>
          </div>
      </section>
      <section class="project__blocks center body">
        <div class="project__tags">
            <p class='project__tag' @click='conclusionDetails("Bathroom")'>Bathroom</p>
            <p class='project__tag' @click='conclusionDetails("Bed Room")'>Bed Room</p>
            <p class='project__tag' @click='conclusionDetails("Kitchen")'>Kitchen</p>
            <p class='project__tag' @click='conclusionDetails("Living Area")'>Living Area</p>
        </div>
        <div class="project__block">
          <div v-for="detail in details" :key="details.tag">
            <div>
              <img :src="detail.img" alt="img" class="project__block__img">
            </div>
            <div class="project__block__text">
              <div>
                <h3 class="project__block__heading">{{detail.h3}}</h3>
                <div class="project__block__discription">{{detail.p}}</div>
              </div>
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
      <section class="project__buttons center body">
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
      detailsOld: [
        {
          tag: "Kitchen",
          img: '@/assets/images/articles (1).png',
          p: 'Decor / Artchitecture',
          h3: "Minimal Bedroom",
        },
        {
          tag: "Kitchen",
          img: '@/assets/images/articles (1).png',
          p: 'Decor / Artchitecture',
          h3: "Modern Bedroom",
        },
        {
          tag: "Kitchen",
          p:'Decor / Artchitecture',
          h3: "Classic Bedroom",
          img: '@/assets/images/articles (1).png',
        },
        {
          tag: "Bed Room",
          p: 'Decor / Artchitecture',
          h3: "Minimal Bed Room",
          img: '@/assets/images/articles (1).png',
        },
        {
          tag: "Bed Room",
          p:'Decor / Artchitecture',
          h3: "Modern Bed Room",
          img: '@/assets/images/articles (1).png',
        },
        {
          tag: "Bed Room",
          p: 'Decor / Artchitecture',
          h3: "Classic Bed Room",
          img: '@/assets/images/articles (1).png',
        },
        {
          tag: "Bathroom",
          p: 'Decor / Artchitecture',
          h3: "Classic Bethroom",
          img: '@/assets/images/articles (1).png',
        },
        {
          tag: "Bathroom",
          p: 'Decor / Artchitecture',
          h3: "Minimal Bethroom",
          img: '@/assets/images/articles (1).png',
        }, {
          tag: "Bathroom",
          p: 'Decor / Artchitecture',
          h3: "Modern Bethroom",
          img: '@/assets/images/articles (1).png',
        },
        {
          tag: "Living Area",
          p: 'Decor / Artchitecture',
          h3: "Modern Living Area",
          img: '@/assets/images/articles (1).png',
        },
        {
          tag: "Living Area",
          p: 'Decor / Artchitecture',
          h3: "Classic Living Area",
          img: '@/assets/images/articles (1).png',
        },
        {
          tag: "Living Area",
          p: 'Decor / Artchitecture',
          h3: "Minimal Living Area",
          img: '@/assets/images/articles (1).png',
        },
      ],
      details:[]
    };
  },
  methods: {
    conclusionDetails(tag) {
      this.details = this.detailsOld;
      this.details = this.details.filter(el => el.tag === tag);
    }
  },
  }
</script>

<style lang="scss" scoped>

</style>