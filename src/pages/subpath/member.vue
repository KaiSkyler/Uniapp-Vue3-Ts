<script lang="ts" setup>
import { useInit } from '@/hooks/useInit';
import { useTitle } from '@/hooks/useTitle';
import { forward, back } from '@/utils/router';
import { memberServices } from '@/services/memberServices';
import { showConfirmDialog, showDialog } from 'vant';
import 'vant/es/dialog/style';

const { title, screenWidth, changeTitle } = useTitle();

let memberService = new memberServices();
let chosenContactId = ref(0);
let memberList = ref<Member.MemberInfo[]>([]);

onLoad(async () => {
    const { pageName, pagePath, pageQuery } = useInit();
    changeTitle(pageName);
    await memberService.getMemberList()
    memberList.value = memberService.memberListInfo;
    chosenContactId.value = memberList.value.find(item => item.isDefault)?.id || 0;
});

const onClickLeft = () => {
    back(1)
}

const onEditOrSelect = (e) => {
    chosenContactId.value = e.id;
    memberService.changeCurrentMemberInfo(e);
}

const onClickRight = () => {
    if (chosenContactId.value == 0) {
        showDialog({ message: '请先选择成员' });
        return;
    }
    showConfirmDialog({
        title: '请确认是否要删除?',
        message: `【${memberService.currentMemberInfo.name}】`,
    })
    .then(() => {
        // on confirm
    })
    .catch(() => {
        // on cancel
    });
}

</script>

<template>
    <view class="content">
        <van-nav-bar title="我的一家-成员列表" left-text="返回" left-arrow @click-left="onClickLeft" right-text="删除选中成员"
            @click-right="onClickRight" :fixed="true" />
        <van-contact-list v-model="chosenContactId" :list="memberList" default-tag-text="默认" @edit="onEditOrSelect"
            @add="forward('add')" @select="onEditOrSelect" add-text="添加成员信息" />
    </view>
</template>

<style lang="scss" scoped>
page {
    background-color: #e7e7e7;
}

.content {
    padding-top: 90rpx;
}

::v-deep .van-contact-list__add {
    background: #FF6100 !important;
    border-color: #FF6100 !important;
}

::v-deep .van-contact-list__item-tag {
    background: #FF6100 !important;
}

::v-deep .van-contact-list__radio .van-radio__icon--checked .van-icon {
    background: #FF6100 !important;
    border-color: #FF6100 !important;
}
</style>
