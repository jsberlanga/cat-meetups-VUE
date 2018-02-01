<template>
  <v-dialog width="400px" persistent>
      <v-btn fab accent slot="activator">
          <v-icon>edit</v-icon>
      </v-btn>
      <v-card>
          <v-container>
              <v-layout row wrap>
                  <v-flex xs12>
                      <v-card-title>Edit Meetup</v-card-title>
                  </v-flex>
              </v-layout>
              <v-divider></v-divider>              
              <v-layout row wrap>
                  <v-flex xs12>
                      <v-card-text>
                        <v-text-field
                            name="title"
                            label="Title"
                            id="title"
                            v-model="title"
                            required>
                        </v-text-field>
                        <v-text-field
                            name="description"
                            label="Description"
                            id="description"
                            v-model="description"              
                            multi-line
                            required>
                        </v-text-field>
                      </v-card-text>
                  </v-flex>
              </v-layout>
              <v-divider></v-divider>
              <v-layout row wrap>
                  <v-flex xs12>
                      
                  </v-flex>
              </v-layout>
          </v-container>
      </v-card>
  </v-dialog>
</template>
