<template>
    <div class="basket-wrap" v-if="basket">
        <div class="title">장바구니</div>
        <!--  -->
        <div class="bucket" v-for="(selectedMenu, index) in selectedMenus" :key="index" >
            <div class="basket-menus">
                <p class="menu-name">{{selectedMenu.itemName}}</p>
                <div class="delete-btn" @click="cancelMenu(selectedMenu.itemId)">삭제</div>   
            </div>
            <div class="menu-options">
                <div class="option">
                    <div class="bucket-category">기본</div>  
                    <div class="bucket-count">1개</div>
                    <div class="bucket-price">{{selectedMenu.itemPrice | comma}}원</div>
                </div>
            </div>
            <div class="price">
                <div class="counter-btns">
                    <div class="increase count-btn" @click="itemPriceIncrease(selectedMenu.itemId)">+</div>
                    <div class="total-count">{{cnt}}</div>
                    <div class="decrease count-btn" @click="itemPriceDecrease(selectedMenu.itemId)">-</div>
                </div>
                <div class="bucket-total">
                    {{selectedMenu.itemPrice | comma}}원
                </div>
            </div>   
        </div>
        <!--  -->
        <div class="total-menu">
            <div class="basket-cnt">총 {{selectedMenus.length}}가지</div>
            <!-- <div class="basket-price">합계 {{basketTotal | comma}}원</div> -->
            <div class="basket-price">합계 {{basketPrice | comma }}원</div>
        </div>
        <div class="bottom-btns">
                <div class="close-btn" @click="basketToggle"><p>닫기</p></div>
                <div class="order-btn" @click="[completeOrder(),orderMenu(),resetSelected()]"><p>주문하기</p></div>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'

export default {
    name: 'Basket',
    computed: {
        ...mapState(['basket','selectedMenus','basketTotal','categories','basketPrice'])
    },
    methods: {
        ...mapActions(['cancelMenu','orderMenu','resetSelected','itemPriceIncrease','itemPriceDecrease']),
        ...mapMutations(['completeOrder']),
        basketToggle() {
            this.$store.commit('basketToggle')
        },
        increase () {
            this.cnt = this.cnt+1
        }
    },
    data () {
        return {
            cnt : 1,
            selectedid:['selectedMenus']
        }
    },
    filters: { 
        comma (val) { return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',') 
    }},  
}
</script>

<style lang="scss" scoped>
    .basket-wrap{
        z-index: 200;
        width: 26%;
        height: 100%;
        background-color: #f5f5f5;
        position: fixed;
        top: 0;
        right: 0;
        display: block;
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 30px 5px; 
        border-bottom: 2px solid #cccccc;
        transition : 2.5s ease all;

        
        .title {
            margin-top: 30.00px;
            font-size: 24px;
            color: #000000;
            font-weight: bold;
            width: 100%;
            margin-left: 30px;
        }


        .bucket {
            height: auto;
            border-bottom: 2px solid #cccccc;
            width: 90%;
        }
        .basket-menus{
            margin-top: 30px;
            width: 100%;
            display: flex;
            justify-content: space-between;

            .menu-name{
                padding-top: 5px;
                font-size: 22px;
                font-weight: 500;
            }

            .delete-btn{
                color: #fc0000;
                font-weight: bold;
                text-align: center;
                border: 2.5px solid #fc0000; 
                border-radius: 10px;
                width: 55px;
                height: 30px;
                padding: 7px;
                padding-bottom: 30px;
                cursor: pointer;
            }
        }

        .menu-options{
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 20px;

            .option {
                width: 100%;
                display: flex;
                justify-content: space-between;
                font-size: 18px;
            }
        }

        .price{
            margin-top: 50px;
            margin-bottom: 30px;
            display: flex;
            justify-content: space-between;
            width: 100%;

            .counter-btns{
                width: 50%;
                display: flex;
                justify-content: space-between;

                .count-btn {
                    width: 42px;
                    height: 42px;
                    background-color: #000000;
                    color: #fff;
                    text-align: center;
                    display: inline-block;
                    line-height: 30px;
                    font-size: 50px;
                    border-radius: 8px;
                    cursor: pointer;
                }

                .total-count{
                    line-height: 40px;
                    font-weight: bold;
                    font-size: 25px;
                }
            }

            .bucket-total {
                 line-height: 40px;
                 font-size: 25px;
                 font-weight: bold;
                 color: #fc0000;
            }
        }

        .bottom-btns {
            background-color: #fc0000;
            height: 60px;
            width: 26%;
            position: fixed;
            bottom: 0;
            right: 0;
            color:white;
            display: flex;
            font-weight: bold;
            text-align: center;
            cursor: pointer;
            .close-btn{
                background-color: #636363;
                flex:1;
            }
            .order-btn{
                background-color: #fc0000;
                flex:2;
            }
            p{
                margin: 15px 0px;
                font-size: 24px;
            }
        }

        .total-menu {
            width: 26%;
            position:fixed;
            bottom: 60px;
            display: flex;
            justify-content: space-between;
            height: 55px;
            background-color: #ffffff;
            box-shadow: 0px -4px 2px rgba(10, 10, 10, 0.05);
            padding: 0px 15px;
            line-height: 50px;
            .basket-cnt {
                font-size: 20.00px;
                font-weight: bold;
            }
            .basket-price{
                font-size: 25.00px;
                font-weight: bold;
                color: #fc0000;
            }
        }

    }

</style>