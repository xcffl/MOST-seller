<template>
  <v-container fluid grid-list-xl>
    <!-- <v-layout row wrap> -->

      <v-flex d-flex xs12 md90 >

        <v-card color="light-blue lighten-4"  height="60px">
          
          <v-toolbar color="indigo lighten-2" dark>

          <v-menu offset-y>
            <v-btn
              slot="activator"
              dark
              icon
            >
              <v-icon>list</v-icon>
            </v-btn>
            <v-list >
              
              <v-list-tile               
                v-for="(item, i) in labels"
                :key="i"
                @click=""
              >
                <v-list-tile-title>
                  {{item.name}}
                </v-list-tile-title>
              </v-list-tile>


            </v-list>
          </v-menu>
          
          <v-toolbar-title>商品类型</v-toolbar-title>

          <v-spacer></v-spacer>
          
          <v-toolbar-title>商品管理</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>print</v-icon>
            </v-btn>

            <v-btn icon @click=add_good>
              <v-icon>add</v-icon>
            </v-btn>

          </v-toolbar>
        </v-card>
      </v-flex>

   <v-layout row wrap>

      <v-flex v-for="item in items"
        :key="item.id" lg3>
        <v-card color="white" >
        
<!-- http://img5.imgtn.bdimg.com/it/u=529036927,1288602622&fm=200&gp=0.jpg -->
        <v-card-media :src="item.picture" height="200px" ></v-card-media>

        <v-card-title primary class="title blue-grey--text text--darken-3">{{item.title}}</v-card-title>

        <v-card-title primary class="title blue-grey--text text--darken-3">份数：23/{{item.number}}</v-card-title>

        <v-card-text primary class="title blue-grey--text text--darken-3">
          价格：{{item.price}}￥
        </v-card-text>

        <v-card-actions>
          <v-btn icon> <v-icon color="blue-grey darken-3">edit</v-icon> </v-btn>
          <v-btn icon> <v-icon color="blue-grey darken-3">delete</v-icon> </v-btn>
          <v-btn icon> <v-icon color="blue-grey darken-3">add</v-icon> </v-btn>
        </v-card-actions>

        </v-card>
        
      </v-flex>
      
    </v-layout>

  </v-container>
</template>



<script>
export default {
  data() {
    return {
      items: [
        // {
        //   id: "1",
        //   title: "肠粉",
        //   number: "142",
        //   price: "21",
        //   picture:
        //     "http://img5.imgtn.bdimg.com/it/u=529036927,1288602622&fm=200&gp=0.jpg"
        // },
      ],
      labels: [{ name: "套餐" }, { name: "饮料" }]
    };
  },

  created() {
    // page_index 一旦改变就触发 onPageChange 事件有点不妥，故加了这个变量做限制
    // this.onPageChangeLock = false;
    this.haha();
  },

  methods: {
    add_good(path) {
      this.$router.push({ path: "addgood" });
    },

    haha() {
      var that = this;
      var query = new this.$AV.Query("Trade_drink_food");
      query.include("words");
      query.descending("createdAt");
      query.find().then(function(products) {
        if (products) {
          products.forEach(element => {
            var product = element.attributes;
            product.createdAt = element.createdAt;
            that.items.push(product);
          });
          that.page_count = 1;
          that.loading = false;
        }
        console.log("nonthing here");
      });
      console.log(query);
    }
  }

  // created() {
  //   // page_index 一旦改变就触发 onPageChange 事件有点不妥，故加了这个变量做限制
  //   this.onPageChangeLock = false;
  //   this._fetchOrderList();
  // }
};
</script>
