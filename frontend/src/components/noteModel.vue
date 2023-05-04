<template>
  <div class="note">
    <h2 id="title" :contenteditable="editMode">{{ note.title }}</h2>
    <p id="text" :contenteditable="editMode">{{ note.text }}</p>
    <div class="note_control">
      <button @click="deleteNote">Delete</button>
      <button v-show="!editMode" @click="editNote">Edit</button>
      <button v-show="editMode" @click="saveNote">Save</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "noteModel",
  props: ["note"],
  data() {
    return {
      editMode: false,
    };
  },
  methods: {
    editNote() {
      this.editMode = true;
    },
    saveNote() {
      this.editMode = false;
      const update = {
        id: this.note.id,
        title: this.$el.querySelector("#title").innerHTML,
        text: this.$el.querySelector("#text").innerHTML,
      };
      this.$emit("update-note", update);
    },
    deleteNote() {
      this.$emit("delete-note", this.note.id);
    },
  },
});
</script>

<style>
.note {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin: 8px 0;
}

.note h2 {
  margin-bottom: 8px;
}

.note p {
  margin-bottom: 8px;
}

.note_control {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.note_control button {
  height: 32px;
  width: 128px;
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
}
</style>
