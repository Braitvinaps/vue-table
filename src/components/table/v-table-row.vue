<template>
  <div class="v-table-row">
      <div class="row__username">{{row_data.username}}</div>
      <div class="row__email">{{row_data.email}}</div>
      <div class="row__rating">{{row_data.rating}}</div>
      <div class="row__registration-date">{{row_data.registration_date}}</div>
  </div>
</template>

<script>
export default {
    name: "v-table-row",
    props: {
        row_data: {
            type: Object,
            default: () => {
                return {}
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
    .v-table-row {
        display: flex;
        justify-content: space-around;
    }
</style>