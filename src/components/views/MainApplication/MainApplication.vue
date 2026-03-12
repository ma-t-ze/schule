<!-- MainApplication.vue -->

<template>
    <div class="links">
        <router-link class="chaos-link" :to="{ name: 'chaos' }">Gesetz der Nähe</router-link>
        <router-link class="chaos-link" :to="{ name: 'variablefont' }">Variable Font</router-link>
        <router-link class="chaos-link" :to="{ name: 'bridgepage' }">Paperbridge</router-link>
        <router-link class="chaos-link" :to="{ name: 'bkgdpage' }">BKGD Plattform</router-link>
    </div>
</template>

<script>


export default {
    name: 'MainApplication',
    components: {
    },
    data() {
        return {

        };
    },
    mounted() {
    },
    methods: {
    },
}
</script>

<style scoped lang="scss">
@import './style.scss';

.links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10vh;
    height: 100%;
    /* or: 100vh, depending on layout */
}

.chaos-link {
    display: inline-block;
    padding: 10px 20px;
    background: black;
    color: white;
    text-decoration: none;
    font-family: jost;
    font-weight: 400;
    font-size: 30px;
    margin: 10px;
    cursor: pointer;
}

.chaos-link:hover {
    background: #333;
}
</style>