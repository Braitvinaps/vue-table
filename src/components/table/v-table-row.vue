<template>
  <div class="v-table-row">
    <div class="row row__username">{{ row_data.username }}</div>
    <div class="row row__email">{{ row_data.email }}</div>
    <div class="row row__rating">{{ row_data.rating }}</div>
    <div class="row row__registration-date">
      {{
        row_data.registration_date.slice(0, 10).split("-").reverse().join(".")
      }}
    </div>
  </div>
</template>

<script>
export default {
  name: "v-table-row",
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style>
.v-table-row {
  display: flex;
  justify-content: space-around;
}
.row {
    flex-basis: 35%;
    padding-top: 12px;
    text-align: left;
}
</style>