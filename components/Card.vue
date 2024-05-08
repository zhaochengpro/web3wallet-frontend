<template>
    <div class="main-card">
        <div class="glass">
            <div class="assets-view">
                <span v-show="isMore">
                    {{ formatWallet("0x1c5986cf76d1366455dd9cf1c926f5c1dab0e1cb") }}
                    <SvgIcon :name="copyIndex === index ? 'copy-success' : 'copy'"
                            class="w-12px h-12px cursor-pointer" @click="copyText(item.address, index)"></SvgIcon>
                </span>
                <h1 :class="isMore ? 'more':''">
                    ¥223,234,34.23
                </h1>
            </div>
            <el-divider></el-divider>
            <div class="accounts-view">
                <div v-show="isMore" class="account-item more" v-for="item, index in addressDetail" :key="index">
                    <div class="wallet-address">
                        <SvgIcon :name="'icons-' + item.chain" class="w-40px h-40px"></SvgIcon>
                        <h3>
                            {{ 
                            item.name
                         }}
                        </h3>

                    </div>
                    <div class="address-value">
                        <NumberShow :number="item.assets_value" format="$0,0.[00]"></NumberShow>
                    </div>
                </div>
                <div v-show="!isMore" class="account-item" v-for="item, index in accounts" :key="index" @click="showMore()">
                    <div class="wallet-address">
                        <img :src="item.url" alt="">
                        <div class="wallet-address-main">
                            <div>
                                {{ formatWallet(item.address) }}
                                <SvgIcon :name="copyIndex === index ? 'copy-success' : 'copy'"
                            class="w-12px h-12px cursor-pointer" @click="copyText(item.address, index)"></SvgIcon></div>
                            <div class="chain-view-short">
                                <SvgIcon :name="'icons-' + chain" class="w-14px h-14px" v-for="chain, key in item.chains" :key="key"></SvgIcon>
                            </div>

                        </div>
                    </div>
                    <div class="address-value">
                        <NumberShow :number="item.assets_value" format="$0,0.[00]"></NumberShow>
                    </div>
                </div>
            </div>
        </div>
        <Nav />
    </div>
</template>

<script setup>

const copyIndex = ref(-1)
const isMore = ref(false)
const accounts = ref([
    {
        address: "0x1c5986cf76d1366455dd9cf1c926f5c1dab0e1cb",
        assets_value: 232341.232,
        url: randomAvatarUrl(30),
        chains:["avax", "base", "cronos", "ethereum", "op"]
    },
    {
        address: "0xaD08f459b7b2C43DB463579D2FE203Ad25b8c294",
        assets_value: 2434.232,
        url: randomAvatarUrl(30),
        chains:["avax", "base", "cronos", "ethereum", "op"]
    },
    {
        address: "0x1c5986cf76d1366455dd9cf1c926f5c1dab0e1cb",
        assets_value: 232341.343,
        url: randomAvatarUrl(30),
        chains:["avax", "base", "cronos", "ethereum", "op"]
    },
    {
        address: "0x1c5986cf76d1366455dd9cf1c926f5c1dab0e1cb",
        assets_value: 232341.343,
        url: randomAvatarUrl(30),
        chains:["avax", "base", "cronos", "ethereum", "op", "scroll"]
    },
    {
        address: "0x1c5986cf76d1366455dd9cf1c926f5c1dab0e1cb",
        assets_value: 232341.343,
        url: randomAvatarUrl(30),
        chains:["avax", "base", "cronos", "ethereum", "op", "starknet", "taiko", "oasys", "tomo", "meter"]
    },
    {
        address: "0x1c5986cf76d1366455dd9cf1c926f5c1dab0e1cb",
        assets_value: 232341.343,
        url: randomAvatarUrl(30),
        chains:["avax", "base", "cronos", "ethereum", "op"]
    },
    {
        address: "0x1c5986cf76d1366455dd9cf1c926f5c1dab0e1cb",
        assets_value: 232341.343,
        url: randomAvatarUrl(30),
        chains:["avax", "base", "cronos", "ethereum", "op", "klaytn", "bsc"]
    },
    {
        address: "0x1c5986cf76d1366455dd9cf1c926f5c1dab0e1cb",
        assets_value: 232341.343,
        url: randomAvatarUrl(30),
        chains:["avax", "base", "cronos", "ethereum", "op"]
    }, {
        address: "0x1c5986cf76d1366455dd9cf1c926f5c1dab0e1cb",
        assets_value: 232341.343,
        url: randomAvatarUrl(30),
        chains:["avax", "base", "cronos", "ethereum", "op"]
    },
    {
        address: "0x1c5986cf76d1366455dd9cf1c926f5c1dab0e1cb",
        assets_value: 232341.343,
        url: randomAvatarUrl(30),
        chains:["avax", "base", "cronos", "ethereum", "op"]
    }
])

const addressDetail = [
    {
        chain:"op",
        name:"OP",
        assets_value: 24342342.232
    },
    {
        chain:"aptos",
        name:"Aptos",
        assets_value: 24342342.232
    },
    {
        chain:"bsc",
        name:"BSC",
        assets_value: 24342342.232
    }
]

function copyText(text, index) {
    copyIndex.value = index
    navigator.clipboard.writeText(text)
    setTimeout(() => {
        copyIndex.value = -1
    }, 1000)
}

function showMore() {
    isMore.value = true;
}


</script>

<style lang="scss">
.main-card {
    height: 90%;
    display: flex;
    flex-direction: column;
}

.el-divider--horizontal {
    margin: 0;
}

.glass {
    position: relative;
    width: 90%;
    height: 90%;
    background: #fff;
    border: 1px solid rgba(255, 255, 255, 1);
    transition: 0.5s;
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    margin: auto;
    padding: 20px 0px 0px;
    box-shadow: 0px 0px 0px #ccc;

    .assets-view {
        padding: 0px 10px;
        h1 {
            transition: all 0.3s;
            text-align: center;
            font-size: 36px;
            font-weight: 800;
            &.more{
            text-align: left;
        }
        }

        height: 10%;



    }

    .accounts-view {
        width: 100%;
        height: 90%;
        font-size: 14px;
        overflow-y: scroll;
        scroll-behavior: smooth;

        // ::-webkit-scrollbar:
        // scrollbar-width: thin;
        // scrollbar-color:#7fa595 #7fa595;
        &::-webkit-scrollbar {
            width: 2px;
        }


        &::-webkit-scrollbar-thumb {
            border-radius: 25px;
            background-color: transparent;
        }

        .account-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            // margin: 20px 0px;
            padding: 20px 10px;

            &.more {
                padding: 10px;

                .wallet-address {
                    &>svg {
                        margin-left: 0px;
                        margin-right: 10px;
                    }
                }
            }

            &:hover {
                background: #ccc;

                .address-value {
                    color: #000;
                }
            }

            .wallet-address {
                font-weight: 600;
                display: flex;
                align-items: center;

                &>img {
                    border-radius: 50%;
                    margin-right: 5px;
                }

                &>svg {
                    margin-left: 5px;
                }

                .wallet-address-main {
                    display: flex;
                    flex-direction: column;

                    .chain-view-short {
                        display: flex;
                        align-items: center;
                        flex-direction: row;

                        svg {
                            margin-left: 2px;
                        }
                    }
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