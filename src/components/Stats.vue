<script>
import store from "../store"

export default {
  name: "Stats",
  computed: {
    count: () => store.state.count
  }
}
</script>

<style>
.hover-light:hover {
  color: rgba(255, 255, 255, 0.4) !important;
}

.grabber {
  cursor: pointer !important;
}
</style>

<template>
  <div class="flex-grow-1 py-5 px-4 d-flex flex-column justify-content-end">
    <div class="flex-grow-1 w-100 mb-4 border-bottom border-light-blue">
      <p class="fs-6 mb-1 text-secondary">Inventory</p>
      <div class="mb-3">
        <a class="link-secondary grabber fs-tiny me-3">Consumables</a>
        <a class="link-secondary grabber fs-tiny me-3">Weapons</a>
        <a class="link-secondary grabber fs-tiny me-3">Armours</a>
      </div>
      <div class="w-100 h-75 position-relative overflow-y-scroll">
        <table class="position-absolute table-dark w-100 fs-tiny">
          <caption class="d-none">
            Inventory List
          </caption>
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Description</th>
              <th scope="col">Qty</th>
              <th scope="col">Stat</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apples</td>
              <td>An apple a day keeps the doctor away!</td>
              <td>3</td>
              <td class="text-warning">+10</td>
              <td>
                <em class="hover-light fas fa-plus"></em>
              </td>
            </tr>
            <tr>
              <td>Water</td>
              <td>A bit of h20 never hurt anyone.</td>
              <td>4</td>
              <td class="text-info">+40</td>
              <td>
                <em class="hover-light fas fa-plus"></em>
              </td>
            </tr>
            <tr>
              <td>Human Flesh</td>
              <td>Uhmm.. I'm not going to ask..</td>
              <td>1</td>
              <td class="text-warning">+5</td>
              <td>
                <em class="hover-light fas fa-plus"></em>
              </td>
            </tr>
            <tr>
              <td>Bandages</td>
              <td>Just what the doctor ordered.</td>
              <td>1</td>
              <td class="text-danger">+15</td>
              <td>
                <em class="hover-light fas fa-plus"></em>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="w-100 text-light fs-tiny">
      <div class="row">
        <p class="col">Attack <span class="text-secondary">30</span></p>
        <p class="col">Defence <span class="text-secondary">20</span></p>
        <p class="col">Weapon <span class="text-secondary">Fists</span></p>
        <p class="col">Armour <span class="text-secondary">Cloth</span></p>
      </div>
      <div class="row">
        <p class="col">Money: <span class="text-secondary">$150</span></p>
        <p class="col">Location: <span class="text-secondary">Teria</span></p>
        <p class="col">Quests: <span class="text-secondary">1/4</span></p>
        <p class="col">Players: <span class="text-secondary">3</span></p>
      </div>
    </div>

    <div class="w-100 d-flex flex-column">
      <div class="container-fluid p-0">
        <p class="fs-tiny m-0 text-light my-1">Thirst</p>
        <div class="progress" style="height: 7px">
          <div
            class="progress-bar bg-info"
            role="progressbar"
            :style="`width: 100%`"
            :aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      <div class="container-fluid p-0">
        <p class="fs-tiny m-0 text-light my-1 mt-2">Hunger</p>
        <div class="progress" style="height: 7px">
          <div
            class="progress-bar bg-warning"
            role="progressbar"
            :style="`width: 100%`"
            :aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      <div class="container-fluid p-0">
        <p class="fs-tiny m-0 text-light my-1 mt-2">Health</p>
        <div class="progress" style="height: 7px">
          <div
            class="progress-bar bg-danger"
            role="progressbar"
            :style="`width: 100%`"
            :aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
