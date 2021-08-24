<template>
    <div class="basket-wrap" v-if="basket">
        <div class="bucket">
            <div class="title">장바구니</div>
            <div class="basket-menus">
                <p class="menu-name">부산국제시장 떡볶이<br>(밀가래떡)</p>
                <div class="delete-btn">삭제</div>   
            </div>
            <div class="menu-options">
                <div class="option">
                    <div class="bucket-category">기본</div>  
                    <div class="bucket-count">1개 </div>
                    <div class="bucket-price">8,900원</div>
                </div>
            </div>
            <!-- <div class="sub-options">
                <div class="option">
                    <div class="bucket-category">기본</div>  
                    <div class="bucket-count">1개 </div>
                    <div class="bucket-price">8,900원</div>
                </div>
            </div> -->
            <div class="price">
                <div class="counter-btns">
                    <div class="increase count-btn">+</div>
                    <div class="total-count">1개</div>
                    <div class="decrease count-btn">-</div>
                </div>
                <div class="bucket-total">
                    15,100원
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'Basket',
    computed: {
        ...mapState(['basket'])
    }
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

        .bucket {
            height: auto;
            border-bottom: 2px solid #cccccc;
            width: 90%;
        }

        .title {
            margin-top: 30.00px;
            font-size: 24px;
            color: #000000;
            font-weight: bold;
            width: 100%;
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

    }

</style>