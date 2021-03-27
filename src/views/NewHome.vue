<template>
  <div class="new-home">
    <div class="header">
      <div class="header__title">
        <span class="title">WHE<span class="n">N</span>EXT</span>
      </div>
    </div>
    <template v-if="!arrived">
      <div class="main" :key="key">
        <div class="main-grid">
          <div class="card">
            <div class="card--title">Giorni:</div>
            <div class="card--value">{{ days }}</div>
          </div>
          <div class="card">
            <div class="card--title">Ore:</div>
            <div class="card--value">{{ hours }}</div>
          </div>
          <div class="card">
            <div class="card--title">Minuti:</div>
            <div class="card--value">{{ minutes }}</div>
          </div>
          <div class="card">
            <div class="card--title">Secondi:</div>
            <div class="card--value">{{ seconds }}</div>
          </div>
        </div>
        <div class="arrive">
          <span class="text">Ci vediamo il: </span>
          <span class="date"> {{ date.toLocaleDateString() }}</span>
          <span class="text">Alle: </span>
          <span class="date">{{ date.toLocaleString().split(" ")[1] }}</span>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="together">Siamo insieme <br />😍</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "NewHome",
  data() {
    return {
      date: new Date(2021, 3, 9, 21, 0),
      key: 1,
      timeout: null,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      interval: null,
      arrived: false,
    };
  },
  mounted() {
    this.startTimer();
    this.interval = setInterval(() => {
      this.startTimer();
    }, 1000);
  },
  methods: {
    startTimer() {
      const now = new Date().getTime();
      const distance = this.date.getTime() - now;

      if (distance < 0) {
        this.arrived = true;
      }

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    },
  },
};
</script>

<style lang="scss">
.new-home {
  height: 100vh;
  position: relative;

  .header {
    position: relative;
    background: linear-gradient(45deg, #c8a2c8, #800080);
    height: 25vh;
    border-bottom-right-radius: 90px;
    display: flex;
    justify-content: center;
    align-items: center;

    &__title {
      .title {
        font-weight: bold;
        font-size: 3.5em;
        color: white;
      }
      .n {
        color: rgb(253, 185, 58);
      }
    }
  }

  .main {
    background: white;
    height: 75vh;
    border-top-left-radius: 90px;
    padding: 45px;
    position: relative;
    .main-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 15px;
      margin-top: 25px;

      .card {
        padding: 15px 15px 30px 15px;
        background: rgba(253, 185, 58, 0.7);
        border-radius: 25px;

        &--title {
          font-size: 1.3rem;
          color: black;
        }

        &--value {
          text-align: center;
          font-size: 1.8rem;
          color: #800080;
          font-weight: bold;
        }
      }
    }

    .arrive {
        position: absolute;
        bottom: 0;
        padding: 14px;
        left: 0;
        right: 0;
        text-align: center;

        .date {
            color: #800080;
            font-weight: bold;
            margin-right: 5px;
        }
    }

    &::after {
      content: " ";
      position: absolute;
      background: linear-gradient(103deg, #c8a2c8, #800080);
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }
  .together {
    height: 75vh;
    background: white;
    border-top-left-radius: 90px;
    padding: 45px;
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: rgb(253, 185, 58);
    font-size: 1.9rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
    line-height: 3rem;

    &::after {
      content: " ";
      position: absolute;
      background: linear-gradient(103deg, #c8a2c8, #800080);
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }
}
</style>