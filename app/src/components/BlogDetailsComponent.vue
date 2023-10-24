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
      <div class="blogDetails__img__head"></div>
      <section id="app" class="blog center">
     <!-- <blogs></blogs> -->
     <div class="blog__article">
              <div v-for="detail in details" :key="details.tag">
                <h1 class="blog__article__heading">{{detail.h3}}</h1>
                <div v-html="detail.img"></div>
                <div class="blog__article__img__sub">
                  <p>{{detail.date}}</p>
                  <p>Interior / Home / Decore</p>
                </div>
                <div class="blog__article__discription">{{detail.p}}</div>
              </div>
              <div class="blog__article__separate">
                <p class="blog__article__separate__span">“</p>
                <p class="blog__article__separate__main">
                  The details are not the details. They make the design.
                </p>
              </div>
            </div>
            <div class="blog__tags">
                <h3 class="blog__tags__heading">Tags</h3>
                <div class="blog__tags__block">
                  <p class='blog__tag' @click='conclusionDetails("Kitchen")'>Kitchen</p>
                  <p class='blog__tag' @click='conclusionDetails("Bedroom")'>Bedroom</p>
                  <p class='blog__tag' @click='conclusionDetails("Building")'>Building</p>
                  <p class='blog__tag' @click='conclusionDetails("Architecture")'>Architecture</p>
                  <p class='blog__tag' @click='conclusionDetails("Kitchen Planning")'>Kitchen Planning</p>
                  <p class='blog__tag' @click='conclusionDetails("Bedroom")'>Bedroom</p>
                </div>
            </div>
      </section>
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
      detailsOld: [
        {
          tag: "Kitchen",
          img: '<img src="@/assets/images/articles (1).png" alt="img" class= "blog__article__img"/>',
          p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis       deleniti vero omnis numquam sunt sapiente distinctio doloremque recusandae, sed          corporis laboriosam dicta? Amet labore mollitia rem aliquam ullam, nisi fugiat          est facilis omnis delectus nobis aut obcaecati reiciendis itaque, esse, autem          quam excepturi saepe dolorem repellat quia! Incidunt, quo excepturi nam porro          ipsam esse consectetur et, facere amet quidem ut sit omnis animi nemo praesentium labore possimus cum enim? Doloremque necessitatibus distinctio amet ecusandae id. Quaerat corporis voluptatum nam! Dolorum, porro tempora. Dicta delectus, aperiam totam placeat ipsa perferendis, officiis, voluptatibus hic harum dolor in at eum repellat maxime? ",
          h3: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022"
        },
        {
          tag: "Kitchen",
          img: '<img src="@/assets/images/articles (2).png" alt="img"class="blog__article__img"/>',
          p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nam distinctio sunt maxime iusto ea nulla excepturi, quibusdam culpa. Dolorum culpa maxime, nam possimus ut nihil alias qui fugiat ero? Sapiente ab sequi iste ad delectus pariatur quo accusamus quia perferendis, eligendi quasi incidunt totam est deserunt itaque iusto quod? Totam          illum fugit aspernatur repellendus rerum nemo tempore quam adipisci, nostrum          maiores aliquam similique consequatur rem reprehenderit, corrupti atque sint eius quis harum hic. Repudiandae tenetur aut facere quo cupiditate, magni aeaque aspernatur. Modi, commodi quo quae, error nesciunt voluptates id, atque alias vitae et voluptate. Quos voluptates pariatur eligendi ipsam rem veritatis, odio molestias! Harum nemo aliquam at veritatis nam molestiae odio pariatur esse culpa fugiat iusto ipsam aspernatur vitae, excepturi libero saepe distinctio et blanditiis nisi similique est deleniti, amet magni! Debitis earum, ratione repellendus sequi in, fuga eius temporibus repudiandae vel corrupti quibusdam? Praesentium, expedita laborum!",
          h3: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022"
        },
        {
          tag: "Bedroom",
          img: "<img src='@/assets/images/articles (3).png' alt='img' class='blog__article__img'/>",
          p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nam distinctio sunt maxime iusto ea nulla excepturi, quibusdam culpa. Dolorum culpa maxime, nam possimus ut nihil alias qui fugiat ero? Sapiente ab sequi iste ad delectus pariatur quo accusamus quia perferendis, eligendi quasi incidunt totam est deserunt itaque iusto quod? Totam          illum fugit aspernatur repellendus rerum nemo tempore quam adipisci, nostrum          maiores aliquam similique consequatur rem reprehenderit, corrupti atque sint eius quis harum hic. Repudiandae tenetur aut facere quo cupiditate, magni aeaque aspernatur. Modi, commodi quo quae, error nesciunt voluptates id, atque alias vitae et voluptate. Quos voluptates pariatur eligendi ipsam rem veritatis, odio molestias! Harum nemo aliquam at veritatis nam molestiae odio pariatur esse culpa fugiat iusto ipsam aspernatur vitae, excepturi libero saepe distinctio et blanditiis nisi similique est deleniti, amet magni! Debitis earum, ratione repellendus sequi in, fuga eius temporibus repudiandae vel corrupti quibusdam? Praesentium, expedita laborum!",
          h3: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022"
        },
        {
          tag: "Bedroom",
          img: '<img src="@/assets/images/articles (4).png" alt="img" class= "blog__article__img"/>',
          p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis       deleniti vero omnis numquam sunt sapiente distinctio doloremque recusandae, sed          corporis laboriosam dicta? Amet labore mollitia rem aliquam ullam, nisi fugiat          est facilis omnis delectus nobis aut obcaecati reiciendis itaque, esse, autem          quam excepturi saepe dolorem repellat quia! Incidunt, quo excepturi nam porro          ipsam esse consectetur et, facere amet quidem ut sit omnis animi nemo praesentium labore possimus cum enim? Doloremque necessitatibus distinctio amet ecusandae id. Quaerat corporis voluptatum nam! Dolorum, porro tempora. Dicta delectus, aperiam totam placeat ipsa perferendis, officiis, voluptatibus hic harum dolor in at eum repellat maxime? ",
          h3: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022"
        },
        {
          tag: "Building",
          img: '<img src="@/assets/images/articles (5).png" alt="img"class="blog__article__img"/>',

          p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nam distinctio sunt maxime iusto ea nulla excepturi, quibusdam culpa. Dolorum culpa maxime, nam possimus ut nihil alias qui fugiat ero? Sapiente ab sequi iste ad delectus pariatur quo accusamus quia perferendis, eligendi quasi incidunt totam est deserunt itaque iusto quod? Totam          illum fugit aspernatur repellendus rerum nemo tempore quam adipisci, nostrum          maiores aliquam similique consequatur rem reprehenderit, corrupti atque sint eius quis harum hic. Repudiandae tenetur aut facere quo cupiditate, magni aeaque aspernatur. Modi, commodi quo quae, error nesciunt voluptates id, atque alias vitae et voluptate. Quos voluptates pariatur eligendi ipsam rem veritatis, odio molestias! Harum nemo aliquam at veritatis nam molestiae odio pariatur esse culpa fugiat iusto ipsam aspernatur vitae, excepturi libero saepe distinctio et blanditiis nisi similique est deleniti, amet magni! Debitis earum, ratione repellendus sequi in, fuga eius temporibus repudiandae vel corrupti quibusdam? Praesentium, expedita laborum!",
          h3: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022"
        },
        {
          tag: "Building",
          img: "<img src='@/assets/images/articles (6).png' alt='img' class='blog__article__img'/>",
          p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nam distinctio sunt maxime iusto ea nulla excepturi, quibusdam culpa. Dolorum culpa maxime, nam possimus ut nihil alias qui fugiat ero? Sapiente ab sequi iste ad delectus pariatur quo accusamus quia perferendis, eligendi quasi incidunt totam est deserunt itaque iusto quod? Totam          illum fugit aspernatur repellendus rerum nemo tempore quam adipisci, nostrum          maiores aliquam similique consequatur rem reprehenderit, corrupti atque sint eius quis harum hic. Repudiandae tenetur aut facere quo cupiditate, magni aeaque aspernatur. Modi, commodi quo quae, error nesciunt voluptates id, atque alias vitae et voluptate. Quos voluptates pariatur eligendi ipsam rem veritatis, odio molestias! Harum nemo aliquam at veritatis nam molestiae odio pariatur esse culpa fugiat iusto ipsam aspernatur vitae, excepturi libero saepe distinctio et blanditiis nisi similique est deleniti, amet magni! Debitis earum, ratione repellendus sequi in, fuga eius temporibus repudiandae vel corrupti quibusdam? Praesentium, expedita laborum!",
          h3: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022"
        }, {
          tag: "Architecture",
          img: '<img src="@/assets/images/articles (1).png" alt="img" class= "blog__article__img"/>',
          p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nam distinctio sunt maxime iusto ea nulla excepturi, quibusdam culpa. Dolorum culpa maxime, nam possimus ut nihil alias qui fugiat ero? Sapiente ab sequi iste ad delectus pariatur quo accusamus quia perferendis, eligendi quasi incidunt totam est deserunt itaque iusto quod? Totam          illum fugit aspernatur repellendus rerum nemo tempore quam adipisci, nostrum          maiores aliquam similique consequatur rem reprehenderit, corrupti atque sint eius quis harum hic. Repudiandae tenetur aut facere quo cupiditate, magni aeaque aspernatur. Modi, commodi quo quae, error nesciunt voluptates id, atque alias vitae et voluptate. Quos voluptates pariatur eligendi ipsam rem veritatis, odio molestias! Harum nemo aliquam at veritatis nam molestiae odio pariatur esse culpa fugiat iusto ipsam aspernatur vitae, excepturi libero saepe distinctio et blanditiis nisi similique est deleniti, amet magni! Debitis earum, ratione repellendus sequi in, fuga eius temporibus repudiandae vel corrupti quibusdam? Praesentium, expedita laborum!",
          h3: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022"
        },
        {
          tag: "Architecture",
          img: '<img src="@/assets/images/articles (2).png" alt="img"class="blog__article__img"/>',
          p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis       deleniti vero omnis numquam sunt sapiente distinctio doloremque recusandae, sed          corporis laboriosam dicta? Amet labore mollitia rem aliquam ullam, nisi fugiat          est facilis omnis delectus nobis aut obcaecati reiciendis itaque, esse, autem          quam excepturi saepe dolorem repellat quia! Incidunt, quo excepturi nam porro          ipsam esse consectetur et, facere amet quidem ut sit omnis animi nemo praesentium labore possimus cum enim? Doloremque necessitatibus distinctio amet ecusandae id. Quaerat corporis voluptatum nam! Dolorum, porro tempora. Dicta delectus, aperiam totam placeat ipsa perferendis, officiis, voluptatibus hic harum dolor in at eum repellat maxime? ",
          h3: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022"
        },
        {
          tag: "Kitchen Planning",
          img: "<img src='@/assets/images/articles (3).png' alt='img' class='blog__article__img'/>",
          p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nam distinctio sunt maxime iusto ea nulla excepturi, quibusdam culpa. Dolorum culpa maxime, nam possimus ut nihil alias qui fugiat ero? Sapiente ab sequi iste ad delectus pariatur quo accusamus quia perferendis, eligendi quasi incidunt totam est deserunt itaque iusto quod? Totam          illum fugit aspernatur repellendus rerum nemo tempore quam adipisci, nostrum          maiores aliquam similique consequatur rem reprehenderit, corrupti atque sint eius quis harum hic. Repudiandae tenetur aut facere quo cupiditate, magni aeaque aspernatur. Modi, commodi quo quae, error nesciunt voluptates id, atque alias vitae et voluptate. Quos voluptates pariatur eligendi ipsam rem veritatis, odio molestias! Harum nemo aliquam at veritatis nam molestiae odio pariatur esse culpa fugiat iusto ipsam aspernatur vitae, excepturi libero saepe distinctio et blanditiis nisi similique est deleniti, amet magni! Debitis earum, ratione repellendus sequi in, fuga eius temporibus repudiandae vel corrupti quibusdam? Praesentium, expedita laborum!",
          h3: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022"
        },
        {
          tag: "Kitchen Planning",
          img: '<img src="@/assets/images/articles (4).png" alt="img" class= "blog__article__img"/>',
          p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis       deleniti vero omnis numquam sunt sapiente distinctio doloremque recusandae, sed          corporis laboriosam dicta? Amet labore mollitia rem aliquam ullam, nisi fugiat          est facilis omnis delectus nobis aut obcaecati reiciendis itaque, esse, autem          quam excepturi saepe dolorem repellat quia! Incidunt, quo excepturi nam porro          ipsam esse consectetur et, facere amet quidem ut sit omnis animi nemo praesentium labore possimus cum enim? Doloremque necessitatibus distinctio amet ecusandae id. Quaerat corporis voluptatum nam! Dolorum, porro tempora. Dicta delectus, aperiam totam placeat ipsa perferendis, officiis, voluptatibus hic harum dolor in at eum repellat maxime? ",
          h3: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022"
        },
        {
          tag: "Bedroom",
          img: '<img src="@/assets/images/articles (5).png" alt="img"class="blog__article__img"/>',
          p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nam distinctio sunt maxime iusto ea nulla excepturi, quibusdam culpa. Dolorum culpa maxime, nam possimus ut nihil alias qui fugiat ero? Sapiente ab sequi iste ad delectus pariatur quo accusamus quia perferendis, eligendi quasi incidunt totam est deserunt itaque iusto quod? Totam          illum fugit aspernatur repellendus rerum nemo tempore quam adipisci, nostrum          maiores aliquam similique consequatur rem reprehenderit, corrupti atque sint eius quis harum hic. Repudiandae tenetur aut facere quo cupiditate, magni aeaque aspernatur. Modi, commodi quo quae, error nesciunt voluptates id, atque alias vitae et voluptate. Quos voluptates pariatur eligendi ipsam rem veritatis, odio molestias! Harum nemo aliquam at veritatis nam molestiae odio pariatur esse culpa fugiat iusto ipsam aspernatur vitae, excepturi libero saepe distinctio et blanditiis nisi similique est deleniti, amet magni! Debitis earum, ratione repellendus sequi in, fuga eius temporibus repudiandae vel corrupti quibusdam? Praesentium, expedita laborum!",
          h3: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022"
        },
        {
          tag: "Bedroom",
          img: "<img src='/assets/images/articles (6).png' alt='img' class='blog__article__img'/>",
          p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis       deleniti vero omnis numquam sunt sapiente distinctio doloremque recusandae, sed          corporis laboriosam dicta? Amet labore mollitia rem aliquam ullam, nisi fugiat          est facilis omnis delectus nobis aut obcaecati reiciendis itaque, esse, autem          quam excepturi saepe dolorem repellat quia! Incidunt, quo excepturi nam porro          ipsam esse consectetur et, facere amet quidem ut sit omnis animi nemo praesentium labore possimus cum enim? Doloremque necessitatibus distinctio amet ecusandae id. Quaerat corporis voluptatum nam! Dolorum, porro tempora. Dicta delectus, aperiam totam placeat ipsa perferendis, officiis, voluptatibus hic harum dolor in at eum repellat maxime? ",
          h3: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022"
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