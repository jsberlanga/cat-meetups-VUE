<template>
  <v-app>
    <v-navigation-drawer fixed temporary v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-if="userIsAuthenticated"
          @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer" class="whatever">CatMeetups</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}

        </v-btn>
        <v-btn
          v-if="userIsAuthenticated"
          flat
          @click="onLogout">
          <v-icon left dark>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- Dynamic Content goes here... -->
   <main>
     <router-view></router-view>
   </main>

   <v-footer class="white--text pa-1" color="secondary">
    <v-spacer></v-spacer>
    <div>Copyright © {{ new Date().getFullYear() }} CatMeetups</div>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false
    };
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "face", title: "Sign up", link: "/signup" },
        { icon: "lock_open", title: "Sign in", link: "/signin" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: "camera_front", title: "View Meetups", link: "/" },
          { icon: "room", title: "Organize Meetup", link: "/meetup/new" },
          { icon: "person", title: "Profile", link: "/profile" }
        ];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  },
  name: "App"
};
</script>

<style>
* {
  font-family: "Fira Sans";
}

.application.theme--light {
  background-color: #b0a18e;
background-image: url("https://www.transparenttextures.com/patterns/cream-paper.png");
}

.application .theme--light.card, .theme--light .card {
  background: #b0a18e
}

@media (max-width:600px) {
  .whatever {
  display: none
  }
}

</style>
