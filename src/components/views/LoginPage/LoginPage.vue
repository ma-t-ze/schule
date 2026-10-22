<template>
  <div class="login-container">
    <div class="login-form">
    <input type="text" v-model="username" placeholder="Username" autocomplete="username">
    <input type="password" v-model="password" placeholder="Password" autocomplete="current-password">
    <label class="remember"><input v-model="remember" type="checkbox"> 30 Tage angemeldet bleiben</label>
    <button @click="login">Login</button>
    <p v-if="error" style="color: red;">Incorrect username or password</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      remember: false,
      error: false,
      errorMessage: '',
      responseTexts: [],
    }
  },
  methods: {
    async login() {
      try {
        // Construct API URL
        const apiUrl = `${import.meta.env.VITE_GET_PROXY}/proxy.php`;

        // console.log('API URL:', apiUrl);

        // Send request to login.php
        const response = await fetch(apiUrl, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.username,
                password: this.password,
                remember: this.remember
            })
        });

        // Log that connection is successful
        // console.log('Connection successful!');

        // Read the response text
        const result = await response.json();
  
        // console.log('Response:', text);

        // Check the response text
        if (response.ok && result.success === true) {
          // Redirect to content page
          this.$store.dispatch('setIsAuthenticated');

          this.$router.push('/');
        } else {
          console.log('Login failed!'); // Log failed login
          this.error = true;
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import './style.scss';
.remember { display: flex; align-items: center; gap: 8px; margin: 16px 0; }
.remember input { width: auto; margin: 0; }
</style>
