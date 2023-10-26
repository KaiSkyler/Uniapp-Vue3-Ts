<script setup lang="ts">
import { useInit } from '@/hooks/useInit';
import { useTitle } from '@/hooks/useTitle';
import { getConstant } from '@/config/constant';
import { forward } from '@/utils/router';
import { hospitalServices } from '@/services/hospitalServices';

const { title, screenWidth, changeTitle } = useTitle();
const { indexPageConstant } = getConstant();
let hospitalList = ref<Array<Hospital.HospitalInfo>>([]);
let hospitalService = new hospitalServices();

onLoad(async () => {
  const { pageName, pagePath, pageQuery } = useInit();
  changeTitle(pageName);
  await hospitalService.getHospitalList();
  hospitalList.value = hospitalService.hospitalListInfo;
});

const clickHospitalItem = (item) => {
  forward('hospital', { id: item.hospitalId });
}

</script>

<template>
  <view class="content">
    <van-nav-bar title="新妈FM" :fixed="true" />
    <van-swipe :autoplay="3000" indicator-color="white" height="200" :width="screenWidth">
      <van-swipe-item v-for="(image, index) in indexPageConstant.images" :key="index">
        <view class="custom-swipe-item">
          <img class="custom-swipe-img" v-lazy="image" />
        </view>
      </van-swipe-item>
    </van-swipe>
    <van-cell-group>
      <van-cell title="智慧服务" />
    </van-cell-group>
    <van-row>
      <van-col span="6" v-for="(item, index) in indexPageConstant.menuNav" :key="index">
        <view class="menuItem">
          <view class="icon">
            <van-icon :name="item.icon" size="32" color="white" />
          </view>
          <view class="text">{{ item.text }}</view>
        </view>
      </van-col>
    </van-row>
    <view class="space" />
    <van-cell-group>
      <van-cell title="智慧医院" />
    </van-cell-group>
    <van-cell @click="clickHospitalItem(item)" v-for="(item, index) in hospitalList" :key="index"
      :title="item.hospitalName" :icon="'https://www.bojiantech.com.cn/' + item.hospitalIcon" is-link />
  </view>
</template>

<style scoped lang="scss">
.content {
  padding-top: 90rpx;
}

.logo {
  margin-left: auto;
  margin-right: auto;
  margin-top: 200rpx;
  margin-bottom: 50rpx;
  width: 200rpx;
  height: 200rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
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

.space {
  height: 30rpx;
}

::v-deep .van-icon__image {
  width: 3em !important;
  height: 3em !important;
}

::v-deep .van-cell__title {
  height: 80rpx;
  display: flex;
  align-items: center;
}
</style>
