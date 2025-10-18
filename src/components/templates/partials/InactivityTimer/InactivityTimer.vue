<template>
    <div class="counter" ref="counter">
        <div class="counter-description">Berühre die Oberfläche, um den automatischen Neustart zu verhindern</div>
        <div class="counter-time">{{ countdownVisible }} sec.</div>
    </div>
</template>

<script>
export default {
    name: 'InactivityTimer',
    data() {
        return {
            inactivityTimeout: null,
            countdown: 0,
            countdownVisible: 0,
            countdownInterval: null,
            gameStateCheck: false,
            coundownValue: 2000,
        };
    },
    mounted() {
        this.$store.watch(
            (state) => state.endInTimer, 
            (newValue, oldValue) => {
                if (newValue) {
                    this.setInactivityTimerInactive();
                }
            }
        );

        this.$store.watch(
            (state) => state.startInTimer,
            (newValue) => {
                if (newValue) {
                    this.$nextTick(() => {
                        this.startInactivityTimer();
                    });
                }
            }
        );
    },
    methods: {
        startInactivityTimer() {
            // console.log("inactivity timer is active");
            this.counter = this.$refs.counter;
            // Add event listeners when the timer starts
            window.addEventListener('keydown', this.resetInactivityTimer);
            window.addEventListener('touchstart', this.resetInactivityTimer);

            this.countdownInterval = setInterval(() => {
                this.countdown++;
                this.countdownVisible = (this.countdown - this.coundownValue) * (-1);
                const width = window.innerWidth + 200;
                // console.log(this.countdown);
                if (this.countdown < (this.coundownValue - (this.coundownValue / 2))) {
                    // Hide counter if countdown is less than 5
                    this.counter.style.transition = "left 0.5s ease";
                    this.counter.style.left = width + 'px';
                } else if (this.countdown < this.coundownValue) {
                    // Show counter if countdown is between 5 and 10
                    this.counter.style.transition = "left 0.5s ease";
                    this.counter.style.left = '0px';
                } 
                else {
                    // Hide counter
                    clearInterval(this.countdownInterval);
                    this.counter.style.transition = "left 0.5s ease";
                    this.counter.style.left = width + 'px';
                    this.countdown = 0;

                    this.$store.dispatch('setEndInTimer', true);

                    // Remove the functionality that calls resetInactivityTimer
                    window.removeEventListener('keydown', this.resetInactivityTimer);
                    window.removeEventListener('touchstart', this.resetInactivityTimer);
                }
            }, 1000);
        },
        resetInactivityTimer() {
        // Clear any existing timer and interval
        clearInterval(this.countdownInterval);
        // Reset countdown
        this.countdown = 0;
        // Restart the inactivity timer
        this.startInactivityTimer();
    },
    setInactivityTimerInactive() {
        this.$nextTick(() => {
            clearInterval(this.countdownInterval);
            // console.log("inactivity timer is inactive");
            this.countdown = 0;

            // Remove event listeners when the timer stops
            window.removeEventListener('keydown', this.resetInactivityTimer);
            window.removeEventListener('touchstart', this.resetInactivityTimer);
        });
    }
    }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>