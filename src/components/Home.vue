<template>
<v-content>
  <v-container class="container">
    <v-layout row wrap class="mb-3">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="secondary">Explore All Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="secondary">Organize A Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
        indeterminate
        color="primary"
        :width="8"
        :size="100"
        v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2 mb-2" v-if="!loading">
      <v-flex xs12>
        <v-carousel style="cursor:pointer">
          <v-carousel-item 
          v-for="meetup in meetups" 
          v-bind:src="meetup.imageUrl" 
          :key="meetup.id"
          @click="onLoadMeetup(meetup.id)">
          <div class="title"><p>{{ meetup.title }}</p></div></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-5">
      <v-flex xs12 class="text-xs-center">
        <p class="heading">Join our Awesome Purrrrrrfect Meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
  </v-content>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.featuredMeetups;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push("/meetups/" + id);
    }
  }
};
</script>

<style scoped>
.title {
  position:absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  padding: 10px 0px 0px 0px;
  text-align: center;
}

.title p {
  font-size: 24px;
  opacity: 0.9;
  font-family: 'Stardos Stencil', cursive;
  padding-top: 10px;
}

.heading {
  font-size: 50px;
  color: #49412c;
  font-family:  'Stardos Stencil';
  font-weight: bold
}

</style>
