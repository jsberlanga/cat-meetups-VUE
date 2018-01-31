<template>
<v-content>
  <v-container>
    <v-layout row-wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-xs0 offset-sm1 offset-md2>
        <v-card color="pink accent-1">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  v-bind:src="meetup.imageUrl"
                  height="150px"
                ></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <div class="white--text mb-1"><h2>{{ meetup.title }}</h2></div>
                    <div>{{ meetup.date | date }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat
                  v-bind:to="`/meetups/${meetup.id}`">
                  <v-icon left light>arrow_forward</v-icon>
                  View Meetup</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </v-content>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    }
  }
};
</script>
