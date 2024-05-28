<template>
  <div
    class="flex flex-col shadow-2xl max-w-md align-center justify-between border border-solid border-gray-200 bg-white dark:bg-gray-800 rounded-xl"
  >
    <p class="m-2">{{ formattedDate }}</p>
    <div class="flex justify-start items-center px-3 pt-4 mb-5 space-y-2.5">
      <Icon name="i-quill:chat" class="mr-5 text-4xl" />
      <p class="body-medium m-0 dark:text-gray-200" style="hyphens: auto">
        {{ review.comment }}
      </p>
    </div>
    <div
      class="flex space-x-1 bg-gray-50 dark:bg-gray-900/60 dark:text-gray-200 px-3 pt-3 pb-2.5 rounded-b-xl"
    >
      <div class="flex flex-col justify-center">
        <p class="heading-six m-0">{{ review.reviewerName }}</p>
        <p class="body-small m-0 mt-0.5">{{ review.reviewerEmail }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  review: {
    comment: string;
    reviewerName: string;
    reviewerEmail: string;
    date: string;
  };
}>();

const generateRandomDate = () => {
  const start = new Date(2020, 0, 1); // Дата начала
  const end = new Date(); // Текущая дата
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString(); // Возвращает строку в формате ISO
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(date);
};

// Для демонстрации заменим review.date на случайную дату
const randomDate = generateRandomDate();
const formattedDate = formatDate(randomDate);
</script>
