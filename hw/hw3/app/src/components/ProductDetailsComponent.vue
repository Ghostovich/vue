<template>
  <div class="cart"  v-for="(item, index) in product" :key="index" >
     <p>
      {{item.name}} - {{item.price}} - 
     </p>
      <div v-if="item.available">
          <p>Available</p>
      </div>
      <div v-else>
        <p > Out of stock</p>  
      </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        product: [
          {
          name:'Пирожок',
          price:'1',
          available:'true',
        },
        {
          name:'Чикен бургер',
          price:'2',
          available:'false',
        },
        {
          name:'Капуста',
          price:'4',
          available:'true',
        }
      ],
      }
    
    },
    computed : {
      formattedPrice(){
        return this.price = this.price+"$";
      }
    },
  }
</script>

<style lang="scss" scoped>
.cart{
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 50px;

}
</style>