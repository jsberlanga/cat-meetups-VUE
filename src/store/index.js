import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl:
          "https://static.pexels.com/photos/669015/pexels-photo-669015.jpeg",
        id: "hardcodedId_1",
        title: "Meetup in Cat York",
        date: "2018-01-27"
      },
      {
        imageUrl:
          "https://static.pexels.com/photos/46024/pexels-photo-46024.jpeg",
        id: "hardcodedId_2",
        title: "Meetup in Cat Land",
        date: "2018-01-28"
      },
      {
        imageUrl:
          "https://static.pexels.com/photos/248280/pexels-photo-248280.jpeg",
        id: "hardcodedId_3",
        title: "Meetup in Cat Carpet",
        date: "2018-01-26"
      }
    ],
    user: {
      id: "exampleId_1",
      registeredMeetups: ["hardcodedId_3"]
    }
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
    }
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: "hardcodedId"
      };
      // Reach out to firebase and store it
      commit("createMeetup", meetup);
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date;
      });
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    loadedMeetup(state) {
      return meetupId => {
        return state.loadedMeetups.find(meetup => {
          return meetup.id === meetupId;
        });
      };
    }
  }
});
