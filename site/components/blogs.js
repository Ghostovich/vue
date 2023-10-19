const blogs = {
  data() {
    return {
      details: [
        {
          tag: "Kitchen",
          img: '<img src="/site/images/articles (1).png" alt="img" class= "blog__article__img"/>',
          p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis       deleniti vero omnis numquam sunt sapiente distinctio doloremque recusandae, sed          corporis laboriosam dicta? Amet labore mollitia rem aliquam ullam, nisi fugiat          est facilis omnis delectus nobis aut obcaecati reiciendis itaque, esse, autem          quam excepturi saepe dolorem repellat quia! Incidunt, quo excepturi nam porro          ipsam esse consectetur et, facere amet quidem ut sit omnis animi nemo praesentium labore possimus cum enim? Doloremque necessitatibus distinctio amet ecusandae id. Quaerat corporis voluptatum nam! Dolorum, porro tempora. Dicta delectus, aperiam totam placeat ipsa perferendis, officiis, voluptatibus hic harum dolor in at eum repellat maxime? ",
          h3: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022"
        },
        {
          tag: "Kitchen",
          img: '<img src="/site/images/articles (2).png" alt="img"class="blog__article__img"/>',
          p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nam distinctio sunt maxime iusto ea nulla excepturi, quibusdam culpa. Dolorum culpa maxime, nam possimus ut nihil alias qui fugiat ero? Sapiente ab sequi iste ad delectus pariatur quo accusamus quia perferendis, eligendi quasi incidunt totam est deserunt itaque iusto quod? Totam          illum fugit aspernatur repellendus rerum nemo tempore quam adipisci, nostrum          maiores aliquam similique consequatur rem reprehenderit, corrupti atque sint eius quis harum hic. Repudiandae tenetur aut facere quo cupiditate, magni aeaque aspernatur. Modi, commodi quo quae, error nesciunt voluptates id, atque alias vitae et voluptate. Quos voluptates pariatur eligendi ipsam rem veritatis, odio molestias! Harum nemo aliquam at veritatis nam molestiae odio pariatur esse culpa fugiat iusto ipsam aspernatur vitae, excepturi libero saepe distinctio et blanditiis nisi similique est deleniti, amet magni! Debitis earum, ratione repellendus sequi in, fuga eius temporibus repudiandae vel corrupti quibusdam? Praesentium, expedita laborum!",
          h3: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022"
        },
        {
          tag: "Bedroom",
          img: "<img src='/site/images/articles (3).png' alt='img' class='blog__article__img'/>",
          p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nam distinctio sunt maxime iusto ea nulla excepturi, quibusdam culpa. Dolorum culpa maxime, nam possimus ut nihil alias qui fugiat ero? Sapiente ab sequi iste ad delectus pariatur quo accusamus quia perferendis, eligendi quasi incidunt totam est deserunt itaque iusto quod? Totam          illum fugit aspernatur repellendus rerum nemo tempore quam adipisci, nostrum          maiores aliquam similique consequatur rem reprehenderit, corrupti atque sint eius quis harum hic. Repudiandae tenetur aut facere quo cupiditate, magni aeaque aspernatur. Modi, commodi quo quae, error nesciunt voluptates id, atque alias vitae et voluptate. Quos voluptates pariatur eligendi ipsam rem veritatis, odio molestias! Harum nemo aliquam at veritatis nam molestiae odio pariatur esse culpa fugiat iusto ipsam aspernatur vitae, excepturi libero saepe distinctio et blanditiis nisi similique est deleniti, amet magni! Debitis earum, ratione repellendus sequi in, fuga eius temporibus repudiandae vel corrupti quibusdam? Praesentium, expedita laborum!",
          h3: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022"
        },
        {
          tag: "Bedroom",
          img: '<img src="/site/images/articles (4).png" alt="img" class= "blog__article__img"/>',
          p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis       deleniti vero omnis numquam sunt sapiente distinctio doloremque recusandae, sed          corporis laboriosam dicta? Amet labore mollitia rem aliquam ullam, nisi fugiat          est facilis omnis delectus nobis aut obcaecati reiciendis itaque, esse, autem          quam excepturi saepe dolorem repellat quia! Incidunt, quo excepturi nam porro          ipsam esse consectetur et, facere amet quidem ut sit omnis animi nemo praesentium labore possimus cum enim? Doloremque necessitatibus distinctio amet ecusandae id. Quaerat corporis voluptatum nam! Dolorum, porro tempora. Dicta delectus, aperiam totam placeat ipsa perferendis, officiis, voluptatibus hic harum dolor in at eum repellat maxime? ",
          h3: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022"
        },
        {
          tag: "Building",
          img: '<img src="/site/images/articles (5).png" alt="img"class="blog__article__img"/>',

          p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nam distinctio sunt maxime iusto ea nulla excepturi, quibusdam culpa. Dolorum culpa maxime, nam possimus ut nihil alias qui fugiat ero? Sapiente ab sequi iste ad delectus pariatur quo accusamus quia perferendis, eligendi quasi incidunt totam est deserunt itaque iusto quod? Totam          illum fugit aspernatur repellendus rerum nemo tempore quam adipisci, nostrum          maiores aliquam similique consequatur rem reprehenderit, corrupti atque sint eius quis harum hic. Repudiandae tenetur aut facere quo cupiditate, magni aeaque aspernatur. Modi, commodi quo quae, error nesciunt voluptates id, atque alias vitae et voluptate. Quos voluptates pariatur eligendi ipsam rem veritatis, odio molestias! Harum nemo aliquam at veritatis nam molestiae odio pariatur esse culpa fugiat iusto ipsam aspernatur vitae, excepturi libero saepe distinctio et blanditiis nisi similique est deleniti, amet magni! Debitis earum, ratione repellendus sequi in, fuga eius temporibus repudiandae vel corrupti quibusdam? Praesentium, expedita laborum!",
          h3: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022"
        },
        {
          tag: "Building",
          img: "<img src='/site/images/articles (6).png' alt='img' class='blog__article__img'/>",
          p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nam distinctio sunt maxime iusto ea nulla excepturi, quibusdam culpa. Dolorum culpa maxime, nam possimus ut nihil alias qui fugiat ero? Sapiente ab sequi iste ad delectus pariatur quo accusamus quia perferendis, eligendi quasi incidunt totam est deserunt itaque iusto quod? Totam          illum fugit aspernatur repellendus rerum nemo tempore quam adipisci, nostrum          maiores aliquam similique consequatur rem reprehenderit, corrupti atque sint eius quis harum hic. Repudiandae tenetur aut facere quo cupiditate, magni aeaque aspernatur. Modi, commodi quo quae, error nesciunt voluptates id, atque alias vitae et voluptate. Quos voluptates pariatur eligendi ipsam rem veritatis, odio molestias! Harum nemo aliquam at veritatis nam molestiae odio pariatur esse culpa fugiat iusto ipsam aspernatur vitae, excepturi libero saepe distinctio et blanditiis nisi similique est deleniti, amet magni! Debitis earum, ratione repellendus sequi in, fuga eius temporibus repudiandae vel corrupti quibusdam? Praesentium, expedita laborum!",
          h3: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022"
        }, {
          tag: "Architecture",
          img: '<img src="/site/images/articles (1).png" alt="img" class= "blog__article__img"/>',
          p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nam distinctio sunt maxime iusto ea nulla excepturi, quibusdam culpa. Dolorum culpa maxime, nam possimus ut nihil alias qui fugiat ero? Sapiente ab sequi iste ad delectus pariatur quo accusamus quia perferendis, eligendi quasi incidunt totam est deserunt itaque iusto quod? Totam          illum fugit aspernatur repellendus rerum nemo tempore quam adipisci, nostrum          maiores aliquam similique consequatur rem reprehenderit, corrupti atque sint eius quis harum hic. Repudiandae tenetur aut facere quo cupiditate, magni aeaque aspernatur. Modi, commodi quo quae, error nesciunt voluptates id, atque alias vitae et voluptate. Quos voluptates pariatur eligendi ipsam rem veritatis, odio molestias! Harum nemo aliquam at veritatis nam molestiae odio pariatur esse culpa fugiat iusto ipsam aspernatur vitae, excepturi libero saepe distinctio et blanditiis nisi similique est deleniti, amet magni! Debitis earum, ratione repellendus sequi in, fuga eius temporibus repudiandae vel corrupti quibusdam? Praesentium, expedita laborum!",
          h3: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022"
        },
        {
          tag: "Architecture",
          img: '<img src="/site/images/articles (2).png" alt="img"class="blog__article__img"/>',
          p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis       deleniti vero omnis numquam sunt sapiente distinctio doloremque recusandae, sed          corporis laboriosam dicta? Amet labore mollitia rem aliquam ullam, nisi fugiat          est facilis omnis delectus nobis aut obcaecati reiciendis itaque, esse, autem          quam excepturi saepe dolorem repellat quia! Incidunt, quo excepturi nam porro          ipsam esse consectetur et, facere amet quidem ut sit omnis animi nemo praesentium labore possimus cum enim? Doloremque necessitatibus distinctio amet ecusandae id. Quaerat corporis voluptatum nam! Dolorum, porro tempora. Dicta delectus, aperiam totam placeat ipsa perferendis, officiis, voluptatibus hic harum dolor in at eum repellat maxime? ",
          h3: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022"
        },
        {
          tag: "Kitchen Planning",
          img: "<img src='/site/images/articles (3).png' alt='img' class='blog__article__img'/>",
          p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nam distinctio sunt maxime iusto ea nulla excepturi, quibusdam culpa. Dolorum culpa maxime, nam possimus ut nihil alias qui fugiat ero? Sapiente ab sequi iste ad delectus pariatur quo accusamus quia perferendis, eligendi quasi incidunt totam est deserunt itaque iusto quod? Totam          illum fugit aspernatur repellendus rerum nemo tempore quam adipisci, nostrum          maiores aliquam similique consequatur rem reprehenderit, corrupti atque sint eius quis harum hic. Repudiandae tenetur aut facere quo cupiditate, magni aeaque aspernatur. Modi, commodi quo quae, error nesciunt voluptates id, atque alias vitae et voluptate. Quos voluptates pariatur eligendi ipsam rem veritatis, odio molestias! Harum nemo aliquam at veritatis nam molestiae odio pariatur esse culpa fugiat iusto ipsam aspernatur vitae, excepturi libero saepe distinctio et blanditiis nisi similique est deleniti, amet magni! Debitis earum, ratione repellendus sequi in, fuga eius temporibus repudiandae vel corrupti quibusdam? Praesentium, expedita laborum!",
          h3: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022"
        },
        {
          tag: "Kitchen Planning",
          img: '<img src="/site/images/articles (4).png" alt="img" class= "blog__article__img"/>',
          p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis       deleniti vero omnis numquam sunt sapiente distinctio doloremque recusandae, sed          corporis laboriosam dicta? Amet labore mollitia rem aliquam ullam, nisi fugiat          est facilis omnis delectus nobis aut obcaecati reiciendis itaque, esse, autem          quam excepturi saepe dolorem repellat quia! Incidunt, quo excepturi nam porro          ipsam esse consectetur et, facere amet quidem ut sit omnis animi nemo praesentium labore possimus cum enim? Doloremque necessitatibus distinctio amet ecusandae id. Quaerat corporis voluptatum nam! Dolorum, porro tempora. Dicta delectus, aperiam totam placeat ipsa perferendis, officiis, voluptatibus hic harum dolor in at eum repellat maxime? ",
          h3: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022"
        },
        {
          tag: "Bedroom",
          img: '<img src="/site/images/articles (5).png" alt="img"class="blog__article__img"/>',
          p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nam distinctio sunt maxime iusto ea nulla excepturi, quibusdam culpa. Dolorum culpa maxime, nam possimus ut nihil alias qui fugiat ero? Sapiente ab sequi iste ad delectus pariatur quo accusamus quia perferendis, eligendi quasi incidunt totam est deserunt itaque iusto quod? Totam          illum fugit aspernatur repellendus rerum nemo tempore quam adipisci, nostrum          maiores aliquam similique consequatur rem reprehenderit, corrupti atque sint eius quis harum hic. Repudiandae tenetur aut facere quo cupiditate, magni aeaque aspernatur. Modi, commodi quo quae, error nesciunt voluptates id, atque alias vitae et voluptate. Quos voluptates pariatur eligendi ipsam rem veritatis, odio molestias! Harum nemo aliquam at veritatis nam molestiae odio pariatur esse culpa fugiat iusto ipsam aspernatur vitae, excepturi libero saepe distinctio et blanditiis nisi similique est deleniti, amet magni! Debitis earum, ratione repellendus sequi in, fuga eius temporibus repudiandae vel corrupti quibusdam? Praesentium, expedita laborum!",
          h3: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022"
        },
        {
          tag: "Bedroom",
          img: "<img src='/site/images/articles (6).png' alt='img' class='blog__article__img'/>",
          p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis       deleniti vero omnis numquam sunt sapiente distinctio doloremque recusandae, sed          corporis laboriosam dicta? Amet labore mollitia rem aliquam ullam, nisi fugiat          est facilis omnis delectus nobis aut obcaecati reiciendis itaque, esse, autem          quam excepturi saepe dolorem repellat quia! Incidunt, quo excepturi nam porro          ipsam esse consectetur et, facere amet quidem ut sit omnis animi nemo praesentium labore possimus cum enim? Doloremque necessitatibus distinctio amet ecusandae id. Quaerat corporis voluptatum nam! Dolorum, porro tempora. Dicta delectus, aperiam totam placeat ipsa perferendis, officiis, voluptatibus hic harum dolor in at eum repellat maxime? ",
          h3: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022"
        },
      ],
    };
  },
  methods: {
    conclusionDetails(tag) {
          this.details = this.details.filter(el => el.tag === tag);
    }
  },
  template: `<div v-for="detail in details" :key="details.tag">
  <h1 class="blog__article__heading">
  {{detail.h3}}
</h1>
<div v-html="detail.img"></div>
<div class="blog__article__img__sub">
  <p>{{detail.date}}</p>
  <p>Interior / Home / Decore</p>
</div>
<div class="blog__article__discription">
  {{detail.p}}
  </div>
  </div>`
}
