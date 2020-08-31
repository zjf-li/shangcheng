<template>
  <div class="reg">
    <van-nav-bar title="注册" fixed placeholder z-index="10" />
    <van-field v-model="phone" type="tel" label="手机号" maxlength="11" placeholder="请输入手机号" />
    <van-field v-model="verifyCode" center clearable label="短信验证码" placeholder="请输入短信验证码">
      <template #button>
        <van-button size="small" type="primary" @click="getVerifyCode">发送验证码</van-button>
      </template>
    </van-field>
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit" @click="onSubmit">注册</van-button>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
import {getCode,register} from '../utils/api.js'
export default {
  data() {
    return {
      phone: "",
      verifyCode: "",
    };
  },
  methods: {
   async getVerifyCode() {
   const res =await getCode(this.$qs.stringify({
            phone:this.phone,
            templateId:537707
        }))
    },
   async onSubmit() {
     const res =await register(this.$qs.stringify({
        phone: this.phone,
        code: this.verifyCode,
      }));
      if(res.status==='0'){
            Toast('注册成功')
            localStorage.setItem('token',res.result.token)
    setTimeout(()=>{
            this.$router.replace({path:'/mine'})
    },1000)
        }else{
             Toast('res.msg')
        }
    },
  },mounted() {
   
  },
};
</script>
<style lang="stylus">
.reg {
}
</style>