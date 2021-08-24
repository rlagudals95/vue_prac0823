<template>
  <div class="top-line">
      <div class="branch">
        <div class="branch-name">구도로 떡볶이</div>
        <ul class="menu-categories">
            <li class="category">튀김</li>
            <li class="category">과일&디저트</li>
            <li class="category">탕</li>
            <li class="category">맛있는추억</li>
        </ul>
      </div>
      <span class="left-line"></span>    
      <div class="branch2">
        구도로 떡볶이
      </div>
      <div class="bottom-nav">
          <div class="bucket-btn"></div>
      </div>
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
        height: 5px;
        background-color: #ff0000;
        position: fixed;
        top: 0px;
        z-index: 99;
        
        .branch {
            background-color: #ff0000;
            height: 68px;
            width: 134px;  
            position: fixed;
            top: 0;
            left: 20px;
            border-radius: 0px 0px 10px 10px;  
            box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);
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