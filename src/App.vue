<script>
import Navbar from "./components/Navbar.vue"
import Chatbar from "./components/Chatbar.vue"
import Welcome from "./components/Welcome.vue"
import Map from "./components/Map.vue"
import Stats from "./components/Stats.vue"
import Terminal from "./components/Terminal.vue"
import Footer from "./components/Footer.vue"

import Menu from "./consts/constants.js"
import store from "./store/index.js"

export default {
  name: "App",
  components: {
    Navbar,
    Chatbar,
    Map,
    Stats,
    Terminal,
    Footer,
    Welcome
  },
  computed: {
    home: () => store.state.menu === Menu.HOME,
    about: () => store.state.menu === Menu.ABOUT,
    help: () => store.state.menu === Menu.HELP,
    started: () => store.state.started
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.text-blue {
  color: #6996c4;
}

.text-gray {
  color: rgba(255, 255, 255, 0.55);
}

.border-light-blue {
  border-color: #2c3e50 !important;
}

.fs-tiny {
  font-size: 0.75em !important;
}

.text-monospace {
  font-family: monospace !important;
  white-space: pre !important;
  font-size: 16px;
}

@keyframes slide-right {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: 1s slide-right;
}

/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #78879659 #212529;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #212529;
}

*::-webkit-scrollbar-thumb {
  background-color: #78879659;
  border-radius: 20px;
}
</style>
<style scoped>
.help-command {
  padding-left: 35px;
}
</style>

<template>
  <div
    class="container-fluid d-none d-lg-flex mx-auto p-5 vh-100 flex-column justify-content-between"
    id="app"
  >
    <Navbar />
    <div v-if="started && home" class="d-flex my-3 flex-grow-1 flex-column">
      <div
        class="d-flex flex-grow-1 border-top border-bottom border-light-blue"
      >
        <Chatbar />
        <div class="d-flex justify-content-between flex-grow-1">
          <Stats />
          <Map />
        </div>
      </div>
      <div class="py-5">
        <Terminal />
      </div>
    </div>

    <div v-if="about" class="d-flex my-3 flex-grow-1 flex-column">
      <div
        class="d-flex flex-grow-1 border-top border-bottom border-light-blue flex-column py-5 text-light align-items-center justify-content-center"
      >
        <h1 class="w-50">About</h1>
        <div class="mt-3 w-50 text-gray text-gray">
          <p>Hello Adventurers!</p>
          <p>
            This section will cover the background information regarding the
            origin of this project. If you'd like to learn about how to play the
            game, please visit the help section above.
          </p>
          <p>
            This project was originally created as part of my RMIT Associates
            Degree first year major assignment for the course Introduction to
            Programming.
          </p>
          <p>
            Initially the project was written in Java as a command line
            application, without any fancy graphics or a user interface. I've
            decided to challenge myself and deploy the project as a live
            multiplayer experience, allowing players to talk with one another
            and move about in the same world together.
          </p>
          <p>
            Currently, the projects front end is written in Javscript using the
            VueJS framework and is being deployed via AWS CloudFront. The
            backend has also been written in Javscript through NodeJS and is
            deployed using a docker image on a Heroku server.
          </p>
          <p>
            If you'd like to view the source code of the project, it can be
            found by clicking the Project tab in the navigation bar above.
          </p>
          <p>
            Otherwise if you would like to reach out to me, please feel free to
            shoot me a message on
            <a href="https://www.linkedin.com/in/arone-susau/" target="_blank"
              >LinkedIn</a
            >!
          </p>
        </div>
      </div>
    </div>

    <div v-if="help" class="d-flex my-3 flex-grow-1 flex-column">
      <div
        class="d-flex flex-grow-1 border-top border-bottom border-light-blue flex-column py-5 text-light align-items-center justify-content-center"
      >
        <h1 class="w-50">Help</h1>
        <div class="mt-3 w-50 text-gray text-gray">
          <p>
            The aim of the game is to visit each of the four territories
            {{/* eslint-disable-next-line */}}
            Venmark, Tirera, Silvos and Pure Paradise and complete each 
            {{/* eslint-disable-next-line */}}
            locations quest. Each quest will provide you with a set of choices 
            to make and the outcome of those choices will dictate the ending you
            recieve!
          </p>
          <p>
            To Active a quest, simply walk over the quest tile denoted as
            <span class="text-monospace objective">??</span>
          </p>
          <h4 class="text-white">Player Commands</h4>
          <p>
            All commands must be entered into the text field at the bottom of
            the screen.
          </p>
          <table class="table-dark my-4">
            <caption class="d-none">
              Player Commands
            </caption>
            <thead>
              <th scope="hd"></th>
              <th scope="hd"></th>
            </thead>
            <tbody>
              <tr>
                <td>Move North</td>
                <td class="help-command">W</td>
              </tr>
              <tr>
                <td>Move South</td>
                <td class="help-command">S</td>
              </tr>
              <tr>
                <td>Move East</td>
                <td class="help-command">A</td>
              </tr>
              <tr>
                <td>Move West</td>
                <td class="help-command">D</td>
              </tr>
            </tbody>
          </table>
          <h4 class="text-white">World Commands</h4>
          <p>Coming Soon</p>
        </div>
      </div>
    </div>

    <div v-else>
      <Welcome v-if="!started && home" />
    </div>
    <Footer />
  </div>
</template>
