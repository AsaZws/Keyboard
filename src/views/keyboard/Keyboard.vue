<template>
  <div class="keyboard" v-if="show">
    <div class="keyboard-close" @click="closeClick">
      <p>确定</p>
    </div>
    <div class="place-letter">
      <ul>
        <li v-for="(item, index) in keyboard" @click="keyboardClick(index)">
          {{ item }}
        </li>
        <li class="delete" @click="deleteClick">
          <span>x</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import vm from "@/event.js"

var _PVS = "京津晋冀蒙辽吉黑沪苏浙皖闽赣鲁豫鄂湘粤桂琼渝川贵云藏陕甘青宁新";
var _NUM = "1234567890QWERTYUP港澳ASDFGHJKL学ZXCVBNM警";
export default {
  name:'Keyboard',
  data() {
    return {
      keyboard : '',
      plateNumber: [],
      show: true
    }
  },
  methods: {
    deleteClick() {
      this.plateNumber.splice(this.plateNumber.length-1, 1);
      // 点击删除，当删除到最后1位时显示地名键盘
      if(this.plateNumber.length < 1) {
        this.keyboard = _PVS;
      }
      // 发送数据
      vm.$emit('plate', this.plateNumber);
    },
    keyboardClick(index) {
      if (this.plateNumber.length < 8) {
        this.plateNumber.push(event.target.innerText);
      }
      // 点击添加，当添加长度大于0时候显示数字键盘
      if(this.plateNumber.length > 0) {
        this.keyboard = _NUM;
      }
      // 发送数据
      vm.$emit('plate', this.plateNumber);
    },
    closeClick() {
      this.show = false;
    }
  },
  created() {
    // 判断输入框内容长度渲染适合的键盘
    if(this.plateNumber.length > 0) {
      this.keyboard = _NUM;
    } else {
      this.keyboard = _PVS;
    }
  }
}
</script>

<style lang="scss">
  .keyboard {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #d1d4da;
    .keyboard-close {
      width: 100%;
      background-color: #F5F6F5;
      box-shadow: 0 -1px 0 #EBEBEB;
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
      .delete {
        padding: 0 16px;
        background: #abb1ba;
        span {
          border: 1px solid #000;
          padding: 2px 4px;
        }
      }
    }
  }
</style>