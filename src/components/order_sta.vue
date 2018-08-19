<template>
  <v-container fluid grid-list-md>
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
              
              <v-btn icon>
                <v-icon>add</v-icon>
              </v-btn>

            </v-list>
          </v-menu>

            <v-spacer></v-spacer>

          <v-toolbar-title >商品统计</v-toolbar-title>

            <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>print</v-icon>
          </v-btn>

          </v-toolbar>
          
        </v-card>

      </v-flex>

    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md3>
        <v-card color="white" dark>
          <v-card-title primary class="title">Lorem</v-card-title>
          <v-card-text>{{ lorem }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card color="indigo" dark>
              <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md2 child-flex>
        <v-card color="green lighten-2" dark>
          <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-card color="blue lighten-2" dark>
          <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
  })
};
</script>