<template>
  <v-layout row>
    <v-flex xs12 sm15 offset-sm0>
      <v-card>
        <v-card-media
          src="@/assets/"
          height="400px"
        >
          <v-layout
            column
            fill-height
          >
            <v-card-title>
              <v-btn dark icon>
                <v-icon>chevron_left</v-icon>
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn dark icon class="mr-3">
                <v-icon>edit</v-icon>
              </v-btn>

              <v-btn dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-title>

            <v-spacer></v-spacer>

            <v-card-title class="black--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">商品名称</div>
            </v-card-title>
          </v-layout>
        </v-card-media>

        <v-list two-line>
          <v-list-tile @click="">
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

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">attach_money</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>价格</v-list-tile-title>
              <v-list-tile-sub-title>Cost</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">star</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>销量</v-list-tile-title>
              <v-list-tile-sub-title>Sales Volume</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>


          <v-divider inset></v-divider>

          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>