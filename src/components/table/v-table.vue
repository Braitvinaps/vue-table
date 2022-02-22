<template>
  <div class="v-table">
      <div class="v-table__header">
          <p>Username</p>
          <p>Email</p>
          <p>Rating</p>
          <p>Ragistration date</p>
      </div>
      <div class="v-table__body">
          <v-table-row 
            v-for="row in users_data"
            :key="row.id"
            :row_data="row"
          />
      </div>
  </div>
</template>

<script>
import vTableRow from "./v-table-row"
export default {
    name: "v-table",
    components: {
        vTableRow
    },
    props: {
        users_data: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {}
    },
    computed: {}
}
</script>

<style>
    .v-table {
        max-width: 900px;
        margin: 0 auto;
    }
    .v-table__header {
        display: flex;
        justify-content: space-around;
    }
</style>
