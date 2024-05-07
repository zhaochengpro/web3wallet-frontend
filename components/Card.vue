<template>
    <div class="main-card">
        <div class="glass">
            <div class="assets-view">
                <h1>
                    ¥223,234,34.23
                </h1>
            </div>
            <el-divider></el-divider>
            <div class="accounts-view">
                <div class="account-item" v-for="item, index in accounts" :key="index">
                    <div class="wallet-address">
                        {{ formatWallet(item.address) }}
                        <SvgIcon :name="copyIndex === index ? 'copy-success' : 'copy'" class="w-12px h-12px cursor-pointer"
                            @click="copyText(item.address, index)"></SvgIcon>
                    </div>
                    <div class="address-value">
                        <NumberShow :number="item.assets_value" format="$0,0.[00]"></NumberShow>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const copyIndex = ref(-1)
const accounts = ref([
    {
        address: "0x1c5986cf76d1366455dd9cf1c926f5c1dab0e1cb",
        assets_value: 232341.232,
        url: randomAvatarUrl(12)
    },
    {
        address: "0xaD08f459b7b2C43DB463579D2FE203Ad25b8c294",
        assets_value: 2434.232
    },
    {
        address: "0x1c5986cf76d1366455dd9cf1c926f5c1dab0e1cb",
        assets_value: 232341.343
    }
])

function copyText(text, index) {
    copyIndex.value = index
    navigator.clipboard.writeText(text)
    setTimeout(() => {
      copyIndex.value = -1
    }, 1000)
  }
</script>

<style lang="scss">
.main-card {
    height: 70%;
    display: flex;
}

.glass {
    position: relative;
    width: 85%;
    height: 60vh;
    background: #fff;
    border: 1px solid rgba(255, 255, 255, 1);
    transition: 0.5s;
    border-radius: 10px;
    margin: auto;
    padding: 20px 0px;
    box-shadow: 0px 0px 20px #ccc;

    .assets-view {
        h1 {
            text-align: center;
            font-size: 36px;
            font-weight: 800;
        }

        height: 15%;
    }

    .accounts-view {
        width: 100%;
        height: 85%;

        .account-item {
            display: flex;
            justify-content: space-between;
            margin: 20px 0px;
            padding: 0px 10px;

            .wallet-address {
                font-size: 16px;
                font-weight: 400;
                svg {
                    
                }
            }

            .address-value {
                color: #ccc;
            }
        }
    }
}

.container .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}

.container .glass svg {
    font-size: 2.5em;
    fill: #fff;
}
</style>