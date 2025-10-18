<!-- MainApplication.vue -->

<template>

    <StartLayer v-if="isStartLayer" />
    <CanvasLayer v-if="isCanvasLayer" />
    <ToolbarSection v-if="isToolbarSection" />
    <InactivityTimer v-if="isInactivityTimer" />
    <WalkingLayerSection v-if="isWalkingLayerSection" />
    <LightsOnSection v-if="isLightsOnSection"/>
    <BarometerPhraseSection v-if="isBarometerPhraseSection"/>

</template>

<script>

import StartLayer from '@/components/templates/01_StartLayer/StartLayer.vue'
import CanvasLayer from '@/components/templates/02_CanvasLayer/CanvasLayer.vue'
import ToolbarSection from '@/components/templates/03_ToolbarSection/ToolbarSection.vue'
import InactivityTimer from '@/components/templates/partials/InactivityTimer/InactivityTimer.vue'
import WalkingLayerSection from '@/components/templates/03_ToolbarSection/05_WalkingLayer/WalkingLayerSection.vue';
import BarometerPhraseSection from '@/components/templates/04_FeelGoodBarometer/02_BarometerPhrase/BarometerPhraseSection.vue';
import LightsOnSection from '@/components/templates/05_LightsOn/LightsOnSection.vue'

export default {
    name: 'MainApplication',
    components: {
        CanvasLayer,
        ToolbarSection,
        StartLayer,
        InactivityTimer,
        WalkingLayerSection,
        LightsOnSection,
        BarometerPhraseSection
    },
    data() {
        return {
            isCanvasLayer: false,
            isToolbarSection: false,
            isStartLayer: true,
            isInactivityTimer: false,
            isWalkingLayerSection: false,
            isLightsOnSection: false,
            isBarometerPhraseSection: false
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