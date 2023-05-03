<template>
  <div class="login">
    <form @submit="handleSubmit">
      <input type="text" name="email" placeholder="EMail" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
      <a href="/register">Register</a>
    </form>
  </div>
</template>

<script lang="ts">
const handleSubmit = async (e: Event) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  console.log(formData.get("email"));
  const res = await fetch("http://localhost:8081/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
  });
  const data = await res.json();
  console.log(data);
};

export default {
  name: "LoginView",
  components: {},
  data() {
    return {
      handleSubmit,
    };
  },
};
</script>

<style>
.login {
  height: 100%;
  width: 100%;
}

.login form {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

.login form input {
  height: 40px;
  width: 300px;
  padding: 0 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login form button {
  height: 40px;
  width: 300px;
  background-color: #000;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
</style>
