<template>
  <div class="notes">
    <h1>
      Notes<span v-if="query"> - <span v-html="query"></span></span>
    </h1>

    <div class="control">
      <input type="text" placeholder="Search" v-model="query" @input="search" />
      <a href="/login" @click="logout">Logout</a>
    </div>
    <NoteModel
      v-on:delete-note="deleteNote"
      v-on:update-note="updateNote"
      v-for="note in filteredNotes"
      :key="note.id"
      :note="note"
    />
    <CreateNote
      v-on:create-note="createNote"
      :userId="getLoggedInUser('user').id"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NoteModel from "../components/noteModel.vue";
import CreateNote from "../components/createNote.vue";

export default defineComponent({
  name: "NotesView",
  components: { NoteModel, CreateNote },
  data() {
    return {
      notes: new Object() as { id: number; title: string; text: string }[],
      filteredNotes: new Object() as {
        id: number;
        title: string;
        text: string;
      }[],
      query: "",
    };
  },
  methods: {
    logout() {
      document.cookie = "user=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    },
    getCookie(cname: string) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    getLoggedInUser(name: string) {
      const cookie = this.getCookie(name);
      const user = JSON.parse(cookie);
      return user;
    },
    async createNote(newNote: { id: number; title: string; text: string }) {
      try {
        const res = await fetch(`http://localhost:8081/note`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newNote),
        });
        const data = await res.json();

        this.notes.push(data);
      } catch (e) {
        console.error(e);
      }
    },
    deleteNote(id: number) {
      try {
        fetch(`http://localhost:8081/note/${id}`, {
          method: "DELETE",
        });

        this.notes.splice(
          this.notes.findIndex((note) => note.id === id),
          1
        );
      } catch (e) {
        console.error(e);
      }
    },
    updateNote(update: { id: number; title: string; text: string }) {
      try {
        fetch(`http://localhost:8081/note`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(update),
        });
      } catch (e) {
        console.error(e);
      }
    },
    search(e: Event | undefined) {
      if (e) {
        this.query = (e.target as HTMLInputElement).value;
      }

      var newurl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?search=" +
        this.query;
      window.history.pushState({ path: newurl }, "", newurl);

      if (this.query && this.query !== "") {
        this.filteredNotes = this.notes.filter((note) => {
          return (
            note.title.toLowerCase().includes(this.query.toLowerCase()) ||
            note.text.toLowerCase().includes(this.query.toLowerCase())
          );
        });
      } else {
        this.filteredNotes = this.notes;
      }
    },
  },
  async mounted() {
    if (!document.cookie.includes("user")) {
      window.location.href = "/login";
    }

    if (this.$route.query.search) {
      this.query = this.$route.query.search as string;
      this.search(undefined);
      // <img src=1 href=1 onerror="javascript:alert(document.cookie)"></img>
    }

    try {
      const user = this.getLoggedInUser("user");

      if (!("id" in user)) {
        throw Error("Invalid user");
      }

      const res = await fetch(`http://localhost:8081/note/user/${user.id}`);
      const data = await res.json();
      this.notes = data;
      this.filteredNotes = this.notes;
    } catch (e) {
      console.error(e);
    }
  },
});
</script>

<style>
.notes {
  padding: 16px;
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
