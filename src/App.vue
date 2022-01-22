<template>
  <div id="app">
    <section id="actions">
      <ActionButtons
        @searchCategory="findCategory($event)"
        @noSearching="categories = allCategories"
      />
    </section>

    <section id="categories">
      <CategoryList 
        :categories="categories"
        :loadingCategories="loadingCategories"
        :errorMessage="errorMessage"
      />
    </section>
  </div>
</template>

<script>
import ActionButtons from './components/ActionButtons.vue'
import CategoryList from './components/CategoryList.vue'
import CategoryService from './services/CategoryService.js'

export default {
  name: 'App',
  components: {
    ActionButtons,
    CategoryList
  },
  data() {
    return {
      categories: [],
      allCategories: [],
      loadingCategories: true,
      errorMessage: ''
    }
  },
  created() {
    this.fetchCategories()
  },
  methods: {
    async fetchCategories() {
      await CategoryService.getCategories()
      .then( response => {
        if (response.status === 'bad') {
          this.errorMessage = response.error
          console.log('ERROR: ', response.error)
        } else {
          this.categories = response.data
          this.allCategories = response.data
        }
      })
      .catch(error => {
        this.errorMessage = 'Hubo un error inesperado, intentalo mas tarde.'
        console.log('ERROR: ', error)
      })
      this.loadingCategories = false
    },
    findCategory(term) {
      var finded = this.filterItems(term)
      this.categories = finded
      if(finded.length <= 0) {
        this.errorMessage = 'No se encontraron coincidencias.'
      }
    },
    filterItems(term) {
      return this.allCategories.filter((category) =>
        category.name.esp.toLowerCase().indexOf(term.toLowerCase()) > -1
      )
    }
  }
}
</script>

<style>
:root {
  --color-text: #2C3E50;
  --primary-color: #0F6CAC;

  --normal-color: #14A0F8;
  --free-color: #23C872;
  --personalized-color: #FD7576;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0
}

#app {
  color: var(--color-text);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  padding: 40px 10px;
  text-align: center;
}

section {
  margin: 40px auto;
}

.flex,
.grid {
  margin: auto;
  max-width: 1200px;
}

input,
button {
  height: 36px;
}

.flex {
  display: flex;
}

.grid {
  display: grid;
  grid-gap: 1.5rem 1rem;
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {}
</style>
