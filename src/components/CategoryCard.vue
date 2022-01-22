<template>
  <div 
    :class="['category-card', getCategory(category.category_type)]"
  >
    <img 
      height="180px" 
      width="180px" 
      :src="category.image" 
      :alt="'Imagen ' + category.name.esp"
    >
    <h1>{{ category.name.esp }}</h1>
    <p>${{ toDollar(category.suggested_budget) }} <span>USD</span></p>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  methods: {
    toDollar(cent) {
      return cent/100
    },
    getCategory(category){
      switch (category) {
        case 1:
          return "normal"
        case 2:
          return "libre"
        case 3:
          return "personalizado"
        default:
          break;
      }
    }
  }
}
</script>

<style scoped>
.category-card {
  border-bottom: 4px solid;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  display: block;
  margin: 0 auto;
  padding: 20px 5px;
  transition: 0.3s;
  width: 236px;
}

.category-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.normal {
  border-color: var(--normal-color);
}

.libre {
  border-color: var(--free-color);
}

.personalizado {
  border-color: var(--personalized-color);
}

img {
  max-height: 180px;
  max-width: 180px;
}

h1 {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  margin: .6rem 0;
}

h1:first-letter {
  text-transform: capitalize;
}

p {
  font-size: 1.4rem;
}

p > span {
  font-size: 1rem;
  font-weight: 600;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .category-card {
    width: 248px;
  }
}
</style>