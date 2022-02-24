<template>
  <div class="container">
    <div class="table-search">
      <input
        type="text"
        class="search"
        placeholder="Search by username or email"
        v-model="searchUser"
      />
    </div>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th @click="sorting = 'name'">Username</th>
            <th @click="sorting = 'email'">Email</th>
            <th @click="sorting = 'rating'">Rating</th>
            <th @click="sorting = 'date'">Ragistration date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in paginatedUsers" v-bind:key="user.id">
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.rating }}</td>
            <td>
              {{
                user.registration_date
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join(".")
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-pagination">
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
export default {
  name: "newTable",
  data() {
    return {
      searchUser: "",
      sorting: "date",
      usersPerPage: 10,
      pageNumber: 1,
    };
  },
  props: {
    users_data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  computed: {
    filteredUser() {
      return this.users_data.filter((user) => {
        return (
          user.username.toLowerCase().indexOf(this.searchUser.toLowerCase()) !==
            -1 ||
          user.email.toLowerCase().indexOf(this.searchUser.toLowerCase()) !== -1
        );
      });
    },
    sortingUsers() {
      switch (this.sorting) {
        case "name":
          return this.filteredUser.sort((a, b) =>
            a.username.localeCompare(b.username)
          );
        case "email":
          return this.filteredUser.sort((a, b) =>
            a.email.localeCompare(b.email)
          );
        case "rating":
          return this.filteredUser.sort((a, b) =>
            a.rating < b.rating ? 1 : -1
          );
        case "date":
          return this.filteredUser.sort((a, b) =>
            a.registration_date < b.registration_date ? 1 : -1
          );
      }
    },
    pages() {
      return Math.ceil(this.sortingUsers.length / this.usersPerPage);
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.sortingUsers.slice(from, to);
    },
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
  },
};
</script>

<style scoped>

.container {
  margin-top: 50px;
}

.table table {
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
  text-align: left;
}
.table th {
  font-weight: bold;
  padding: 5px;
  background: #d6f1bc;
  border: 1px solid #dddddd;
}
.table td {
  border: 1px solid #dddddd;
  padding: 5px;
}

.search {
  border: 1px solid #dddddd;
  margin-bottom: 30px;
  padding: 8px;
  height: 25px;
  font-size: 16px;
  width: 80%;
}

.table-pagination {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
}
.page {
  margin-right: 8px;
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