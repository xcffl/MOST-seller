<template>
  <v-app>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="900">
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
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

    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
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
          title: "订单统计"
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
