<template>
  <div id="login">
    <div class="ibg-bg-login">
      <div class="login-bg">
        <div class="login-container">
          <div class="con-box" content="center" style="right: 6%;position: absolute;">
            <div style="margin-top: 50px;text-align:center">
              <span>手机号密码登陆</span>
            </div>
            <div>
              <el-form status-icon ref="ruleForm2" class="demo-ruleForm">
                <el-form-item label="手机号">
                  <el-input type="text" v-model="userName" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="checkPass" label="密码">
                  <el-input type="password" v-model="userPassword" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="login()" style="width: 100%;">登陆</el-button>
                </el-form-item>
                <!-- <div style="display: flex;flex-direction: row">
                  <el-form-item>
                    <el-button type="text" @click="register">立即注册</el-button>
                  </el-form-item>
                  <el-form-item style="margin-left: 185px;">
                    <el-button type="text" @click="forgetPassword">忘记密码</el-button>
                  </el-form-item>
                </div>-->
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'js-md5'
import foot from '../components/Footer.vue'
export default {
  created() {},
  data() {
    return {
      userName: '',
      userPassword: ''
    }
  },
  components: {
    foot
  },
  methods: {
    login() {
      let param = {
        userName: this.userName,
        userPassword: md5(this.userPassword).toUpperCase()
      }
      this.postRequest('login', param).then(res => {
        console.log('res-->', res)
        if (res) {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
        }
      })
      console.log(param)
    }
  }
}
</script>

<style scoped>
.login-bg {
  background-image: url('../../static/img/background6.jpg');
  background-size: contain;
}
.ibg-bg-login {
  /*position:fixed;*/
  position: absolute;
  /* top: 60px; */
  left: 0;
  width: 100%;
  /* height: 700px; */
  height: 100%;
  /* min-width: 1100px; */
  z-index: -10;
  zoom: 1;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}

.login-container {
  /*position: absolute;*/
  right: 3.5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 700px;
  width: 100%;
}

.login-foot {
  height: 180px;
  background-color: white;
  /*position: absolute;*/
  /*z-index: 4;*/
  opacity: 1;
  text-align: center;
  bottom: 0;
  width: 100%;
}

.con-box {
  background-color: white;
  width: 400px;
  height: 400px;
  border-radius: 5px;
  float: right;
  z-index: 3;
  border: solid 1px gainsboro;
  opacity: 0.9;
}

.demo-ruleForm {
  padding: 30px 50px;
}

.p-footer {
  height: 10px;
  font-size: 14px;
}
</style>
