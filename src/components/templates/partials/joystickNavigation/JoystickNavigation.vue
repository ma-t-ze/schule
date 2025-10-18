<template>
    <div id="joystick-container" ref="joystickContainer"></div>
  </template>
  
  <script>
  import nipplejs from "nipplejs";
  
  export default {
    name: "JoystickNavigation",
    props: {
      onMove: Function, // Callback for when the joystick moves
      onEnd: Function, // Callback for when joystick movement ends
    },
    mounted() {
      const options = {
        zone: this.$refs.joystickContainer,
        mode: "static",
        position: { left: "50%", bottom: "20%" },
        color: "blue",
      };
  
      const manager = nipplejs.create(options);
  
      // Bind events
      manager.on("move", (evt, data) => {
        if (this.onMove) this.onMove(data);
      });
  
      manager.on("end", () => {
        if (this.onEnd) this.onEnd();
      });
    },
  };
  </script>
  
  <style>
  #joystick-container {
    position: absolute;
    bottom: 1000px;
    left: 1000px;
    width: 100px;
    height: 100px;
  }
  </style>
  