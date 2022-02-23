<template>
  <div class="v-table">
    <div class="v-table__header">
      <p @click="sortByName">
        Username
        <i class="material-icons">unfold_more</i>
      </p>
      <p @click="sortByEmail">
        Email
        <i class="material-icons">unfold_more</i>
      </p>
      <p @click="sortByRating">
        Rating
        <i class="material-icons">unfold_more</i>
      </p>
      <p @click="sortByRegDate">
        Ragistration date
        <i class="material-icons">unfold_more</i>
      </p>
    </div>
    
    <div class="v-table__body">
      <v-table-row
        v-for="row in paginatedUsers"
        :key="row.id"
        :row_data="row"
      />
    </div>

    <div class="v-table__pagination">
      <div
        class="page"
        v-for="page in pages"
        :key="page"
        :class="{ page__selected: page === pageNumber }"
        @click="pageClick(page)"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import vTableRow from "./v-table-row";
export default {
  name: "v-table",
  components: {
    vTableRow,
  },
  props: {
    users_data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      usersPerPage: 10,
      pageNumber: 1,
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.users_data.length / this.usersPerPage);
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.users_data.slice(from, to);
    },
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
    sortByName() {
      this.users_data.sort((a, b) => a.username.localeCompare(b.username));
    },
    sortByEmail() {
      this.users_data.sort((a, b) => a.email.localeCompare(b.email));
    },
    sortByRating() {
      this.users_data.sort((a, b) => a.rating < b.rating ? 1 : -1);
    },
    sortByRegDate() {
      this.users_data.sort((a, b) => a.registration_date < b.registration_date ? 1 : -1);
    },
  },
};
</script>

<style>
.v-table {
  max-width: 1000px;
  margin: 0 auto;
}
.v-table__header {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #e7e7e7;
}
.v-table__header p {
  display: flex;
  align-content: center;
  flex-basis: 25%;
  text-align: left;
  cursor: pointer;
}
.v-table__pagination {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
}
.page {
  margin-right: 5px;
  padding: 10px;
  border: 1px solid #e7e7e7;
}
.page:hover {
  background-color: #d6f1bc;
}
.page__selected {
  background-color: #b2f574;
}
</style>
