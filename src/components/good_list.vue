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

              <v-btn icon>
                <v-icon>add</v-icon>
              </v-btn>

            </v-list>
          </v-menu>
          
          <v-toolbar-title>商品类型</v-toolbar-title>

          <v-spacer></v-spacer>
          
          <v-toolbar-title>商品管理</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>print</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>add</v-icon>
            </v-btn>

          </v-toolbar>
        </v-card>
      </v-flex>

   <v-layout row wrap>

      <v-flex v-for="item in items"
        :key="item.id" lg3>
        <v-card color="white" >
        

        <v-card-media src="http://img5.imgtn.bdimg.com/it/u=529036927,1288602622&fm=200&gp=0.jpg" height="200px" ></v-card-media>
        

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
        {
          id: "1",
          title: "肠粉",
          number: "142",
          price: "21",
          picture:
            "http://img5.imgtn.bdimg.com/it/u=529036927,1288602622&fm=200&gp=0.jpg"
        },
        {
          id: "2",
          title: "蛋炒饭",
          number: "142",
          price: "21",
          picture:
            "http://img5.imgtn.bdimg.com/it/u=529036927,1288602622&fm=200&gp=0.jpg"
        },
        {
          id: "3",
          title: "炸鸡",
          number: "142",
          price: "21",
          picture:
            "http://img5.imgtn.bdimg.com/it/u=529036927,1288602622&fm=200&gp=0.jpg"
        },
        {
          id: "4",
          title: "肠粉",
          number: "142",
          price: "21",
          picture:
            "http://img5.imgtn.bdimg.com/it/u=529036927,1288602622&fm=200&gp=0.jpg"
        }
      ],
      labels: [{ name: "套餐" }, { name: "饮料" }]
    };
  }
};
</script>
