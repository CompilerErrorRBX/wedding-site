<template>
  <v-app id="app">
    <v-card height="160px">
      <div
        class="fancy-title grey--text text--darken-2"
      >
        <div class="title-section right" :class="{ mobile: $vuetify.breakpoint.xsOnly }">
          <div class="main-text">Natalie</div>
          <div class="small">Garrison</div>
        </div>
        <div class="title-separator" :class="{ mobile: $vuetify.breakpoint.xsOnly }">
          <div>&</div>
        </div>
        <div class="title-section" :class="{ mobile: $vuetify.breakpoint.xsOnly }">
          <div class="main-text">Stephen</div>
          <div class="small">Martin</div>
        </div>
      </div>
    </v-card>
    <v-toolbar height="72px" class="toolbar-center" dense>
      <v-toolbar-items>
        <v-btn class="subheading" to="/" flat>Home</v-btn>
        <v-btn class="subheading" to="/rsvp" flat>RSVP</v-btn>
        <v-btn class="subheading" to="/registries" flat>Registry</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view/>
  </v-app>
</template>

<style lang="scss">
  .toolbar-center .v-toolbar__content {
    align-items: center;
    justify-content: center;
  }
  .fancy-title {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-family: serif;

    .title-section {
      font-size: 3.5rem;

      &.mobile {
        font-size: 2.5rem;
        .main-text {
          line-height: 2.5rem;
        }
      }

      .small {
        font-size: 1.5rem;
        height: 32px;
      }

      .main-text {
        line-height: 3rem;
      }

      .x-small {
        font-size: 1rem;
        height: 32px;
      }

      &.right {
        text-align: right;
      }
    }

    .title-separator {
      font-size: 8rem;
      margin: 0 1rem;

      &.mobile {
        font-size: 6rem;
      }
    }
  }
  .text-center {
    text-align: center;
  }
</style>
