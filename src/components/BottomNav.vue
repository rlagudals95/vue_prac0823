<template>
    <div class="bottom-nav">
          <div class="bucket-btn" @click="basketToggle"><img class="basket-icon" />장바구니</div>
    </div>
</template>

<script>
export default {
    name: "BottomNav",
    methods: {
        basketToggle() {
            this.$store.commit('basketToggle')
        }
    }
}
</script>

<style lang="scss" scoped>
     .bottom-nav {
            position: fixed;
            display: flex;
            height: 60px;
            width: 100%;
            background-color: #000000;
            bottom: 0;
            opacity: 0.8;
            z-index: 100;
            justify-content: flex-end;
            padding-right: 30px;

            .bucket-btn {
                color: #fff;
                margin: auto 0;
                font-size: 20px;
                cursor: pointer;
                border: none;
            }

            .basket-icon {
                background-image: url('https://firebasestorage.googleapis.com/v0/b/fireblog-2d96d.appspot.com/o/395.png?alt=media&token=a6455da1-63ac-4411-ba37-0e7e25f39de7');
                object-fit: fit;
                background-size: cover;
                width: 20px;
                height: 20px;
                border: none;
                margin-right: 5px;
                border: none;
                outline: none !important;    
            }
            //
        }
</style>