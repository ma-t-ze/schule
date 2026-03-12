<template>
    <div class="page">
        <div v-if="showSplash" class="splash" :class="{ 'splash--fade-out': splashFadeOut }">
            <div class="splash__content">
                <div class="splash__title-wrap">
                    <h1 class="splash__title">Grafik & Design</h1>
                    <p class="splash__subtitle">Carl-Hofer-Schule Karlsruhe</p>
                </div>

                <div class="splash__loader">
                    <div class="splash__loader-bar"></div>
                </div>
            </div>
        </div>

        <header class="header" :class="{ 'is-hidden': isScrolled }">
            <div class="header__inner" :style="{ width: `${layoutWidth}px` }">
                <div class="header__left">
                    <h1 class="header__title">Grafik & Design</h1>
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

        <div class="filters">
            <div class="filters__inner" :style="{ width: `${layoutWidth}px` }">
                <button class="filter">
                    <img src="/images/bkgd/down.svg" class="filter__icon" alt="" />
                    <span>Jahrgang</span>
                </button>

                <button class="filter">
                    <img src="/images/bkgd/down.svg" class="filter__icon" alt="" />
                    <span>Fachbereich</span>
                </button>
            </div>
        </div>

        <div class="floating-blobs" :class="{ 'is-visible': blobsVisible }" :style="floatingBlobsStyle">
            <span class="floating-blobs__blob floating-blobs__blob--1"></span>
            <span class="floating-blobs__blob floating-blobs__blob--2"></span>
            <span class="floating-blobs__blob floating-blobs__blob--3"></span>
        </div>

        <div class="back-to-top" :class="{ 'is-visible': isScrolled }"
            :style="{ left: `calc(50% + ${gridWidth / 2}px)` }">
            <button class="back-to-top__button" @click="scrollToTop">
                <img src="/images/bkgd/top.svg" class="back-to-top__icon" alt="Back to top" />
            </button>
        </div>

        <div class="grid" :style="{ gridTemplateColumns: 'repeat(' + columns + ', 300px)' }">
            <div v-for="(image, index) in tileImages" :key="index" class="tile"
                :style="{ animationDelay: tileDelays[index] }" @mouseenter="onTileEnter(index, $event)"
                @mouseleave="onTileLeave">
                <img :src="image" :alt="'Tile Bild ' + (index + 1)" class="tile__image" />

                <div class="tile__label" :class="{ 'is-visible': hoverActive[index] }">
                    {{ hoverNames[index] }}
                </div>
            </div>
        </div>

        <div class="load-more-wrap">
            <button class="load-more-button">
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

            blobsVisible: false,
            activeTileIndex: null,
            blobX: 0,
            blobY: 0,
            homeBlobX: 0,
            homeBlobY: 0,

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
        },

        gridWidth() {
            return this.columns * this.tileWidth
        },

        layoutWidth() {
            return this.gridWidth + 200
        },

        floatingBlobsStyle() {
            return {
                transform: `translate(${this.blobX}px, ${this.blobY}px)`
            }
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
        }, 2000)

        setTimeout(() => {
            this.showSplash = false
        }, 2600)

        this.$nextTick(() => {
            this.setBlobHomePosition()

            const introDuration = 2000 + (this.totalTiles - 1) * 180 + 700

            setTimeout(() => {
                this.blobsVisible = true
            }, 2600)
        })
    },

    beforeUnmount() {
        window.removeEventListener("resize", this.handleResize)
        window.removeEventListener("scroll", this.onScroll)
    },

    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },

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
                (_, index) => `${2000 + index * 180}ms`
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

            this.$nextTick(() => {
                this.setBlobHomePosition()
            })
        },

        handleResize() {
            const oldColumns = this.columns
            this.updateColumns()

            if (this.columns !== oldColumns) {
                this.generateTileImages()
            }

            this.$nextTick(() => {
                this.setBlobHomePosition()
            })
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

        setBlobHomePosition() {
            const logoWrap = this.$el.querySelector(".header__center")
            if (!logoWrap) return

            const rect = logoWrap.getBoundingClientRect()

            this.homeBlobX = rect.left + rect.width / 2
            this.homeBlobY = rect.top + rect.height / 2

            if (this.activeTileIndex === null) {
                this.blobX = this.homeBlobX
                this.blobY = this.homeBlobY
            }
        },

        moveBlobsToTile(event) {
            const tile = event.currentTarget
            if (!tile) return

            const rect = tile.getBoundingClientRect()

            this.blobX = rect.left + rect.width / 2
            this.blobY = rect.top + rect.height / 2
        },

        onTileEnter(index, event) {
            this.hoverNames[index] = this.getRandomName()
            this.hoverActive[index] = true
            this.activeTileIndex = index
            this.moveBlobsToTile(event)
        },

        onTileLeave() {
            this.hoverActive = this.hoverActive.map(() => false)
            this.activeTileIndex = null
            this.blobX = this.homeBlobX
            this.blobY = this.homeBlobY
        }
    }
}
</script>

<style scoped lang="scss">
@import "./style.scss";
@import "./style-splash-screen.scss";
@import "./style-tiles.scss";
@import "./style-footer.scss";
@import "./style-header.scss";
</style>