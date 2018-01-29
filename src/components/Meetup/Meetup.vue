<template>
<v-content>
  <v-container>
      <v-layout row-wrap>
          <v-flex xs12>
              <v-card>
                  <v-card-title>
                      <h3 class="primary--text">{{ meetup.title }}</h3>
                  </v-card-title>
                  <v-card-media
                  :src="meetup.imageUrl"
                  height="400px"
                  ></v-card-media>
                  <v-card-text>
                      <div class="warning--text"> {{ meetup.date }} - New York</div>
                      <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur debitis corrupti, mollitia saepe magni sunt ipsum cum odio tempore. Animi eligendi consequatur temporibus maiores veniam, magnam id quibusdam iure ullam.</div>
                  </v-card-text>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="primary">Register</v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</v-content>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        meetup() {
            return this.$store.getters.loadedMeetup(this.id)
        }
    }
}
</script>
