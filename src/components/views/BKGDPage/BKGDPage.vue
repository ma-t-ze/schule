<template>
    <div class="page">
        <div v-if="showSplash" class="splash" :class="{ 'splash--fade-out': splashFadeOut }">
            <div class="splash__content">
                <div class="splash__title-wrap">
                    <h1 class="splash__title">Designplattform</h1>
                    <p class="splash__subtitle">Carl-Hofer-Schule Karlsruhe</p>
                </div>

                <div class="splash__loader">
                    <div class="splash__loader-bar"></div>
                </div>
            </div>
        </div>

        <header class="header header--large" :class="{ 'is-hidden': isScrolled }">
            <div class="header__inner">
                <div class="header__left">
                    <h1 class="header__title">Design-Plattform</h1>
                    <p class="header__subtitle">Carl-Hofer-Schule Karlsruhe</p>
                </div>

                <div class="header__center">
                    <img src="/images/bkgd/logo.svg" class="logo" alt="chs logo" />
                </div>

                <div class="header__right">
                    <a href="#faqs" class="header__link">FAQs</a>
                </div>
            </div>
        </header>

        <header class="header header--small" :class="{ 'is-visible': isScrolled }">
            <div class="header__inner header__inner--small">
                <div class="header__left">
                    <p class="header__subtitle__small">Carl-Hofer-Schule Karlsruhe</p>
                </div>

                <div class="header__right">
                    <a href="#faqs" class="header__link__small">FAQs</a>
                </div>
            </div>
        </header>

        <div class="grid" :style="{ gridTemplateColumns: 'repeat(' + columns + ', 300px)' }">
            <div v-for="(image, index) in tileImages" :key="index" class="tile"
                :style="{ animationDelay: tileDelays[index] }" @mouseenter="onTileEnter(index)"
                @mouseleave="onTileLeave(index)">
                <div class="tile__blobs">
                    <span class="tile__blob tile__blob--1"></span>
                    <span class="tile__blob tile__blob--2"></span>
                    <span class="tile__blob tile__blob--3"></span>
                </div>

                <img :src="image" :alt="'Tile Bild ' + (index + 1)" class="tile__image" />

                <div class="tile__label" :class="{ 'is-visible': hoverActive[index] }">
                    {{ hoverNames[index] }}
                </div>
            </div>
        </div>

        <div class="load-more-wrap">
            <button class="load-more-button" @click="loadMore">
                Mehr laden
            </button>
        </div>

        <footer class="footer">
            <a href="/datenschutz" class="footer__link">Datenschutz</a>
            <a href="/impressum" class="footer__link">Impressum</a>
        </footer>
    </div>
</template>

<script>
export default {
    name: "BKGDPage",

    data() {
        return {
            tileWidth: 300,
            rows: 5,
            columns: 1,
            tileImages: [],
            hoverNames: [],
            hoverActive: [],
            tileDelays: [],
            isScrolled: false,
            ticking: false,
            showSplash: true,
            splashFadeOut: false,
            namesPool: [
                "Leon Schneider",
                "Mia Fischer",
                "Noah Wagner",
                "Emma Becker",
                "Luca Hoffmann",
                "Lina Keller",
                "Jonas Hartmann",
                "Sophie Braun",
                "Ben Neumann",
                "Hannah Vogel"
            ]
        }
    },

    computed: {
        totalTiles() {
            return this.columns * this.rows
        }
    },

    mounted() {
        this.updateColumns()
        this.generateTileImages()
        this.handleScroll()

        window.addEventListener("resize", this.handleResize)
        window.addEventListener("scroll", this.onScroll, { passive: true })

        setTimeout(() => {
            this.splashFadeOut = true
        }, 4000)

        setTimeout(() => {
            this.showSplash = false
        }, 4600)
    },

    beforeUnmount() {
        window.removeEventListener("resize", this.handleResize)
        window.removeEventListener("scroll", this.onScroll)
    },

    methods: {
        updateColumns() {
            const screenWidth = window.innerWidth
            const columns = Math.floor(screenWidth / this.tileWidth)
            this.columns = Math.max(1, Math.min(columns, 5))
        },

        getRandomImage() {
            const randomNumber = Math.floor(Math.random() * 9) + 1
            return `/images/bkgd/images/${randomNumber}.png`
        },

        getRandomName() {
            const randomIndex = Math.floor(Math.random() * this.namesPool.length)
            return this.namesPool[randomIndex]
        },

        getDelaySequence(tileCount) {
            return Array.from(
                { length: tileCount },
                (_, index) => `${4000 + index * 180}ms`
            )
        },

        generateTileImages() {
            const tileCount = this.totalTiles

            this.tileImages = Array.from(
                { length: tileCount },
                () => this.getRandomImage()
            )

            this.hoverNames = Array.from(
                { length: tileCount },
                () => this.getRandomName()
            )

            this.hoverActive = Array.from({ length: tileCount }, () => false)
            this.tileDelays = this.getDelaySequence(tileCount)
        },

        appendTiles(tileCount) {
            const newImages = Array.from(
                { length: tileCount },
                () => this.getRandomImage()
            )

            const newNames = Array.from(
                { length: tileCount },
                () => this.getRandomName()
            )

            const newHoverActive = Array.from({ length: tileCount }, () => false)
            const newDelays = this.getDelaySequence(tileCount)

            this.tileImages.push(...newImages)
            this.hoverNames.push(...newNames)
            this.hoverActive.push(...newHoverActive)
            this.tileDelays.push(...newDelays)
        },

        loadMore() {
            const additionalRows = 4
            const additionalTiles = this.columns * additionalRows

            this.rows += additionalRows
            this.appendTiles(additionalTiles)
        },

        handleResize() {
            const oldColumns = this.columns
            this.updateColumns()

            if (this.columns !== oldColumns) {
                this.generateTileImages()
            }
        },

        onScroll() {
            if (!this.ticking) {
                window.requestAnimationFrame(() => {
                    this.handleScroll()
                    this.ticking = false
                })
                this.ticking = true
            }
        },

        handleScroll() {
            const y = window.scrollY || window.pageYOffset
            this.isScrolled = y > 50
        },

        onTileEnter(index) {
            this.hoverNames[index] = this.getRandomName()
            this.hoverActive[index] = true
        },

        onTileLeave(index) {
            this.hoverActive[index] = false
        }
    }
}
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>