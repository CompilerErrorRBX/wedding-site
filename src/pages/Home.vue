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
    <router-view />
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
      'https://www.amazon.com/drive/v1/nodes/Gp7b5NO1ShmchrRZIap50Q/contentRedirection?querySuffix=%3FviewBox%3D2770%2C1846&ownerId=A26NWLJJDSN4Y3&cb=1540322048334',
      'https://www.amazon.com/drive/v1/nodes/4P2vQX4NSYWjkPY5A0D64g/contentRedirection?querySuffix=%3FviewBox%3D2770%2C1846&ownerId=A26NWLJJDSN4Y3&cb=1540322048333',
      'https://www.amazon.com/drive/v1/nodes/e7V9DJ1HQCGItGnneN3ulQ/contentRedirection?querySuffix=%3FviewBox%3D2770%2C1846&ownerId=A26NWLJJDSN4Y3&cb=1540322022537',
      'https://www.amazon.com/drive/v1/nodes/NyVA_7uoSVGNQ4SPXNxlPg/contentRedirection?querySuffix=%3FviewBox%3D2770%2C1846&ownerId=A26NWLJJDSN4Y3&cb=1540322246494',
      'https://www.amazon.com/drive/v1/nodes/OIDygBPwSsa0wJB9iKNIjg/contentRedirection?querySuffix=%3FviewBox%3D2770%2C1846&ownerId=A26NWLJJDSN4Y3&cb=1540322280695',
    ],
  }),
};
</script>
