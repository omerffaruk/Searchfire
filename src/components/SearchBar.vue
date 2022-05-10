<template>
  <div class="search__container">
    <input
      @keyup="fetchProducts(`${$event.target.value}`)"
      type="search"
      placeholder="Search"
      v-model="search"
      class="search__input"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapActions(["fetchProducts"]),
  },
};
</script>

<style lang="scss"></style>
