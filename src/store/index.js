import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    completeMsg: false,
    basket: null,
    selectedMenus: [],
    selectedMenus2: [],
    basketTotal: 0,
    basketPrice: 0,
    selectedPrices: [],
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

      setTimeout(() => {
        this.state.completeMsg = false;
      }, 3000);
    },
    basketToggle() {
      this.state.basket = !this.state.basket;
    },

    SET_SELETED_MENU(state, selcetedMenu) {
      let chkMenu;

      if (this.state.selectedMenus.length > 0) {
        chkMenu = this.state.selectedMenus.findIndex((menu) => {
          return menu.itemId === selcetedMenu.itemId;
        });
      }

      if (chkMenu != -1 && chkMenu != null) {
        alert("메뉴 중복은 수량으로 체크해주세요 😃");
        return;
      }
      if (selcetedMenu.itemSoldOutFlag === true) {
        alert("🙏선택하신 메뉴가 품절입니다.");
        return;
      }
      console.log("이거 선택", selcetedMenu);

      let selectOption = {
        itemId: selcetedMenu.itemId,
        itemImageUrl: selcetedMenu.itemImageUrl,
        itemName: selcetedMenu.itemName,
        itemPrice: selcetedMenu.itemPrice,
        itemSoldOutFlag: selcetedMenu.itemSoldOutFlag,
        cnt: 1,
      };

      state.selectedMenus.push(selectOption);

      this.state.selectedMenus2 = state.selectedMenus;

      console.log("복사", this.state.selectedMenus2);
      this.state.basket = true;

      state.basketPrice += selcetedMenu.itemPrice;
    },
    CANCEL_MENU(state, id) {
      console.log("남은 메뉴", id, this.state.selectedMenus);

      const idx = state.selectedMenus.findIndex((menu) => {
        return menu.itemId === id;
      });

      this.state.basketPrice -= this.state.selectedMenus[idx].itemPrice;

      state.selectedMenus = state.selectedMenus.filter(
        (menu) => menu.itemId !== id
      );
    },
    ORDER_MENU(state) {
      let _selectedMenus = state.selectedMenus;

      let ids = [];

      for (let i = 0; i < _selectedMenus.length; i++) {
        ids.push(_selectedMenus[i].itemId);
      }

      let _categories = state.categories;

      for (let i = 0; i < _categories[0].categoryItems.length; i++) {
        for (let j = 0; j < ids.length; j++) {
          if (ids[j] === _categories[0].categoryItems[i].itemId) {
            _categories[0].categoryItems[i].itemSoldOutFlag = true;
          }
        }
      }

      for (let i = 0; i < _categories[1].categoryItems.length; i++) {
        for (let j = 0; j < ids.length; j++) {
          if (ids[j] === _categories[1].categoryItems[i].itemId) {
            _categories[1].categoryItems[i].itemSoldOutFlag = true;
          }
        }
      }
    },
    RESET_SELECTED(state) {
      state.selectedMenus = [];
      this.state.basketPrice = 0;
    },
    ITEM_PRICE_INCREASE(state, id) {
      const idx = this.state.selectedMenus.findIndex((menu) => {
        return menu.itemId === id;
      });

      this.state.selectedMenus[idx].cnt += 1; //갯수 증가

      let selectOption = {
        selectId: id,
        selectedPrice: state.selectedMenus[idx].itemPrice,
      };

      let _dupchk; // 중복체크

      _dupchk = this.state.selectedPrices.findIndex((s) => {
        return s.selectId === id;
      });

      if (_dupchk == -1 && _dupchk != null) {
        // 중복이 없으면 push
        this.state.selectedPrices.push(selectOption);
      }

      let select_idx = this.state.selectedPrices.findIndex((s) => {
        return s.selectId === id;
      });

      if (_dupchk == -1 && _dupchk != null) {
        // 중복이 없으면 push
        this.state.selectedPrices.push(selectOption);
      } else {
        this.state.selectedPrices[select_idx].cnt += 1;
      }

      // 가격이 계속 가격 += 가격 + 가격으로 되는 것을 방지했다.
      state.selectedMenus[idx].itemPrice += this.state.selectedPrices[
        select_idx
      ].selectedPrice;

      this.state.basketPrice += this.state.selectedPrices[
        select_idx
      ].selectedPrice; // 총합
    },
    ITEM_PRICE_DECREASE(state, id) {
      const idx = this.state.selectedMenus.findIndex((menu) => {
        return menu.itemId === id;
      });

      console.log(
        "이거 카운트 내리자",
        id,
        "확인",
        this.state.selectedMenus[idx].cnt
      );
      if (this.state.selectedMenus[idx].cnt === 1) {
        console.log("삭제");
        this.state.selectedMenus = this.state.selectedMenus.filter((menu) => {
          menu.id != id;
        });
      }
      this.state.selectedMenus[idx].cnt -= 1; //갯수 증가

      let select_idx = this.state.selectedPrices.findIndex((s) => {
        return s.selectId === id;
      });

      // 가격이 계속 가격 += 가격 + 가격으로 되는 것을 방지했다.
      state.selectedMenus[idx].itemPrice -= this.state.selectedPrices[
        select_idx
      ].selectedPrice;

      this.state.basketPrice -= this.state.selectedPrices[
        select_idx
      ].selectedPrice; // 총합
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
    resetSelected({ commit }) {
      commit("RESET_SELECTED");
    },
    itemPriceIncrease({ commit }, id) {
      commit("ITEM_PRICE_INCREASE", id);
    },
    itemPriceDecrease({ commit }, id) {
      commit("ITEM_PRICE_DECREASE", id);
    },
  },

  modules: {},
});
