<script setup lang="ts">
import {reactive} from "vue";
import axios from "axios"



const userData = reactive({
    username: '',
    password: ''
});
const inputError = () => {
    console.log("wrong input")
}
const checkInput = () => {
    if(!userData.username || !userData.password){
        return false;
    } else {
        return true;
    }
}
const onButtonClick = (async() => {
    if(!checkInput()){
      inputError()
    }else {
      console.log(userData)
      await axios.post("/addUser", {
          data: userData
      });
    }
});

const checkConnection = (async () => {
  console.log("check touched");
  const response = await axios.get('http://localhost:3000/getUsers');
  console.log(response);
});

</script>

<template>
    <div class="flex justify-center items-center w-1/4 h-2/3 bg-[white]">
        <div class="flex flex-col gap-6 justify-center items-center">
            <h3 class="text-2xl">Login</h3>
            <div></div>
            <div></div>
            <div class="relative">
                <input id="username" type="text" v-model="userData.username" class="w-[250px] h-[35px] peer focus:outline-none border-2 border-black focus:border-sky-500 " placeholder=" "/>
                <label for="username" class="absolute left-1 -top-6 peer-placeholder-shown:top-1 peer-focus:-top-6 transition-all duration-75" >Username</label>
            </div>
            <div class="relative">
                <input id="password" type="password" v-model="userData.password" class="w-[250px] h-[35px] peer focus:outline-none border-2 border-black focus:border-sky-500 " placeholder=" "/>
                <label for="password" class="absolute left-1 -top-6 peer-placeholder-shown:top-1 peer-focus:-top-6 transition-all duration-75" >Password</label>
            </div>
            <div>
                <button @click="onButtonClick()" type="submit" class="border border-black hover:bg-[#F0F0F0] w-[75px] h-[35px]">Submit</button>
            </div>
            <div>
                <button @click="checkConnection()" class="border border-black"> CHECKING CONNECTION Back-end - DB - Front-end</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>