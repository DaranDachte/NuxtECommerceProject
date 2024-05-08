<template>
  <div>
    <h1>{{ productId }} Samsung Galaxy</h1>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const id = route.params.id;
</script>
