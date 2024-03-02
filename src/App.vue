<script setup lang="ts">
const showError = () => {
  console.log("wrong input")
}
const onButtonClick = () => {
  showError()
};

</script>

<template>
  <div class="flex justify-center items-center w-full h-[100vh] bg-[#F0F0F0]">

    <div class="flex justify-center items-center w-1/4 h-2/3 bg-[white]">
          <div class="flex flex-col gap-6 justify-center items-center">
                <h3 class="text-2xl">Login</h3>
                <div></div>
                <div></div>
                <div class="relative">
                    <input id="username" type="text" class="w-[250px] h-[35px] peer focus:outline-none border-2 border-black focus:border-sky-500 " placeholder=" "/>
                    <label for="username" class="absolute left-1 -top-6 peer-placeholder-shown:top-1 peer-focus:-top-6 transition-all duration-75" >Username</label>
                </div>
                <div class="relative">
                    <input id="password" type="password" class="w-[250px] h-[35px] peer focus:outline-none border-2 border-black focus:border-sky-500 " placeholder=" "/>
                    <label for="password" class="absolute left-1 -top-6 peer-placeholder-shown:top-1 peer-focus:-top-6 transition-all duration-75" >Password</label>
                </div>
                <div>
                    <button @click="onButtonClick()" class="border border-black hover:bg-[#F0F0F0] w-[75px] h-[35px]">Submit</button>
                </div>
          </div>
    </div>

  </div>
</template>

<style scoped>

</style>