<template>
  <div
  class="w-full bg-secondary rounded-lg overflow-hidden shadow-md mb-4"
>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{ note.title }}</div>
    <p class="text-gray-700 text-base">
      {{ note.content }}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2 flex justify-end">
    <button
      class="bg-primary hover:bg-primary_dark text-white font-bold py-2 px-4 rounded-lg mr-2"
    >
      Modifier
    </button>
    <button
      class="border-2 border-primary text-primary hover:text-primary_dark hover:border-primary_dark font-bold py-1.5 px-4 rounded-lg"
    >
      Suprimer
    </button>
  </div>
</div>
</template>

<script setup>

/*
props
*/

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})
</script>