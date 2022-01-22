<template>
  <div 
    id="action-buttons"
    class="flex"
  >
    <div class="search-category">
      <input 
        type="text" 
        placeholder="Buscar categoría"
        v-model="searchValue"
        @keyup="evaluateInput()"
        autocomplete="off"
      >
      <button @click="cleanSearch()">
        <i 
          :class="['fa', searchValue != '' ? 'fa-times' : 'fa-search']" 
        />
      </button>
    </div>

    <div class="tags">
      <div class="tag">
        <div class="circle"></div>
        Normal
      </div>
      <div class="tag">
        <div class="circle"></div>
        Libre
      </div>
      <div class="tag">
        <div class="circle"></div>
        Personalizada
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActionButtons',
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    evaluateInput() {
      const searchTerm = this.searchValue
      if (searchTerm.length >= 1) {
        this.$emit('searchCategory', searchTerm)
      } else {
        this.$emit('noSearching')
      }
    },
    cleanSearch() {
      this.searchValue = ''
      this.$emit('noSearching')
    }
  }
}
</script>

<style scoped>
#action-buttons {
  flex-direction: column;
}

.search-category input {
  border: 3px solid var(--primary-color);
  border-right: none;
  border-radius: 5px 0 0 5px;
  color: var(--color-text);
  padding: .8rem;
  width: 90%;
}

.search-category input:focus {
  color: var(--primary-color);
}

.search-category button {
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 0 5px 5px 0;
  color: #FFFFFF;
  cursor: pointer;
  text-align: center;
  width: 10%;
}

.tags {
  display: flex;
  justify-content: space-between;
  margin: .8rem 0;
}

.tag {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .9rem;
}

.circle {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 4px;
}

.tag:nth-child(1) {
  color: var(--normal-color);
}

.tag:nth-child(1) .circle {
  background-color: var(--normal-color);
  border-color: var(--normal-color);
}

.tag:nth-child(2) {
  color: var(--free-color);
}

.tag:nth-child(2) .circle {
  background-color: var(--free-color);
  border-color: var(--free-color);
}

.tag:nth-child(3) {
  color: var(--personalized-color);
}

.tag:nth-child(3) .circle {
  background-color: var(--personalized-color);
  border-color: var(--personalized-color);
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .tags {
    justify-content: space-around;
  }

  .tag {
    font-size: 1rem;
  }

  .circle {
    margin-right: 10px;
  }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  #action-buttons {
    flex-direction: row;
  }

  .search-category {
    width: 50%;
  }
  
  .tags {
    width: 50%;
  }
}
</style>