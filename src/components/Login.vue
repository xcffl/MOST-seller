<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs1 sm2 md3>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>Login form</v-toolbar-title>
                        </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    
                                <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                                <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                                </v-form>
                            </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer><v-btn color="primary">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
};
</script>
