<template>
  <div class="top-line">
      <div class="branch">
        <div class="branch-name">구도로떡볶이</div>
        <ul class="menu-categories" v-hello v-scroll-spy-active v-scroll-spy-link>
            <li class="category ">
               <a class="cursor-pointer">맛있는추억</a>            
            </li>
            <li class="category ">
                <a class="cursor-pointer">튀김</a>            
            </li>
            <li class="category ">
                <a class="">탕</a>               
            </li>
            <li class="category ">
                <a class="">과일&디저트</a>             
            </li>
        </ul>
        <div class="table_no">
            <div class="t_name">테이블명</div>
            <div class="t_no">12</div>
        </div>
      </div>
      <!-- <span class="left-line"></span>     -->
      <!-- <div class="branch2">
        구도로 떡볶이
      </div> -->
      <!-- <div class="bottom-nav">
          <div class="bucket-btn"></div>
      </div> -->
  </div>
</template>

<script>
export default {
    name:"Navbar",

}
</script>

<style lang='scss' scoped>
    .top-line{
        width: 100%;
        height: 90px;
        background-color: blue;
        position: fixed;
        top: 0px;
        z-index: 201;
        background-image: url('https://cdn.zeplin.io/60d53e6d548b21b2ce573324/assets/abe58885-e813-49ed-8b8b-43b83c0534c8.png');
        border-top: #ff0000 5px solid;
        background-size: 100%; 
        background-repeat: no-repeat;
        
        .branch {
            background-color: #ff0000;
            height: 70px;
            width: 140px;  
            position: fixed;
            top: 0;
            left: 20px;
            border-radius: 0px 0px 10px 10px;  
            box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.3);
            text-align: center;
            padding-top: 30px;

            .menu-categories{
                color: white;
                font-weight: bold;
                display: flex;
                justify-content: space-between;
                width: 400px;
                position: fixed;
                top:30px;
                left: 200px;
                    li {
                        list-style:none;
                        cursor: pointer;
                    }
            }

        }
        .branch-name{
            color: white;
            font-weight: bold;
            font-size: 19px;
        }

        .table_no {
            background-color: #ff0000;
            height: 80px;
            width: 140px;  
            position: fixed;
            top: 0;
            right: 20px;
            border-radius: 0px 0px 10px 10px;  
           
            text-align: center;
            padding-top: 5px;
            color: white;
            font-weight: bold;
            display: flex;
            flex-direction: column;
            
            .t_name{
                font-size: 13px;

            }
            .t_no{
                margin-top: -10px;
                font-size: 53px;
            }
        }

        .branch2 {
            color:white;
            position: fixed;
            top: 100px;
            left: 20px;
            font-size: 22.50px;
            font-weight: bold;
            padding-left: 20px;
        }

        .left-line {
            height: 30px;
            width: 5px;
            background-color: #ff0000;
            top: 100px;
            left: 20px;
            position: fixed;
        }

        .bottom-nav {
            position: fixed;
            display: flex;
            height: 60px;
            width: 100%;
            background-color: #000000;
            bottom: 0;
            opacity: 0.8;
            .bucket-btn {
                color: #fff;
            }
        }
    } 

</style>