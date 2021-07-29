<template>
  <div>
    <cart-list-item v-for="(item, index) in cartList" 
                    :key="index" 
                    :cartList="item" ></cart-list-item>

  </div>
</template>

<script>
  import CartListItem from "./CartListItem";

  export default {
    name: "CartList",
    components: {
      CartListItem,
   
    },
    computed: {
      cartList() {
        return this.$store.state.cartList
      }
    }
   
  }
</script>

<style scoped>

</style>