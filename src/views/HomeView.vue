<template>
  <div class="home">
    <SearchBar />
    <ResultsSet />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar.vue";
import ResultsSet from "@/components/ResultsSet.vue";

export default {
  name: "HomeView",
  components: {
    SearchBar,
    ResultsSet,
  },
};
</script>
