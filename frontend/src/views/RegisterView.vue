<template>
  <div class="about">
    <form @submit="handleSubmit">
      <input type="text" name="email" placeholder="EMail" />
      <input type="text" name="name" placeholder="Name" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Register</button>
      <a href="/login">Login</a>
    </form>
  </div>
</template>

<script lang="ts">
const handleSubmit = async (e: Event) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);

  const res = await fetch("http://localhost:8081/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
    }),
  });
  const data = await res.json();

  if (data.id > 0) {
    document.cookie = `user=${data}`;
    window.location.href = "/";
  }
};

export default {
  name: "RegisterView",
  components: {},
  data() {
    return {
      handleSubmit,
    };
  },
};
</script>

<style>
.about {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about form {
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

.about form input {
  height: 40px;
  width: 300px;
  padding: 0 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.about form button {
  height: 40px;
  width: 300px;
  background-color: #000;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
</style>
