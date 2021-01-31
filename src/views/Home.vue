<template>
  <div class="home">
    <div class="card">
      <!-- <div class="card--blur"></div> -->
      <div class="card--content">
        <div class="card--title">
          <span class="title">WHE<span class="n">N</span>EXT</span>
        </div>
        <div class="card--body">
          <div class="timer">
            <vue-countdown-timer
              :start-time="new Date()"
              :end-time="new Date(2021, 1, 12, 11, 30).getTime()"
              :interval="1000"
              label-position="begin"
              :end-text="'Siamo insieme😍'"
              :day-txt="':'"
              :hour-txt="':'"
              :minutes-txt="':'"
              :seconds-txt="''"
              :class="{ 'd-none': turn }"
              class="vue-countdown-timer"
            >
              <template #countdown="{ props }">
                <div class="countdown">
                  <span
                    ><span class="number">{{ props.days }} </span> ~ Days</span
                  >
                  <span
                    ><span class="number">{{ props.hours }} </span> ~
                    Hours</span
                  >
                  <span
                    ><span class="number">{{ props.minutes }} </span> ~
                    Minutes</span
                  >
                  <span
                    ><span class="number">{{ props.seconds }} </span> ~
                    Seconds</span
                  >
                </div>
              </template>
            </vue-countdown-timer>
            <div :class="{ 'd-none': !turn }" class="arrive">
              <span class="text">Arrivo il: </span>
              <span class="date">
                {{ new Date(2021, 1, 12, 11, 30).toLocaleDateString() }}</span
              >
              <span class="text">Alle: </span>
              <span class="date">{{
                new Date(2021, 1, 12, 11, 30).toLocaleString().split(" ")[1]
              }}</span>
            </div>
            <div class="action">
              <button @click="turn = !turn">
                <img src="/sync-alt-solid.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCountdownTimer from "vuejs-countdown-timer/";
import VanillaTilt from "vanilla-tilt";
import Vue from "vue";
Vue.use(VueCountdownTimer);
export default {
  name: "Home",
  data() {
    return {
      turn: false,
    };
  },
  mounted() {
    VanillaTilt.init(document.querySelector(".card"), {
      max: 20,
      speed: 300,
      glare: true,
      "max-glare": 1,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
    });
  },
};
</script>

<style lang="scss">
.home {
  height: 100vh;
  background: linear-gradient(45deg, #c8a2c8, purple);
  display: flex;
  align-items: center;
  justify-content: center;
  .d-none {
    display: none !important;
  }

  .card {
    border-radius: 20px;
    position: relative;
    height: 75vh;
    width: 50%;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(40px);
    @media screen and(max-width: 45em) {
      width: 90%;
    }

    &--blur {
      position: absolute;
      border-radius: 20px;
      width: 100%;
      height: 100%;
      background: rgba(197, 197, 197, 0.2);
      filter: blur(1px);
    }

    &--content {
      position: absolute;
      display: flex;
      flex-direction: column;
      border-radius: 20px;
      padding: 20px;
      width: 100%;
      height: 100%;
      text-align: center;
    }

    &--title {
      .title {
        font-weight: bold;
        font-size: 3.5em;
        color: white;
      }
      .n {
        color: rgb(253, 185, 59);
      }
    }

    &--body {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .timer {
        transition: all 0.3s;
        height: 100%;
        width: 100%;
        padding: 20px;
        font-size: 2.7em;
        color: white;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .action {
          height: 15%;
          text-align: right;
          button {
            cursor: pointer;
            background: transparent;
            border: none;
            height: 25px;
            width: 25px;
            &:focus,
            &:active {
              border: none;
            }
          }
        }

        .vue-countdown-timer {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        .countdown {
          display: flex;
          flex-direction: column;
          width: 100%;
          .number {
            font-weight: bold;
            color: rgb(253, 185, 59);
          }
          span {
            text-align: left;
            font-size: 2rem;
          }
        }
        .arrive {
          display: flex;
          align-items: start;
          justify-content: center;
          height: 100%;
          flex-direction: column;
          .text {
            font-size: 2.1rem;
            margin-bottom: 8px;
          }
          .date {
            font-size: 2.1rem;
            color: rgb(253, 185, 59);
            margin-bottom: 8px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
