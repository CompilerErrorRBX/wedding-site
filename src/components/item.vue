<template>
  <v-card hover :href="item.url">
    <v-img :src="item.thumbnail" height="350px" />
    <v-card-title>
      <div class="title truncate" v-html="item.name" />
    </v-card-title>
    <v-card-title class="py-0">
      <div class="title green--text">{{ item.price }}</div>
    </v-card-title>
    <v-card-title class="py-1">
      <span class="subheading grey--text">
        {{ item.quantity }} of {{ item.desiredQuantity }} purchased
      </span>
    </v-card-title>
    <v-card-text v-html="item.name" />
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
