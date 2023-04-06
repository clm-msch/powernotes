// stores/counter.js
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: '1',
          title: 'Bienvenue sur Powernotes',
          content: '...',
        },
      ],
    }
  },
  actions: {
    addNote(newNoteTitle, newNoteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString()
      let note = {
        id,
        title: newNoteTitle,
        content: newNoteContent,
      }
      this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete)
    },
  }
})
