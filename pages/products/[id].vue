<template>
  <div>
    <h1>{{ id }} Samsung Galaxy</h1>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const id = 1; //route.params.id;
</script>
