import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    completeMsg: false,
    basket: null,
    selectedMenus: [],
    basketTotal: 0,
    categories: [
      {
        categoryId: 1,
        categoryName: "맛있는 추억",
        categoryItems: [
          {
            itemId: 1,
            itemName: "부산국제시장 떡볶이(밀가래떡)",
            itemPrice: 8900,
            itemSoldOutFlag: false,
            itemImageUrl:
              "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR008/M00427/1620354409item_700X700_toJPEGBot.jpg",
          },
          {
            itemId: 2,
            itemName: "쫑라면",
            itemPrice: 3000,
            itemSoldOutFlag: false,
            itemImageUrl:
              "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00179/1596180154item_700X700_toJPEGBot.jpg",
          },
          {
            itemId: 3,
            itemName: "계란찜",
            itemPrice: 5900,
            itemSoldOutFlag: false,
            itemImageUrl:
              "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00179/1596180154item_700X700_toJPEGBot.jpg",
          },
          {
            itemId: 4,
            itemName: "엄마손주먹밥",
            itemPrice: 4000,
            itemSoldOutFlag: false,
            itemImageUrl:
              "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00180/1596180192item_700X700_toJPEGBot.jpg",
          },
          {
            itemId: 5,
            itemName: "밥",
            itemPrice: 1000,
            itemSoldOutFlag: false,
            itemImageUrl:
              "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/C00089/1600410691item_700X700_toJPEGBot.jpg",
          },
          {
            itemId: 6,
            itemName: "찹쌀바삭치즈누룽지",
            itemPrice: 3000,
            itemSoldOutFlag: false,
            itemImageUrl:
              "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR005/C00148/1604145260item_700X700_toJPEGBot.jpg",
          },
        ],
      },
      {
        categoryId: 2,
        categoryName: "튀김",
        categoryItems: [
          {
            itemId: 7,
            itemName: "치즈갈릭감자",
            itemPrice: 6900,
            itemSoldOutFlag: false,
            itemImageUrl:
              "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00184/1596181048item_700X700_toJPEGBot.jpg",
          },
          {
            itemId: 8,
            itemName: "튀김쥐포",
            itemPrice: 4500,
            itemSoldOutFlag: false,
            itemImageUrl:
              "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00186/1596181076item_700X700_toJPEGBot.jpg",
          },
          {
            itemId: 9,
            itemName: "대만우유튀김",
            itemPrice: 4900,
            itemSoldOutFlag: false,
            itemImageUrl:
              "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR005/C00094/1605329843item_700X700.png",
          },
          {
            itemId: 10,
            itemName: "대왕치즈볼",
            itemPrice: 6900,
            itemSoldOutFlag: false,
            itemImageUrl:
              "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00185/1596181071item_700X700_toJPEGBot.jpg",
          },
          {
            itemId: 11,
            itemName: "진미채튀김",
            itemPrice: 7500,
            itemSoldOutFlag: false,
            itemImageUrl:
              "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00188/1596181089item_700X700_toJPEGBot.jpg",
          },
          {
            itemId: 12,
            itemName: "어니언링",
            itemPrice: 5500,
            itemSoldOutFlag: false,
            itemImageUrl:
              "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00187/1596181082item_700X700_toJPEGBot.jpg",
          },
        ],
      },
    ],
  },
  mutations: {
    completeOrder() {
      this.state.completeMsg = !this.state.completeMsg;
      console.log("??D?D?");
      setTimeout(() => {
        this.state.completeMsg = false;
      }, 3000);
    },
    basketToggle() {
      this.state.basket = !this.state.basket;
    },
    SET_SELETED_MENU(state, selcetedMenu) {
      state.selectedMenus.push(selcetedMenu);
      console.log(state.selectedMenus);
    },
    CANCEL_MENU(state, id) {
      state.selectedMenus = state.selectedMenus.filter(
        (menu) => menu.itemId !== id
      );
    },
    ORDER_MENU(state) {
      let _selectedMenus = state.selectedMenus;

      let ids = [];

      for (let i = 0; i < _selectedMenus.length; i++) {
        ids.push(_selectedMenus[i].itemId);
      } // 선택한 메뉴 아이디들 push
      console.log("선택메뉴 아이디들", ids);

      let categories = this.state.categories;

      for (let i = 0; i < this.state.categories[0].categoryItems.length; i++) {
        let _itemId = categories[0].categoryItems[i].itemId;
        for (let j = 0; j < ids.length; j++) {
          if (ids[j] === _itemId) {
            let _order = categories[0].categoryItems[i];
            // 가져온 state만 변경가능?
            console.log(this.state.categories[0].categoryItems);
            state.categories[0].categoryItems[[_itemId]] = {
              itemId: _order.itemId,
              itemName: _order.itemName,
              itemPrice: _order.itemPrice,
              itemSoldOutFlag: true,
              itemImageUrl: _order.itemImageUrl,
            };
          }
        }
      }

      for (let i = 0; i < this.state.categories[1].categoryItems.length; i++) {
        let _itemId = categories[1].categoryItems[i].itemId;
        for (let j = 0; j < ids.length; j++) {
          if (ids[j] === _itemId) {
            let _order = categories[1].categoryItems[i];
            // 가져온 state만 변경가능?
            console.log(this.state.categories[1].categoryItems);
            state.categories[1].categoryItems[[_itemId]] = {
              itemId: _order.itemId,
              itemName: _order.itemName,
              itemPrice: _order.itemPrice,
              itemSoldOutFlag: true,
              itemImageUrl: _order.itemImageUrl,
            };
          }
        }
      }
    },
  },
  actions: {
    setSelectedMenu({ commit }, selectedMenus) {
      commit("SET_SELETED_MENU", selectedMenus);
    },
    cancelMenu({ commit }, id) {
      commit("CANCEL_MENU", id);
    },
    orderMenu({ commit }, state) {
      commit("ORDER_MENU", state);
    },
  },

  modules: {},
});
