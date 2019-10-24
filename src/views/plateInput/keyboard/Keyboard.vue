<template>
  <transition name="fade">
    <div class="keyboard" v-if="show">
      <div class="keyboard-close" @click="closeClick">
        <p>确定</p>
      </div>
      <div class="place-letter">
        <ul>
          <li v-for="(item, index) in keyboard" @click="keyboardClick(index)">{{ item }}</li>
          <li class="delete" @click="deleteClick">
            <span>x</span>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import vm from "@/event.js";
import {_PVS, _NUM} from "@/summary/plateDetails.js";

export default {
  name: "Keyboard",
  props: {
    plates: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      keyboard: "",
      plateNumber: this.plates.split(""),
      show: true
    };
  },
  methods: {
    deleteClick() {
      this.plateNumber.splice(this.plateNumber.length - 1, 1);
      // 点击删除，当删除到最后1位时显示地名键盘
      if (this.plateNumber.length < 1) {
        this.keyboard = _PVS;
      }
      // 发送数据
      vm.$emit("plate", this.plateNumber);
    },
    keyboardClick(index) {
      // 当前点击的值 
      let theValue = event.target.innerText;
      // 判断点击的值不为空
      if (theValue !== '') {
        this.plateNumber.push(theValue);
        if (this.plateNumber.length >= 8) {
          // 车牌最大只能为8位
          this.plateNumber.length = 8;
          this.plateNumber[this.plateNumber.length-1] = theValue;
        } else if(this.plateNumber.length > 0) {
          // 点击添加，当添加长度大于0时候显示数字键盘
          this.keyboard = _NUM;
        }
      // 发送数据
      vm.$emit("plate", this.plateNumber);
      }
    },
    closeClick() {
      this.show = false;
    }
  },
  created() {
    // 初始化车牌键盘
    if (this.plateNumber.length > 0) {
      this.keyboard = _NUM;
    } else {
      this.keyboard = _PVS;
    }
    // 接收输入框点击数据
    vm.$on("inputClick", data => {
      this.show = data;
    });
  }
};
</script>

<style lang="scss">
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 0.3s;
}

.keyboard {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background-color: #d1d4da;
  // 禁止复制
  -moz-user-select: none; /* Firefox私有属性 */
  -webkit-user-select: none; /* WebKit内核私有属性 */
  -ms-user-select: none; /* IE私有属性(IE10及以后) */
  -khtml-user-select: none; /* KHTML内核私有属性 */
  -o-user-select: none; /* Opera私有属性 */
  user-select: none; /* CSS3属性 */
  .keyboard-close {
    width: 100%;
    background-color: #f5f6f5;
    box-shadow: 0 -1px 0 #ebebeb;
    p {
      font-size: 14px;
      color: #333;
      padding: 4px;
      text-align: right;
    }
  }
  .place-letter ul {
    display: -webkit-flex;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    text-align: center;
    align-items: center;
    padding: 4px;
    li {
      // flex: 0 0 7.82%;
      // flex: 0 0 8.36%;
      flex: 0 0 9.1%;
      height: 42px;
      line-height: 42px;
      margin: 4px auto;
      box-sizing: border-box;
      background-color: #fff;
      color: #000;
      border-radius: 6px;
      box-shadow: 0 2px 0 #888a8d;
    }
    li:active {
      background-color: #abb1ba;
    }
    .delete {
      padding: 0 16px;
      background: #abb1ba;
      span {
        border: 1px solid #000;
        padding: 2px 4px;
        border-radius: 4px;
      }
    }
    .delete:active {
      background-color: #fff;
    }
  }
}
</style>