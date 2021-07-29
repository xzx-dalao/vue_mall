<template>
  <div class="category">
    <nav-bar class="nav">
      <template v-slot:center>
        <div>
          购物街
        </div>
      </template>
    </nav-bar>

  <CategoryContent :sideNavList="sideNavList"
                     :cateContentList="cateContentList"
                     @indexChange="indexChange"/>

  
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'

  import CategoryContent from './childCompos/CategoryContent.vue'

  import { getCategory, getSubCategory } from '@/network/category'

  export default {
    name: "Category",
    components:{
      NavBar,
      CategoryContent,

    },
    data() {
      return {
        sideNavList: [],
        cateContentList: [],
        maitkey: 3627
      }
    },
    created() {
      getCategory().then(res => {
        // console.log(res);
        this.sideNavList = res.data.category.list
      }),
      getSubCategory(this.maitkey).then(res => {
        // console.log(res);
        this.cateContentList = res.data.list;
      })
    },
    methods: {
      indexChange(item) {
        this.maitkey = item.maitKey
        // console.log(this.maitkey);
        getSubCategory(this.maitkey).then(res => {
          // console.log(res);
          this.cateContentList = res.data.list;
        })
      }
    }
  }
</script>

<style scoped>
  .category {
    height: 100vh;
        position: relative;}
    .nav{
        background-color: var(--color-text);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
    
    /* 在使用浏览器原生滚动时，为了让导航不跟随一起滚动: */
    

</style>