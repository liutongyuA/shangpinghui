<template>
  <div>
    <Card></Card>
    <Sale></Sale>
    <Observe></Observe>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Sale from "./Sale";
import Card from "./Card";
import Observe from "./Observe";
export default {
  name: "Dashboard",
  components: {
    Card,
    Sale,
    Observe,
  },
  computed: {
    //能拿到登录用户
    ...mapGetters(["name"]),
  },
};
</script>

<style  scoped>
</style>
