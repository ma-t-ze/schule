<template>
  <div class="carousel-container" :class="{ 'active': isLegendActive }">
 

    <div class="carousel">
      <div class="header1">Legende zu den Gebäuden im Spiel</div>
      <!-- <div v-if="isIkonischeGebaeude" class="header1">Legende zu den Gebäuden im Spiel</div>
      <div v-else class="header2">Gebäudevorlagen für die Bebauungsmöglichkeiten</div> -->
      <div class="carousel-item" v-for="(slide, index) in slides" :key="index"
        :class="{ active: index === currentIndex }">

        <img :src="slide.image" alt="Slide Image" class="carousel-image" />
        <div class="text-container">
          <div class="image-counter-container">
          <div class="image-counter">
            {{ currentIndex + 1 }} / {{ slides.length }}
          </div>
        </div>
          <div class="carousel-heading">{{ slide.heading }}</div>
          <div class="carousel-text">{{ slide.text }}</div>
        </div>

        <div class="carousel-controls">
          <div @click="prevSlide" class="control left">
            <img src="/images/legend/left.svg" alt="" />
          </div>
          <div @click="nextSlide" class="control right">
            <img src="/images/legend/right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LegendLayerSection",
  data() {
    return {
      currentIndex: 0,
      slides: [
        // --- Ikonische Gebäude ---
        {
          "image": "/images/legend/Schloss.jpg",
          "heading": "Schloss Karlsruhe",
          "text": "Das Schloss Karlsruhe ist ein prachtvolles Barockschloss, erbaut 1715, umgeben von einem großzügigen Schlossgarten."
        },
        {
          "image": "/images/legend/Marktplatz_mit_Pyramide.jpg",
          "heading": "Marktplatz mit Pyramide",
          "text": "Das Zentrum Karlsruhes mit der berühmten Pyramide, dem Grabmal des Stadtgründers Markgraf Karl Wilhelm."
        },
        {
          "image": "/images/legend/Rathaus.jpg",
          "heading": "Rathaus Karlsruhe",
          "text": "Das Rathaus von Karlsruhe ist ein zentraler Verwaltungssitz und prägt das Stadtbild am Marktplatz."
        },
        {
          "image": "/images/legend/Evangelische_Stadtkirche.jpg",
          "heading": "Evangelische Stadtkirche",
          "text": "Die Evangelische Stadtkirche Karlsruhe ist ein zentrales Gotteshaus mit historischer Bedeutung und beeindruckender Architektur."
        },
        {
          "image": "/images/legend/Kleine_Kirche.jpg",
          "heading": "Kleine Kirche Karlsruhe",
          "text": "Die Kleine Kirche in Karlsruhe ist die älteste Kirche der Stadt und ein bedeutendes Denkmal."
        },
        {
          "image": "/images/legend/Staatliche_Kunsthalle.jpg",
          "heading": "Staatliche Kunsthalle Karlsruhe",
          "text": "Die Staatliche Kunsthalle Karlsruhe beherbergt eine bedeutende Sammlung europäischer Malerei vom Mittelalter bis zur Moderne."
        },
        {
          "image": "/images/legend/Naturkundemuseum.jpg",
          "heading": "Naturkundemuseum Karlsruhe",
          "text": "Das Naturkundemuseum Karlsruhe ist eines der bedeutendsten naturwissenschaftlichen Museen in Deutschland. Es zeigt Sammlungen aus Zoologie, Geologie und Paläontologie und verbindet wissenschaftliche Forschung mit interaktiven Ausstellungen."
        },

        // --- Bebauungsmöglichkeiten ---
        {
          "image": "/images/legend/Kapellenstrasse_56.jpg",
          "heading": "Wohnungen",
          "text": "Die Wohnungen sind von realen Karlsruher Gebäuden inspiriert, insbesondere von der Fassade der Kapellenstraße 56."
        },
        {
          "image": "/images/legend/Waldhornstrasse_38.jpg",
          "heading": "Wohnungen",
          "text": "Die Wohnungen sind von realen Karlsruher Gebäuden inspiriert, insbesondere vom Dach der Waldhornstraße 38."
        },
        {
          "image": "/images/legend/Galeria.jpg",
          "heading": "Kaufhaus",
          "text": "Die Galeria Karlsruhe ist ein bekanntes Kaufhaus im Stadtzentrum. Mit ihrer markanten Architektur dient sie als Vorlage für den Kaufhaus-Baublock."
        },
        {
          "image": "/images/legend/ZKM_Karlsruhe.jpg",
          "heading": "Museum",
          "text": "Das ZKM Karlsruhe ist ein einzigartiges Kulturinstitut für Kunst, Medien und Technologie. Sein markantes Gebäude dient als Vorlage für den Baublock ‚Museum‘."
        },
        {
          "image": "/images/legend/Badische_Landesbibliothek.jpg",
          "heading": "Bibliothek",
          "text": "Die Badische Landesbibliothek in Karlsruhe ist eine der bedeutendsten wissenschaftlichen Bibliotheken Baden-Württembergs."
        },
        {
          "image": "/images/legend/KIT_Fakultaet_fuer_Architektur.jpg",
          "heading": "Schule",
          "text": "Die Fakultät für Architektur am KIT diente als Vorlage für diesen Baublock."
        },
        {
          "image": "/images/legend/Das_Nest.jpg",
          "heading": "Kindergarten",
          "text": "Inspiriert von der Krippe ‚Das Nest‘ auf dem Gelände des Kinderhauses Kunterbunt."
        },
        {
          "image": "/images/legend/Synagoge_Karlsruhe.jpg",
          "heading": "Gotteshaus",
          "text": "Die Synagoge Karlsruhe ist das religiöse Zentrum der jüdischen Gemeinde in der Stadt."
        },
        {
          "image": "/images/legend/DITIB_Moschee.jpg",
          "heading": "Gotteshaus",
          "text": "Die DITIB Moschee Karlsruhe ist ein religiöses und kulturelles Zentrum für die muslimische Gemeinde."
        },
        {
          "image": "/images/legend/St_Stephan_Kirche.jpg",
          "heading": "Gotteshaus",
          "text": "Die katholische Kirche St. Stephan mit ihrer beeindruckenden Kuppelarchitektur dient ebenso als Vorlage für den Baublock ‚Gotteshäuser‘."
        },
        {
          "image": "/images/legend/Garten_der_Religionen.jpg",
          "heading": "Gotteshaus",
          "text": "Der Garten der Religionen in Karlsruhe steht für interreligiösen Dialog und diente als Inspiration für einige Bebauungsmöglichkeiten von Gotteshäusern."
        }
      ]
    };
  },
  computed: {
    isLegendActive() {
      return this.$store.state.legend;
    },
    isIkonischeGebaeude() {
      // Die ersten 7 Slides sind ikonische Gebäude
      return this.currentIndex < 7;
    }
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
