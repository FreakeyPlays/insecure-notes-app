<template>
  <div class="notes">
    <h1>Notes</h1>
    <div class="control">
      <button>Add Note</button>
      <input type="text" placeholder="Search" />
    </div>
    <div class="note" v-for="note in notes" :key="note.id">
      <h2>{{ note.title }}</h2>
      <p>{{ note.text }}</p>
      <div class="note_control">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
const notes: Array<undefined> = [];

export default {
  name: "NotesView",
  components: {},
  data() {
    return {
      notes,
    };
  },
  // methods: {
  //   async getData() {
  //     const res = await fetch("http://localhost:8081/note/user/" + 3);
  //     const data = await res.json();
  //     this.notes = data;
  //   },
  // },
  // mounted() {
  //   this.getData();
  // },
};
</script>

<style>
.notes {
  padding: 16px;
}

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

.control {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.control button {
  height: 32px;
  width: 128px;
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
}

.control input {
  height: 32px;
  width: 300px;
  padding: 0 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
