<template>
    <div class="page">
        <!-- <GlassLayer /> -->
        <!-- <LiquidCursorBlobs /> -->
        <LiquidCursorThree :target-x="blobX" :target-y="blobY" :is-visible="blobsVisible"
            :hover-key="activeTileIndex" :palette-key="activeTileIndex" />

        <div v-if="showSplash" class="splash" :class="{ 'splash--fade-out': splashFadeOut }">
            <div class="splash__content">
                <div class="splash__title-wrap">
                    <h1 class="splash__title">Schülerarbeiten</h1>
                    <p class="splash__subtitle">Carl-Hofer-Schule Karlsruhe </p>
                </div>

                <div class="splash__loader">
                    <div class="splash__loader-bar"></div>
                </div>
            </div>
        </div>

        <header class="header" :class="{ 'is-hidden': isScrolled }">
            <div class="header__inner" :style="{ width: `${layoutWidth}px` }">
                <div class="header__left">
                    <h1 class="header__title">Carl-Hofer-Schule Karlsruhe</h1>
                    <h2 class="header__subtitle">Schülerarbeiten</h2>
                    <HeaderTypeAnimation class="header__animation" :texts="[
                        'Berufskolleg Grafikdesign',
                        'Gestaltungs- und Medientechnik | TG',
                        'Berufskolleg Foto',
                        'BF Druck- und Medientechnik'
                    ]" />
                </div>
                <div class="header__right">
                    <button class="header__link" type="button" @click="openFaqs">FAQs ________></button>
                </div>
            </div>
        </header>

        <div class="faq-overlay" :class="{ 'is-visible': faqsVisible }" @click.self="closeFaqs">
            <section class="faq-panel" aria-label="FAQs">
                <button class="faq-panel__close" type="button" aria-label="FAQs schließen" @click="closeFaqs">
                    ×
                </button>

                <div class="faq-panel__content">
                    <article v-for="faq in faqs" :key="faq.question" class="faq-item">
                        <h3>{{ faq.question }}</h3>
                    </article>
                </div>
            </section>
        </div>

        <div class="filters">
            <div class="filters__inner" :style="{ width: `${layoutWidth}px` }">
                <div class="filter-wrap">
                    <button class="filter" type="button" :class="{ 'is-open': yearDropdownOpen }"
                        @click="toggleYearDropdown">
                        <img src="/images/bkgd/down.svg" class="filter__icon" alt="" />
                        <span>{{ selectedYear || 'Jahrgang' }}</span>
                    </button>

                    <div class="filter-dropdown" :class="{ 'is-open': yearDropdownOpen }">
                        <button class="filter-dropdown__item" type="button" @click="selectYear(null)">
                            Alle Jahrgänge
                        </button>
                        <button v-for="year in years" :key="year" class="filter-dropdown__item" type="button"
                            @click="selectYear(year)">
                            {{ year }}
                        </button>
                    </div>
                </div>

                <div class="filter-wrap">
                    <button class="filter" type="button" :class="{ 'is-open': departmentDropdownOpen }"
                        @click="toggleDepartmentDropdown">
                        <img src="/images/bkgd/down.svg" class="filter__icon" alt="" />
                        <span>{{ selectedDepartment || 'Fachbereich' }}</span>
                    </button>

                    <div class="filter-dropdown" :class="{ 'is-open': departmentDropdownOpen }">
                        <button class="filter-dropdown__item" type="button" @click="selectDepartment(null)">
                            Alle Fachbereiche
                        </button>
                        <button v-for="department in departments" :key="department" class="filter-dropdown__item"
                            type="button" @click="selectDepartment(department)">
                            {{ department }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="floating-blobs" :class="{ 'is-visible': blobsVisible }" :style="floatingBlobsStyle">
            <span class="floating-blobs__blob floating-blobs__blob--1"></span>
            <span class="floating-blobs__blob floating-blobs__blob--2"></span>
            <span class="floating-blobs__blob floating-blobs__blob--3"></span>
        </div> -->

        <div class="back-to-top" :class="{ 'is-visible': isScrolled }"
            :style="{ left: `calc(50% + ${gridWidth / 2}px)` }">
            <button class="back-to-top__button" @click="scrollToTop">
                <img src="/images/bkgd/top.svg" class="back-to-top__icon" alt="Back to top" />
            </button>
        </div>

        <div class="grid" :style="{ gridTemplateColumns: 'repeat(' + columns + ', 300px)' }">
            <RouterLink v-for="(image, index) in tileImages" :key="index" class="tile" :to="portfolioRoute(index)"
                :style="{ animationDelay: tileDelays[index] }" @mouseenter="onTileEnter(index, $event)"
                @mouseleave="onTileLeave">
                <img :src="image" :alt="'Tile Bild ' + (index + 1)" class="tile__image" />

                <div class="tile__label" :class="{ 'is-visible': hoverActive[index] }">
                    <span class="tile__label-line">
                        {{ hoverNames[index] }}
                    </span>
                </div>
            </RouterLink>
        </div>

        <div class="load-more-wrap">
            <button class="load-more-button" type="button" @click="loadMore">
                Mehr laden
            </button>
        </div>

        <footer class="footer">
            <div class="footer__links">
                <a href="/datenschutz" class="footer__link">Datenschutz</a>
                <a href="/impressum" class="footer__link">Impressum</a>
            </div>
            <img src="/images/bkgd/logo_chs.svg" class="footer__logo" alt="Carl-Hofer-Schule Karlsruhe" />
        </footer>
    </div>
</template>



<script>
import GlassLayer from "@/components/templates/GlassLayer/GlassLayer.vue"
import LiquidCursorBlobs from "@/components/templates/GlassLayer/LiquidCursorBlobs.vue"
import LiquidCursorThree from "@/components/templates/GlassLayer/LiquidCursorThree.vue"
import HeaderTypeAnimation from "@/components/templates/GlassLayer/HeaderTypeAnimation.vue"


export default {
    name: "BKGDPage",

    components: {
        GlassLayer,
        LiquidCursorBlobs,
        LiquidCursorThree,
        HeaderTypeAnimation
    },

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
            faqsVisible: false,
            yearDropdownOpen: false,
            selectedYear: null,
            departmentDropdownOpen: false,
            selectedDepartment: null,

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
            ],

            years: [
                2023,
                2024,
                2025,
                2026,
                2027,
                2028,
                2029,
                2030
            ],

            departments: [
                "Berufskolleg Grafikdesign",
                "Gestaltungs- und Medientechnik | TG",
                "Berufskolleg Foto",
                "BF Druck- und Medientechnik"
            ],

            faqs: [
                {
                    question: "Wie kann ich mich an der CHS bewerben?",
                    answer: "Informationen zur Bewerbung findest du auf der Website der Carl-Hofer-Schule und direkt über das Sekretariat."
                },
                {
                    question: "Wo finde ich weitere Informationen zu den Schularten?",
                    answer: "Auf der CHS Website findest du Übersichten zu allen Schularten, Aufnahmebedingungen und Ansprechpartnerinnen und Ansprechpartnern."
                },
                {
                    question: "Welche Arbeiten werden auf dieser Seite gezeigt?",
                    answer: "Hier werden ausgewählte Schülerarbeiten aus unterschiedlichen Fachbereichen und Jahrgängen präsentiert."
                },
                {
                    question: "Kann ich die Portfolios einzelner Schülerinnen und Schüler ansehen?",
                    answer: "Ja, durch einen Klick auf eine Arbeit gelangst du zum jeweiligen Portfolio."
                },
                {
                    question: "Welche Fachbereiche gibt es an der CHS?",
                    answer: "Die Plattform zeigt unter anderem Arbeiten aus Grafikdesign, Foto, Mediengestaltung und Druck- und Medientechnik."
                },
                {
                    question: "Wann ist der richtige Zeitpunkt für eine Bewerbung?",
                    answer: "Die Fristen können je nach Schulart unterschiedlich sein. Prüfe die aktuellen Termine bitte auf der offiziellen CHS Website."
                },
                {
                    question: "Brauche ich eine Mappe für die Bewerbung?",
                    answer: "Für gestalterische Bildungsgänge kann eine Mappe oder Arbeitsprobe relevant sein. Details findest du bei der jeweiligen Schulart."
                },
                {
                    question: "An wen kann ich mich bei Fragen wenden?",
                    answer: "Bei konkreten Fragen helfen das Sekretariat und die Beratungsangebote der Carl-Hofer-Schule weiter."
                }
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
        window.removeEventListener("keydown", this.onKeydown)
    },

    methods: {
        openFaqs() {
            this.faqsVisible = true
            window.addEventListener("keydown", this.onKeydown)
        },

        closeFaqs() {
            this.faqsVisible = false
            window.removeEventListener("keydown", this.onKeydown)
        },

        onKeydown(event) {
            if (event.key === "Escape") {
                this.closeFaqs()
                this.yearDropdownOpen = false
                this.departmentDropdownOpen = false
            }
        },

        toggleYearDropdown() {
            this.yearDropdownOpen = !this.yearDropdownOpen
            this.departmentDropdownOpen = false
        },

        selectYear(year) {
            this.selectedYear = year
            this.yearDropdownOpen = false
        },

        toggleDepartmentDropdown() {
            this.departmentDropdownOpen = !this.departmentDropdownOpen
            this.yearDropdownOpen = false
        },

        selectDepartment(department) {
            this.selectedDepartment = department
            this.departmentDropdownOpen = false
        },

        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },

        updateColumns() {
            const screenWidth = window.innerWidth
            const columns = Math.floor(screenWidth / this.tileWidth)
            this.columns = Math.max(1, Math.min(columns, 6))
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
            const additionalRows = 3
            const additionalTiles = this.columns * additionalRows

            this.rows += additionalRows
            this.appendTiles(additionalTiles)

            this.$nextTick(() => {
                this.setBlobHomePosition()
            })
        },

        portfolioRoute(index) {
            return {
                name: "bkgdportfolio",
                params: {
                    name: this.hoverNames[index] || this.getRandomName()
                },
                query: {
                    blob: index
                }
            }
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
@import "./style-faq.scss";
</style>
