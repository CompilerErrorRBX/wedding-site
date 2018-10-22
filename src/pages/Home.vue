<template>
  <div class="home">
    <!-- <v-img
      src="https://images.pixieset.com/97310741/c9f96b98942a298b259f9a066026c8f6-xxlarge.jpg"
      lazy-src="https://images.pixieset.com/97310741/c9f96b98942a298b259f9a066026c8f6-xxlarge.jpg"
      height="800"
      position="center center"
    /> -->
    <v-carousel>
      <v-carousel-item
        v-for="(image, i) in images"
        :key="i"
        :src="image"
      ></v-carousel-item>
    </v-carousel>
    <!-- <v-parallax src="https://images.pixieset.com/97310741/c9f96b98942a298b259f9a066026c8f6-xxlarge.jpg" height="800" /> -->
    <v-card class="py-3 text-center">
      <countdown :date="date" title="The Celebration Begins In" />
      <v-btn class="my-2" depressed>RSVP</v-btn>
    </v-card>
    <gmap-map
      :center="{ lat: 37.2078854, lng: -93.2930151 }"
      :zoom="20"
      style="width: 100%; height: 600px" />
    <v-card class="py-3 text-center">
      <v-btn depressed>Get Directions</v-btn>
    </v-card>
  </div>
</template>

<script>
import countdown from '@/components/countdown.vue';

export default {
  name: 'home',
  components: { countdown },
  data: () => ({
    date: 'December 16, 2018 03:00:00',
    images: [
      'https://images.pixieset.com/97310741/c9f96b98942a298b259f9a066026c8f6-xxlarge.jpg',
      'https://images.pixieset.com/97310741/29c1b62953b04475dab393d431557917-xxlarge.jpg',
    ],
  }),
};
</script>
