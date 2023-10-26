<script lang="ts" setup>
import { useInit } from '@/hooks/useInit';
import { showConfirmDialog } from 'vant';
import 'vant/es/dialog/style';
import { forward } from '@/utils/router';
import { getConstant } from '@/config/constant';

const { userInfo } = useStore('user');
const { profilePageConstant } = getConstant();
onLoad(() => {
  const { pageName, pagePath, pageQuery } = useInit();
  console.log(pageName, pagePath, pageQuery, 'pageName,pagePath, pageQuery');
});

const onClickRight = () => {
  showConfirmDialog({
    title: '提示',
    message:
      '请确认是否要退出登录',
  })
    .then(() => {
      // on confirm
      console.log('退出登录')
      forward('login', { replace: true })
    })
    .catch(() => {
      // on cancel
      console.log('取消退出')
    });
}

</script>

<template>
  <view class="content">
    <van-nav-bar title="个人中心" :fixed="true" right-text="退出" @click-right="onClickRight" />
    <van-cell>
      <img slot="icon" class="header-img" v-lazy="userInfo.avatar || './static/logo.png'">
      <view slot="title" class="username">{{ userInfo.username }}</view>
    </van-cell>
    <van-cell-group>
      <van-cell @click="forward(item.pageName)" v-for="(item, index) in profilePageConstant.menuNav" :key="index"
        :icon="item.icon" :title="item.text" size="large" is-link />
    </van-cell-group>
  </view>
</template>

<style lang="scss" scoped>
page {
  background-color: #e7e7e7;
}

.content {
  padding-top: 90rpx;
}

::v-deep .van-cell {
  background: #FF6100 !important;
  padding-top: 50rpx;
  padding-bottom: 50rpx;
}

::v-deep .van-cell-group {
  padding-bottom: 10rpx;
  padding-top: 2rpx;
  background: #e7e7e7 !important;
}

::v-deep .van-cell-group .van-cell {
  background: white !important;
  margin-top: 10rpx;
  padding: 20rpx;
}

::v-deep .van-cell__value {
  display: flex !important;
  flex-direction: row;
  align-items: center;
}

::v-deep .van-cell__left-icon {
  font-size: 60rpx !important;
  color: #8E8E93 !important;
  margin-right: 30rpx;
}

.username {
  font-weight: bold;
  color: white;
  font-size: 38rpx;
  text-align: left;
  margin-left: 30rpx;
}

.header-img {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
}
</style>
