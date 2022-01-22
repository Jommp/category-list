<template>
  <div 
    id="category-list"
  >
    <template v-if="loadingCategories">
      <p>Cargando categorias... <span class="loader"></span></p>
    </template>

    <div 
      class="grid"
      v-else-if="categories.length > 0"
    >
      <CategoryCard 
        v-for="category in categories"
        :key="category.uuid4"
        :category="category"
      />
    </div>

    <template v-else>
      <p>{{ errorMessage }}</p>
    </template>
  </div>
</template>

<script>
import CategoryCard from '@/components/CategoryCard.vue'
export default {
  name: 'CategoryList',
  props: {
    loadingCategories: {
      type: Boolean,
      default: true
    },
    categories: {
      type: Array,
      default: () => []
    },
    errorMessage: {
      type: String,
      default: 'Error inesperado'
    }
  },
  components: {
    CategoryCard
  }
}
</script>

<style scoped>
p {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.loader {
  border: 5px solid var(--color-text);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  margin-left: 10px;
  height: 36px;
  width: 36px;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  #category-list .grid { 
    grid-template-columns: repeat(2, 1fr); 
  }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  #category-list .grid { 
    grid-template-columns: repeat(3, 1fr); 
  }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  #category-list .grid { 
    grid-template-columns: repeat(4, 1fr); 
  }
}
</style>