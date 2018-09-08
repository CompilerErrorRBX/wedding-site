<template>
  <div class="home">
    <!-- <v-img
      src="https://www.wallpaperup.com/uploads/wallpapers/2015/04/02/653105/09d95a6f0e5f6e6a79bcbc58aa1222ad-700.jpg"
      lazy-src="https://www.wallpaperup.com/uploads/wallpapers/2015/04/02/653105/09d95a6f0e5f6e6a79bcbc58aa1222ad-700.jpg"
      height="600px"
    /> -->
    <!-- <v-parallax src="https://www.wallpaperup.com/uploads/wallpapers/2015/04/02/653105/09d95a6f0e5f6e6a79bcbc58aa1222ad-700.jpg" height="600px" /> -->
    <v-parallax src="https://www.wallpaperup.com/uploads/wallpapers/2015/04/02/653105/09d95a6f0e5f6e6a79bcbc58aa1222ad-700.jpg" height=600></v-parallax>
    <v-card height="200px">
      <countdown :date="date" title="The Celebration Begins In" />
    </v-card>
    <!-- <gmap-map
      :center="{ lat: 37.2078854, lng: -93.2930151 }"
      :zoom="20"
      style="width: 100%; height: 600px" /> -->
  </div>
</template>

<script>
import countdown from '@/components/countdown.vue';

export default {
  name: 'home',
  components: { countdown },
  data: () => ({
    date: 'December 16, 2018 03:00:00',
  }),
};
</script>
