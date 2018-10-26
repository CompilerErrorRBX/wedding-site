<template>
  <div>
    <v-container grid-list-md v-for="registry in registries" :key="registry.id">
      <v-subheader>
        {{ registry.title }}
        <v-spacer />
        <v-btn :href="registry.url">Go To Registry</v-btn>
      </v-subheader>
      <v-layout class="grid" v-if="registry.items.length">
        <v-flex class="item-card" xs12 v-for="item in registry.items" :key="item.id">
          <item :item="item" />
        </v-flex>
      </v-layout>
      <span v-else>
        No items found.
      </span>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';

import item from '@/components/item.vue';

export default {
  name: 'Home',
  components: { item },
  computed: {
    ...mapState({
      registries: state => state.REGISTRIES,
    }),
  },
  data: () => ({
  }),
  methods: {
    resizeGridItem(element) {
      const article = element;
      const grid = document.getElementsByClassName('grid')[0];
      const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'), 10);
      const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'), 10);
      const rowSpan = Math.ceil((article.querySelector('.v-card').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

      article.style.gridRowEnd = `span ${rowSpan}`;
    },
    resizeAllGridItems() {
      const allItems = document.getElementsByClassName('item-card');
      for (let x = 0; x < allItems.length; x += 1) {
        this.resizeGridItem(allItems[x]);
      }
    },
  },
  updated() {
    Vue.nextTick(() => {
      this.resizeAllGridItems();
    });

    window.addEventListener('resize', () => { this.resizeAllGridItems(); });
  },
};
</script>

<style lang="scss">
  .grid {
    display: grid !important;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    grid-auto-rows: 10px;
  }

  .item-card {
    display: inline-block;
    width: 100%;
  }
</style>
