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
            <slider animation="fade" :autoplay="false">
              <slider-item>
                <vue-countdown-timer
                  :start-time="new Date()"
                  :end-time="dateArrive.getTime()"
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
                        ><span class="number">{{ props.days }} </span> ~
                        Days</span
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
              </slider-item>

              <slider-item>
                <div class="arrive">
                  <span class="text">Ci vediamo il: </span>
                  <span class="date">
                    {{ dateArrive.toLocaleDateString() }}</span
                  >
                  <span class="text">Alle: </span>
                  <span class="date">{{
                    dateArrive.toLocaleString().split(" ")[1]
                  }}</span>
                </div>
              </slider-item>
            </slider>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";
export default {
  name: "Home",
  data() {
    return {
      dateArrive: new Date(2021, 3, 10, 11, 30),
      turn: false,
    };
  },
  components: {
    Slider,
    SliderItem,
  },
};
</script>

<style lang="scss">
.home {
  height: 100vh;
  background: linear-gradient(45deg, #c8a2c8, #800080);
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
        color: #fdb93b;
      }
    }

    &--body {
      height: 100%;
      /*  display: flex;
      align-items: center;
      justify-content: center; */
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

        .slider {
          position: relative;
          height: 100% !important;
        }

        .slider-item {
          padding: 0.4em;
        }

        .slider-btn {
          background: none;
          display: none;
        }

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
          img {
            height: 25px;
            width: 25px;
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
