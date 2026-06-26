<template>
    <main class="project-page">
        <header class="project-header">
            <RouterLink :to="{ name: 'bkgdportfolio', params: { name: studentName } }" class="project-back-link">
                <span>&lt;________</span>
                <span>ZUR ÜBERSICHT</span>
            </RouterLink>
        </header>

        <section class="project-layout">
            <aside class="project-intro">
                <h1>Illustration Wüste</h1>
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

            <div class="project-content">
                <img src="/images/bkgd/wueste1.png" alt="Illustration Wüste" class="project-image project-image--hero" />

                <div class="project-image-pair">
                    <img src="/images/bkgd/wueste21.png" alt="Illustration Wüste Detail links" class="project-image" />
                    <img src="/images/bkgd/wueste22.png" alt="Illustration Wüste Detail rechts" class="project-image" />
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: "WuesteProjectPage",

    computed: {
        studentName() {
            const name = this.$route.params.name

            if (Array.isArray(name)) {
                return name[0] || "Noah Wagner"
            }

            return name || "Noah Wagner"
        }
    }
}
</script>

<style scoped lang="scss">
.project-page {
    min-height: 100vh;
    padding: 0 0 110px;
    box-sizing: border-box;
    background: white;
    color: black;
    font-family: Graphit, sans-serif;
}

.project-header {
    display: flex;
    align-items: center;
    height: 154px;
    padding: 30px clamp(28px, 5vw, 96px) 0;
    box-sizing: border-box;
    margin-bottom: 0;
}

.project-back-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    justify-self: start;
    padding: 20px 40px;
    border: 6px solid black;
    border-radius: 50px;
    background: white;
    color: black;
    font-size: 40px;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
}

.project-back-link:hover {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.32);
}

.project-layout {
    display: grid;
    grid-template-columns: minmax(220px, 330px) minmax(420px, 760px);
    gap: clamp(56px, 8vw, 130px);
    align-items: start;
    padding: 80px clamp(28px, 5vw, 96px) 0;
}

.project-intro {
    position: sticky;
    top: 54px;
}

.project-intro h1 {
    margin: 0 0 28px;
    font-size: 26px;
    font-weight: 300;
    line-height: 1.1;
}

.project-intro p {
    margin: 0 0 8px;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.35;
}

.project-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 74px;
}

.project-image {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
}

.project-image--hero {
    max-width: 640px;
}

.project-image-pair {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.45fr);
    gap: 28px;
    width: min(760px, 100%);
}

.project-image-pair .project-image {
    height: 385px;
}

@media (max-width: 900px) {
    .project-page {
        padding-bottom: 80px;
    }

    .project-header {
        height: auto;
        min-height: 96px;
        padding: 28px 22px;
        margin-bottom: 46px;
    }

    .project-back-link {
        font-size: 28px;
        padding: 18px 28px;
    }

    .project-layout {
        grid-template-columns: 1fr;
        gap: 42px;
        padding: 0 22px;
    }

    .project-intro {
        position: static;
        max-width: 420px;
    }

    .project-content {
        gap: 42px;
    }

    .project-image-pair {
        grid-template-columns: 1fr;
        gap: 22px;
    }

    .project-image-pair .project-image {
        height: auto;
    }
}
</style>
