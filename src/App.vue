<template>
  <v-app>
    <v-parallax src="http://www.cuhk.edu.cn/sites/default/files/cuhk-content-type-show/cuhksz4_2.jpg" height="900">

      <v-menu offset-y>
            <v-btn
              slot="activator"
              dark
              icon
            >
              <v-icon>list</v-icon>
            </v-btn>
          <v-list>
        <v-list-tile
          value="true"
          @click="menuClicked(item.path)"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>

          </v-list-tile-content>
        </v-list-tile>
            </v-list>
      </v-menu>

    <v-content>
      <router-view/>
    </v-content>

    </v-parallax>
  </v-app>

</template>

<script>
export default {
  methods: {
    menuClicked(path) {
      this.$router.push({ path: path });
    }
  },

  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: true,
      items: [
        {
          icon: "bubble_chart",
          title: "MOST校园平台",
          path: "login"
        },
        {
          icon: "bubble_chart",
          title: "订单管理",
          path: "ordermanage"
        },
        {
          icon: "shop",
          title: "店铺管理",
          path: "goodlist"
        },
        {
          icon: "bubble_chart",
          title: "订单统计",
          path: "ordersta"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "MOST 校园平台"
    };
  },
  name: "App"
};
</script>
