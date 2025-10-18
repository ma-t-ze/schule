<template>
  <div class="login-container">
    <div class="login-form">
    <input type="text" v-model="username" placeholder="Username">
    <input type="password" v-model="password" placeholder="Password">
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
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.username,
                password: this.password
            })
        });

        // Log that connection is successful
        // console.log('Connection successful!');

        // Read the response text
        const text = await response.text();
  
        // console.log('Response:', text);

        // Check the response text
        if (text.includes("true")) {
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
</style>
