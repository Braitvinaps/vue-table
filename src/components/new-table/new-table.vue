<template>
  <div>
    <div>
      <input
        type="text"
        class="search"
        placeholder="Search user"
        v-model="searchUser"
      />
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Rating</th>
          <th>Ragistration date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUser" v-bind:key="user.id">
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.rating }}</td>
          <td>
            {{
              user.registration_date.slice(0, 10).split("-").reverse().join(".")
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "newTable",
  data() {
    return {
      searchUser: "",
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
  },
};
</script>

<style>
.search {
  border: 1px solid #e7e7e7;
  margin-bottom: 15px;
  height: 25px;
  width: 30vw;
}
.table {
  margin: 0 auto;
  text-align: left;
}

td,
th {
  padding: 10px;
  border: 1px solid #e7e7e7;
}
</style>