<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app';
onLaunch(() => {
  console.log('App Launch');
});
onShow(() => {
  console.log('App Show');
});
onHide(() => {
  console.log('App Hide');
});
</script>

<style>
::v-deep .van-nav-bar__title{
    font-weight: 100 !important;
}
</style>
