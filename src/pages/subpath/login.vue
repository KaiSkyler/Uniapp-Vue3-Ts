<script lang="ts" setup>
import { useInit } from '@/hooks/useInit';
import { useTitle } from '@/hooks/useTitle';
import { forward, back } from '@/utils/router';

const { title, screenWidth, changeTitle } = useTitle();
let formData = ref({
    username: '',
    password: ''
});

onLoad(() => {
    const { pageName, pagePath, pageQuery } = useInit();
    changeTitle(pageName);
});

const onClickLeft = () => {
    forward('index');
}

const onClickRight = () => {
    forward('register')
}

const onSubmit = () => {

}

</script>

<template>
    <view class="content">
        <van-nav-bar title="登录" left-text="返回" right-text="注册" left-arrow @click-left="onClickLeft"
            @click-right="onClickRight" :fixed="true" />
        <view class="logoUrl">
            <van-image round width="100" height="100" lazy-load
                src="https://record.xinmam.com/attach/2023/09/5ba80202309281259389992.jpg" />
        </view>
        <view class="van-ellipsis title">欢迎登录新妈FM</view>
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="formData.username" name="手机" label="手机" placeholder="手机" autocomplete="username"
                    :rules="[{ required: true, message: '请填写手机' }]" />
                <van-field v-model="formData.password" type="password" name="密码" label="密码" placeholder="密码" autocomplete="password"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <view style="margin: 16px;">
                <van-button round block color="#FF6100" native-type="submit">
                    密码登录
                </van-button>
            </view>
            <view style="margin: 16px;">
                <van-button round block color="#FF6100">
                    微信一键快捷登录
                </van-button>
            </view>
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

.title {
    padding: 40rpx;
    color: #999999;
    // background: white;
}

.logoUrl {
    padding: 100rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.space {
    height: 30rpx;
}
</style>
