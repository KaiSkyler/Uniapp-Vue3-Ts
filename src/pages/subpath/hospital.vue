<script lang="ts" setup>
import { useInit } from '@/hooks/useInit';
import { useTitle } from '@/hooks/useTitle';
import { hospitalServices } from '@/services/hospitalServices';
import { forward, back } from '@/utils/router';
import { getConstant } from '@/config/constant';

const { title, screenWidth, changeTitle } = useTitle();
const { hospitalPageConstant } = getConstant();
let hospitalService = new hospitalServices();
let hospitalInfo = ref({} as Hospital.HospitalInfo);

onLoad(async () => {
    const { pageName, pagePath, pageQuery } = useInit();
    changeTitle(pageName);
    let hospitalId = (pageQuery as { id: number })?.id;
    hospitalId && await hospitalService.getHospitalInfoById(hospitalId);
    hospitalInfo.value = hospitalService.currentHospitalInfo;
});

const onClickLeft = () => {
    back(1)
}
</script>

<template>
    <view class="content">
        <van-nav-bar :title="hospitalInfo.hospitalName" left-text="返回" left-arrow @click-left="onClickLeft" :fixed="true" />
        <van-swipe :autoplay="3000" indicator-color="white" height="200" :width="screenWidth">
            <van-swipe-item v-for="(image, index) in hospitalPageConstant.images" :key="index">
                <view class="custom-swipe-item">
                    <img class="custom-swipe-img" v-lazy="image" />
                </view>
            </van-swipe-item>
        </van-swipe>
        <van-cell-group>
            <van-cell title="智慧服务" />
        </van-cell-group>
        <van-row>
            <van-col span="6" v-for="(item, index) in hospitalPageConstant.menuNav" :key="index">
                <view class="menuItem">
                    <view class="icon">
                        <van-icon :name="item.icon" size="32" color="white" />
                    </view>
                    <view class="text">{{ item.text }}</view>
                </view>
            </van-col>
        </van-row>
    </view>
</template>

<style lang="scss" scoped>
.content {
    padding-top: 90rpx;
}

.custom-swipe-item {
    background-color: gainsboro;
    width: 100%;
    height: 100%;
}

.custom-swipe-img {
    width: 100%;
    height: 100%;
}

.menuItem {
    display: flex;
    flex-direction: column;
    color: black;
    font-size: 20rpx;
    justify-content: center;
    align-items: center;
    margin-top: 30rpx;

    .icon {
        display: flex;
        padding: 15rpx;
        border-radius: 10rpx;
        background-color: #FF6100;
        justify-content: center;
        align-items: center;
    }

    .text {
        margin-top: 20rpx;
    }
}

::v-deep .van-cell__title {
    height: 80rpx;
    display: flex;
    align-items: center;
}
</style>
