<script lang="ts" setup>
import { useInit } from '@/hooks/useInit';
import { useTitle } from '@/hooks/useTitle';
import { forward, back } from '@/utils/router';

const { title, screenWidth, changeTitle } = useTitle();
let formData = ref({
    username: '',
    password: '',
    sms: ''
});

onLoad(() => {
    const { pageName, pagePath, pageQuery } = useInit();
    changeTitle(pageName);
});

const onClickLeft = () => {
    forward('login')
}

const onSubmit = () => {

}

</script>

<template>
    <view class="content">
        <van-nav-bar title="手机注册" left-text="返回" left-arrow @click-left="onClickLeft" :fixed="true" />
        <view class="logoUrl">
            <van-image round width="100" height="100" lazy-load
                src="https://record.xinmam.com/attach/2023/09/5ba80202309281259389992.jpg" />
        </view>
        <view class="van-ellipsis title">请填写注册信息</view>
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="formData.username" type="text" name="手机号" label="手机号" placeholder="手机号"
                    autocomplete="username" :rules="[{ required: true, message: '请填写手机号' }]" />
                <van-field v-model="formData.password" type="password" name="密码" label="密码" placeholder="密码"
                    autocomplete="password" :rules="[{ required: true, message: '请填写密码' }]" />
                <van-field v-model="formData.sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
                    <template #button>
                        <van-button size="small" color="#FF6100">发送验证码</van-button>
                    </template>
                </van-field>
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block color="#FF6100" native-type="submit">
                    注册
                </van-button>
            </div>
        </van-form>
    </view>
</template>

<style lang="scss" scoped>
page {
    background-color: #e7e7e7;
}

.content {
    padding-top: 90rpx;
}

.logoUrl {
    padding: 100rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.title {
    padding: 40rpx;
    color: #999999;
    // background: white;
}
</style>
