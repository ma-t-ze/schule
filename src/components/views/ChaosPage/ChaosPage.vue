<!-- ChaosPage.vue -->

<template>
    <ChaosLayer v-if="isChaosLayer" />
</template>

<script>

import ChaosLayer from '@/components/templates/01_ChaosLayer/ChaosLayer.vue'

export default {
    name: 'ChaosPage',
    components: {
        ChaosLayer,
    },
    data() {
        return {
            isChaosLayer: true,
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
</style>