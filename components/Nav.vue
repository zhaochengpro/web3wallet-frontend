<template>
    <div class="nav">
        <div class="navigation-card">
            <a href="#" class="tab" @click="toLink('/')">
                <SvgIcon name="home" class="w-50px h-50px"></SvgIcon>
            </a>

            <a href="#" class="tab" @click="toLink('/setting')">
                <SvgIcon name="setting" class="w-50px h-50px"></SvgIcon>
            </a>
        </div>

    </div>

</template>

<script setup>
const emit = defineEmits(['toLink'])
function toLink(path) {
    emit('toLink', path)
}
</script>

<style lang="scss">
.nav {
    // position: fixed;
    // bottom: 10vh;
    display: flex;
    width: 100vw;
    height: 10%;
}

.navigation-card {
    width: 90%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 30px;
    background-color: rgb(255, 255, 255);
    padding: 15px 20px;
    border-radius: 10px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    margin: 0px auto;
}

.tab {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 3rem;
    height: 3rem;
    overflow: hidden;
    background-color: rgb(252, 252, 252);
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s;
}
</style>