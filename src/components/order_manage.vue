<template>
  <v-layout row>
    <v-flex xs100 sm100 offset-sm>
      <v-card>
        <v-toolbar color="light-blue" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-spacer></v-spacer><v-toolbar-title>订单管理(TODO 商品编辑)</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>view_module</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list two-line subheader>
          <v-subheader inset>Today</v-subheader>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click=""
          >
          
            <v-list-tile-avatar>
              <v-icon>fastfood</v-icon>
            </v-list-tile-avatar>
            

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ item.subtitles }}</v-list-tile-sub-title>

            </v-list-tile-content>
            <v-btn color="primary">接单</v-btn>
            <v-btn color="primary">取消</v-btn>
            <v-btn color="primary">详细信息</v-btn>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-subheader inset>Yesterday</v-subheader>

          <v-list-tile
            v-for="item in items2"
            :key="item.title"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <v-icon>fastfood</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ item.subtitles }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-btn color="primary">接单</v-btn>
            <v-btn color="primary">拒单</v-btn>
            <v-btn color="primary">详细信息</v-btn>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {title: '肠粉', subtitle: '8:30, Jan 9, 2018', subtitles:"上园"},
          {title: '干炒牛河', subtitle: '10:30, Jan 9, 2018', subtitles:"下园"},
          {title: '肠粉', subtitle: '8:30, Jan 9, 2018', subtitles:"上园"},
        ],
        items2: [
          {title: '炸鸡', subtitle: '9:37, Jan 8, 2018', subtitles:"上园"},
        ]
      }
    }
  }
</script>