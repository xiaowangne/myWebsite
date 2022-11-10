<template>
    <header id="header">
        <div class="header-main-pc main">
            <h1 class="logo">
                <a href="/" class=" tlt" ref="title" data-in-effect="bounceInDown">
                    website
                </a>
            </h1>
        </div>
        <XyzTransition appear xyz="fade back down-100% ">
            <div class="square" v-if="toggled">12222s</div>
        </XyzTransition>

    </header>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const title = ref(null);
const toggled = true
onMounted(() => {

})
</script>