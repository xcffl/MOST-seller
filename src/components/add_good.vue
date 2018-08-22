<template>
  <v-layout row>
    <v-flex xs12 sm15 offset-sm0>
      <v-card>
        <v-card-media
          src="http://img5.imgtn.bdimg.com/it/u=529036927,1288602622&fm=200&gp=0.jpg"
          height="400px"
        >
          <v-layout
            column
            fill-height
          >
            <v-card-title>
              <v-btn dark icon @click=return_list>
                <v-icon color='black'>chevron_left</v-icon>
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn dark icon class="mr-3">
                <v-icon color="black" @click=test>save</v-icon>
              </v-btn>

              <v-btn dark icon>
                <v-icon color="black">more_vert</v-icon>
              </v-btn>
            </v-card-title>

            <v-spacer></v-spacer>

            <v-card-title class="black--text pl-5 pt-5">
              <div class="display-1">编辑商品名称</div>
              <v-btn dark icon class="mr-3">
                <v-icon color="indigo">edit</v-icon>
              </v-btn>

            </v-card-title>
          </v-layout>
        </v-card-media>

        <v-list two-line>

          <v-list-tile @click="TODO">
            <v-list-tile-action>
              <v-icon color="indigo">fastfood</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>原料</v-list-tile-title>
              <v-list-tile-sub-title>Material</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>bookmark</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile @click="TODO">
            <v-list-tile-action>
              <v-icon color="indigo">label</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>类别</v-list-tile-title>
              <v-list-tile-sub-title>Material</v-list-tile-sub-title>
            </v-list-tile-content>

          </v-list-tile>

          <v-list-tile @click="TODO">
            <v-list-tile-action>
              <v-icon color="indigo">attach_money</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>价格</v-list-tile-title>
              <v-list-tile-sub-title>Cost</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="TODO">
            <v-list-tile-action>
              <v-icon color="indigo">star</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>推荐指数</v-list-tile-title>
              <v-list-tile-sub-title>Recommendation Index</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>


          <v-divider inset></v-divider>

        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  methods: {
    return_list(path) {
      this.$router.push({ path: "goodlist" });
    },
    test() {
      var Product = this.$AV.Object.extend("TestObject");
      var product = new Product();

      product.set("words", "gewgew");

      product.save();
    }
  }

  //   data() {
  //     return {
  //       items: [
  //         {
  //           title: "肠粉",
  //           date: "8:30, Jan 9, 2018",
  //           place: "上园",
  //           way: "立即配送",
  //           remark: "不放葱",
  //           cost: "28￥",
  //           number: "12344232976"
  //         }
  //       ]
  //     };
  //   }
};

// product.set("price", 132);
// product.set("description", "description");
// product.set("owner", this.$AV.User.current());

// console.log("Add a product");
</script>