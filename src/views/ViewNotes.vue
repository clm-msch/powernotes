<template>
  <div class="notes">

    <div class=" mx-auto mb-4 bg-secondary rounded-lg shadow-md p-6">
      <div class="mb-4">
        <textarea class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none" placeholder="Ta prochaine idée de génie, une tâche ou ta liste de course..."></textarea>
      </div>
      <div class="flex justify-end">
        <button class="bg-primary hover:bg-primary_dark text-white font-bold py-2 px-4 rounded-lg mr-2">Ajouter une Note</button>
      </div>
    </div>

    <div 
    v-for="i in 3"
    class="w-full bg-secondary rounded-lg overflow-hidden shadow-md mb-4">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Note 1</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur cumque, soluta itaque corporis voluptatem, temporibus reiciendis, numquam molestiae nam ducimus nulla nihil? Quasi minima provident sit? Aliquam consequuntur reprehenderit officia!
        </p>
      </div>
      <div class="px-6 pt-4 pb-2 flex justify-end">
        <button class="bg-primary hover:bg-primary_dark text-white font-bold py-2 px-4 rounded-lg mr-2">Modifier</button>
        <button class=" border-2 border-primary text-primary hover:text-primary_dark hover:border-primary_dark font-bold py-1.5 px-4 rounded-lg">Suprimer</button>
      </div>
    </div>
    
  </div>
</template>