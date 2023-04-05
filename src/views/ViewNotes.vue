<template>
	<div class="notes">
		<div class="mx-auto mb-4 bg-secondary rounded-lg shadow-md p-6">
			<div class="mb-4">
				<input
        v-model="newNoteTitle"
					class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight mb-2"
					placeholder="Ta prochaine idée de génie, une tâche ou ta liste de course..."
					type="text"
          ref="newNoteRef"
				/>
				<textarea
        v-model="newNoteContent"
					class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline h-32 resize-none"
          placeholder="Rentre dans le détail de ta note"
				></textarea>
			</div>
			<div class="flex justify-end">
				<button
          @click="addNote"
          :disabled="!newNoteTitle"
					class="bg-primary hover:bg-primary_dark text-white font-bold py-2 px-4 rounded-lg mr-2"
				>
					Ajouter une Note
				</button>
			</div>
		</div>

    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
			@deleteClicked="deleteNote"
    />
	</div>
</template>

<script setup>
/*
import 
*/
import { ref } from "vue"
import Note from "@/Notes/Note.vue"
/*
notes
*/

const newNoteTitle = ref('')
const newNoteContent = ref('')
const newNoteRef = ref(null)

const notes = ref([
])

const addNote = () => {
  let currentDate = new Date().getTime(),
  id = currentDate.toString()
  let note = {
    id,
    title: newNoteTitle.value,
    content: newNoteContent.value
  }
  notes.value.unshift(note)
  newNoteTitle.value = ''
  newNoteContent.value = ''

  newNoteRef.value.focus()
}


/*
	delete note
*/

const deleteNote = (idToDelete) => {
	notes.value = notes.value.filter(note => note.id !== idToDelete)
}
</script>
