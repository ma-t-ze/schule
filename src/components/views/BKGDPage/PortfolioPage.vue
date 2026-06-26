<template>
    <main class="portfolio-page">
        <LiquidCursorThree class="portfolio-blob" :target-x="blobX" :target-y="blobY" :is-visible="true"
            :hover-key="blobKey" :palette-key="blobKey" :display-scale="1.05" />

        <nav class="portfolio-nav">
            <RouterLink :to="{ name: 'bkgdpage' }" class="portfolio-back-link">
                <span class="portfolio-back-link__arrow">&lt;________</span>
                <span class="portfolio-back-link__text">CHS SCHÜLERARBEITEN</span>
            </RouterLink>
        </nav>

        <section class="portfolio-layout">
            <aside class="portfolio-intro">
                <h1>Portfolio {{ studentName }}</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </p>
            </aside>

            <div class="portfolio-projects">
                <article v-for="project in projects" :key="project.title" class="portfolio-project">
                    <img :src="project.image" :alt="project.title" class="portfolio-project__image" />
                    <RouterLink :to="projectRoute(project)" class="portfolio-project__title">
                        {{ project.title }}
                    </RouterLink>
                </article>
            </div>
        </section>
    </main>
</template>

<script>
import LiquidCursorThree from "@/components/templates/GlassLayer/LiquidCursorThree.vue"

export default {
    name: "PortfolioPage",

    components: {
        LiquidCursorThree
    },

    data() {
        return {
            blobX: 0,
            blobY: 0,
            projects: [
                {
                    title: "Illustration Wüste",
                    image: "/images/bkgd/work.png"
                },
                {
                    title: "Projekttitel",
                    image: "/images/bkgd/work.png"
                },
                {
                    title: "Projekttitel",
                    image: "/images/bkgd/work.png"
                }
            ]
        }
    },

    computed: {
        studentName() {
            const name = this.$route.params.name

            if (Array.isArray(name)) {
                return name[0] || "Noah Wagner"
            }

            return name || "Noah Wagner"
        },

        blobKey() {
            return this.$route.query.blob ?? this.studentName
        }
    },

    mounted() {
        this.setBlobPosition()
        window.addEventListener("resize", this.setBlobPosition)
    },

    beforeUnmount() {
        window.removeEventListener("resize", this.setBlobPosition)
    },

    methods: {
        setBlobPosition() {
            this.blobX = window.innerWidth * 0.58
            this.blobY = window.innerHeight * 0.48
        },

        projectRoute() {
            return {
                name: "bkgdprojectwueste",
                params: {
                    name: this.studentName
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
.portfolio-page {
    position: relative;
    min-height: 100vh;
    padding: 0 0 120px;
    box-sizing: border-box;
    background: #FBF0E4;
    color: #1d1d1b;
    font-family: Graphit, sans-serif;
}

.portfolio-blob {
    z-index: 0;
}

.portfolio-nav,
.portfolio-layout {
    position: relative;
    z-index: 5;
}

.portfolio-nav {
    display: flex;
    align-items: center;
    height: 154px;
    padding: 30px clamp(28px, 5vw, 96px) 0;
    box-sizing: border-box;
    background: transparent;
}

.portfolio-back-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 20px 40px;
    border-radius: 50px;
    background: white;
    color: black;
    font-size: 40px;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
}

.portfolio-back-link:hover {
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.portfolio-back-link__arrow {
    letter-spacing: 0;
}

.portfolio-layout {
    display: grid;
    grid-template-columns: minmax(220px, 330px) minmax(420px, 640px);
    gap: clamp(56px, 8vw, 130px);
    align-items: start;
    padding: 80px clamp(28px, 5vw, 96px) 0;
}

.portfolio-intro {
    position: sticky;
    top: 54px;
}

.portfolio-intro h1 {
    margin: 0 0 28px;
    font-size: 26px;
    font-weight: 300;
    line-height: 1.1;
}

.portfolio-intro p {
    margin: 0 0 8px;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.35;
}

.portfolio-projects {
    display: flex;
    flex-direction: column;
    gap: 74px;
}

.portfolio-project {
    position: relative;
    width: 100%;
    aspect-ratio: 1.55;
    overflow: hidden;
    background: #f4ead2;
}

.portfolio-project__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.portfolio-project__title {
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 270px;
    min-height: 86px;
    padding: 0 34px;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    background: white;
    color: black;
    font-size: 24px;
    font-weight: 300;
    line-height: 1;
    text-align: center;
    text-decoration: none;
}

.portfolio-project__title:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 6px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);
}

@media (max-width: 900px) {
    .portfolio-page {
        padding-bottom: 80px;
    }

    .portfolio-nav {
        height: auto;
        min-height: 96px;
        padding: 28px 22px;
    }

    .portfolio-back-link {
        align-items: flex-start;
        font-size: 28px;
        line-height: 1.2;
    }

    .portfolio-layout {
        grid-template-columns: 1fr;
        gap: 42px;
        padding: 56px 22px 0;
    }

    .portfolio-intro {
        position: static;
        max-width: 420px;
    }

    .portfolio-projects {
        gap: 42px;
    }

    .portfolio-project__title {
        min-width: min(260px, 72%);
        min-height: 72px;
        font-size: 22px;
    }
}
</style>
