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
          <div v-for="detail in details" :key="details.tag" class="project__block__alone" @dblclick="like">
            <div lass="project__block__img__full">

              <img :src="detail.img" alt="img" class="project__block__img">
              <div class="project__block__img__star" v-if="showStar">

               <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                  <g filter="url(#filter0_d_993_142)">
                    <path d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z" fill="#FFA928"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_993_142" x="0.186401" y="0.431458" width="35.6272" height="34.3619" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="4"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_993_142"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_993_142" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </div>
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
          img: require('@/assets/images/project (1).png'),
          p: 'Decor / Artchitecture',
          h3: "Minimal Bedroom",
        },
        {
          tag: "Kitchen",
          img: require('@/assets/images/project (2).png'),
          p: 'Decor / Artchitecture',
          h3: "Modern Bedroom",
        },
        {
          tag: "Kitchen",
          p:'Decor / Artchitecture',
          h3: "Classic Bedroom",
          img: require('@/assets/images/project (3).png'),
        },
        {
          tag: "Bed Room",
          p: 'Decor / Artchitecture',
          h3: "Minimal Bed Room",
          img: require('@/assets/images/project (4).png'),
        },
        {
          tag: "Bed Room",
          p:'Decor / Artchitecture',
          h3: "Modern Bed Room",
          img: require('@/assets/images/project (5).png'),
        },
        {
          tag: "Bed Room",
          p: 'Decor / Artchitecture',
          h3: "Classic Bed Room",
          img: require('@/assets/images/project (6).png'),
        },
        {
          tag: "Bathroom",
          p: 'Decor / Artchitecture',
          h3: "Classic Bethroom",
          img: require('@/assets/images/project (7).png'),
        },
        {
          tag: "Bathroom",
          p: 'Decor / Artchitecture',
          h3: "Minimal Bethroom",
          img: require('@/assets/images/project (8).png'),
        }, {
          tag: "Bathroom",
          p: 'Decor / Artchitecture',
          h3: "Modern Bethroom",
          img: require('@/assets/images/project (4).png'),
        },
        {
          tag: "Living Area",
          p: 'Decor / Artchitecture',
          h3: "Modern Living Area",
          img: require('@/assets/images/project (3).png'),
        },
        {
          tag: "Living Area",
          p: 'Decor / Artchitecture',
          h3: "Classic Living Area",
          img: require('@/assets/images/project (2).png'),
        },
        {
          tag: "Living Area",
          p: 'Decor / Artchitecture',
          h3: "Minimal Living Area",
          img: require('@/assets/images/project (1).png'),
        },
      ],
      details:[],
      showStar: false,
    };
  },
  methods: {
    conclusionDetails(tag) {
      this.details = this.detailsOld;
      this.details = this.details.filter(el => el.tag === tag);
    },
    like(){
      this.showStar = !this.showStar;
    }
  },
  }
</script>

<style lang="scss" scoped>

</style>