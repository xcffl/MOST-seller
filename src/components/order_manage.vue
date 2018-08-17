<template>

  <v-layout row>
    <v-flex xs100 sm100 offset-sm>
      <v-card>
        <v-toolbar color="indigo lighten-2" dark>
        

        <v-tabs
      v-model="active"
      color="cyan"
      dark
      slider-color="yellow"
        >
        </v-tabs>

         <v-tab
        v-for="n in 3"
        :key="n"
        ripple
      >
        Item {{ n }}

      </v-tab>
          <!-- <v-btn-toggle v-model="text">
              <v-btn flat value="left">
                所有订单
              </v-btn>
              <v-btn flat value="center">
                已完成
              </v-btn>
              <v-btn flat value="right">
                进行中
              </v-btn>
              <v-btn flat value="right">
                已取消
              </v-btn>
          </v-btn-toggle>
 -->
          <v-spacer></v-spacer>
          
          <v-toolbar-title>订单管理</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>print</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>add</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list two-line subheader>
        
          <v-header inset>Today</v-header>
            <v-btn icon ripple>
              <v-icon color="grey lighten-1">clear</v-icon>
            </v-btn>

          <v-list-tile
            v-for="item in items"
            :key="item.title"           
            >
          
            <v-list-tile-avatar>
              <v-icon color="indigo lighten-1">fastfood</v-icon>
            </v-list-tile-avatar>
            

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.date }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ item.place }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.way }}</v-list-tile-title>
              <v-list-tile-sub-title>备注：{{ item.remark }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-icon color="indigo lighten-1">attach_money</v-icon>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.cost }}</v-list-tile-title>
            </v-list-tile-content>

            <v-btn icon ripple>            
              <v-icon color="indigo lighten-1">phone</v-icon>
            </v-btn>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.number }}</v-list-tile-title>
            </v-list-tile-content>

            <v-btn color="primary">接单</v-btn>
            <v-btn color="primary">拒单</v-btn>
            <v-btn color="primary">详细信息</v-btn>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">clear</v-icon>
              </v-btn>
            </v-list-tile-action>

          </v-list-tile>

          <v-divider inset></v-divider>

          <v-subheader inset>Before</v-subheader>
            <v-btn icon ripple>
              <v-icon color="grey lighten-1">clear</v-icon>
            </v-btn>

          <v-list-tile
            v-for="item in items2"
            :key="item.title"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <v-icon color="indigo lighten-1">fastfood</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.date }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ item.place }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.way }}</v-list-tile-title>
              <v-list-tile-sub-title>备注：{{ item.remark }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-icon color="indigo lighten-1">attach_money</v-icon>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.cost }}</v-list-tile-title>
            </v-list-tile-content>

            <v-btn icon ripple>            
              <v-icon color="indigo lighten-1">phone</v-icon>
            </v-btn>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.number }}</v-list-tile-title>
            </v-list-tile-content>



            <v-btn color="primary">接单</v-btn>
            <v-btn color="primary">拒单</v-btn>
            <v-btn color="primary">详细信息</v-btn>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">clear</v-icon>
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
  data() {
    return {
      items: [
        {
          title: "肠粉",
          date: "8:30, Jan 9, 2018",
          place: "上园",
          way: "立即配送",
          remark: "不放葱",
          cost: "28￥",
          number: "12344232976"
        },
        {
          title: "肠粉",
          date: "8:30, Jan 9, 2018",
          place: "上园",
          way: "4:30配送",
          cost: "28￥",
          number: "12344232976"
        },
        {
          title: "肠粉",
          date: "8:30, Jan 9, 2018",
          place: "上园",
          way: "6:00送达",
          cost: "28￥",
          number: "12344232976"
        },
        {
          title: "肠粉",
          date: "8:30, Jan 9, 2018",
          place: "上园",
          way: "立即配送",
          cost: "28￥",
          number: "12344232976"
        }
      ],
      items2: [
        {
          title: "肠粉",
          date: "8:30, Jan 9, 2018",
          place: "上园",
          way: "10:40配送",
          cost: "28￥",
          number: "12344232976"
        }
      ]
    };
  }
};
</script>