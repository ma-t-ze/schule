<!-- ChaosPage.vue -->

<template>
    <VariableFont v-if="isVariableFont" />
</template>

<script>

import VariableFont from '@/components/templates/01_VariableFont/VariableFont.vue'

export default {
    name: 'VariableFontPage',
    components: {
        VariableFont,
    },
    data() {
        return {
            isVariableFont: true,
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