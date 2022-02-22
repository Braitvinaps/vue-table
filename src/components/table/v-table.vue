<template>
  <div class="v-table">
      <div class="v-table__header">
          <p>Username</p>
          <p>Email</p>
          <p>Rating</p>
          <p>Ragistration date</p>
      </div>
  </div>
</template>

<script>
export default {
    name: "v-table",
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
