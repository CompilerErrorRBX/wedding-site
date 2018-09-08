<template>
  <div class="fancy-title grey--text text--darken-2">
    <div class="title-section">
      <div class="text-center">
        <div class="small">{{ title }}</div>
        <div>
          <span class="days d-inline-block">
            {{ dateTime.days }}
            <div class="x-small">Days</div>
          </span>
          <span class="hours d-inline-block">
            {{ dateTime.hours }}
            <div class="x-small">Hours</div>
          </span>
          <span class="minutes d-inline-block">
            {{ dateTime.minutes }}
            <div class="x-small">Minutes</div>
          </span>
          <span class="seconds d-inline-block">
            {{ dateTime.seconds }}
            <div class="x-small">Seconds</div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    dateTime() {
      const t = new Date(new Date(this.date) - this.currentDate);
      const seconds = Math.floor((t / 1000) % 60);
      const minutes = Math.floor((t / 1000 / 60) % 60);
      const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        seconds: seconds < 10 ? `0${seconds}` : seconds,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        hours: hours < 10 ? `0${hours}` : hours,
        days: days < 10 ? `0${days}` : days,
      };
    },
  },
  data: () => ({
    currentDate: Date.now(),
    countdown: null,
  }),
  created() {
    setInterval(() => {
      this.currentDate = Date.now();
    }, 1000);
  },
  props: {
    date: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
  .days, .hours, .minutes, .seconds {
    width: 70px;
  }
</style>
