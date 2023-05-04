<template>
  <div class="note">
    <h2 id="title" contenteditable>{{ "Type a title here" }}</h2>
    <p id="text" contenteditable>{{ "Type a text here" }}</p>
    <div class="note_control">
      <button @click="createNote">Create Note</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreateNote",
  props: ["userId"],
  data() {
    return {
      defaultTitle: "Type a title here",
      defaultText: "Type a text here",
    };
  },
  methods: {
    createNote() {
      const note = {
        title: this.$el.querySelector("#title").innerHTML,
        text: this.$el.querySelector("#text").innerHTML,
        userId: this.userId,
      };
      this.$emit("create-note", note);
    },
  },
});
</script>

<style></style>
