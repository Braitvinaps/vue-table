<template>
  <div id="app">
    <h1>USER TABLE</h1>
    <new-table :users_data="USERS"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NewTable from './components/new-table/new-table.vue';

export default {
  name: "App",
  components: {
    NewTable,
  },
  data: () => {
    return {
      
    };
  },
  computed: {
    ...mapGetters(["USERS"]),
  },
  methods: {
    ...mapActions(["GET_USERS_FROM_API"]),
  },
  mounted() {
    this.GET_USERS_FROM_API()
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
