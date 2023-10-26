<script lang="ts" setup>
import { useInit } from '@/hooks/useInit';
import { useTitle } from '@/hooks/useTitle';
import { forward, back } from '@/utils/router';
import { hospitalServices } from '@/services/hospitalServices';

let hospitalService = new hospitalServices();
const { title, screenWidth, changeTitle } = useTitle();
const formData = ref({
    username: '',
    father: '',
    mother: '',
    sex: '1',
    relation: '',
    birthday: '',
    hospital: '',
    type: "1",
    phone:"",
});
let showPicker = ref(false);
let showPickerDate = ref(false);
let showPickerHospital = ref(false);

const columns = [
    { text: '本人', value: 0 },
    { text: '父母', value: 1 },
    { text: '子女', value: 2 },
    { text: '祖父母', value: 3 },
    { text: '孙子女', value: 4 },
    { text: '夫妻', value: 5 },
    { text: '兄弟姐妹', value: 6 },
    { text: '其他亲朋', value: 8 },
];
let columnsHospital = ref();

onLoad(async () => {
    const { pageName, pagePath, pageQuery } = useInit();
    changeTitle(pageName);
    await hospitalService.getHospitalList();
    columnsHospital.value = hospitalService.hospitalListInfo.map(item => {
        return { text: item.hospitalName, value: item.hospitalId };
    });
});

const onClickLeft = () => {
    back(1);
}

const onSubmit = () => {

}

const onConfirm = () => {
    showPicker.value = false;
}

const onConfirmDate = () => {
    showPickerDate.value = false;
}

const onConfirmHospital = () => {
    showPickerHospital.value = false;
}
</script>

<template>
    <view class="content">
        <van-nav-bar title="添加成员" left-text="返回" left-arrow @click-left="onClickLeft" :fixed="true" />
        <view class="van-ellipsis title">请填写成员信息</view>
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field name="type" label="成员类型">
                    <template #input>
                        <van-radio-group v-model="formData.type" direction="horizontal">
                            <van-radio name="1">儿童</van-radio>
                            <van-radio name="2">成人</van-radio>
                        </van-radio-group>
                    </template>
                </van-field>
                <van-field v-model="formData.username" name="真实姓名" label="真实姓名" placeholder="真实姓名"
                    :rules="[{ required: true, message: '请填写真实姓名' }]" />
                <van-field v-if="formData.type == '2'" v-model="formData.phone" name="手机号" label="手机号" placeholder="手机号"
                    :rules="[{ required: true, message: '请填写手机号' }]" />
                <van-field v-if="formData.type == '1'" v-model="formData.father" name="父亲姓名" label="父亲姓名" placeholder="父亲姓名"
                    :rules="[{ required: true, message: '请填写父亲姓名' }]" />
                <van-field v-if="formData.type == '1'" v-model="formData.mother" name="母亲姓名" label="母亲姓名" placeholder="母亲姓名"
                    :rules="[{ required: true, message: '请填写母亲姓名' }]" />
                <van-field name="sex" label="性别">
                    <template #input>
                        <van-radio-group v-model="formData.sex" direction="horizontal">
                            <van-radio name="1">男</van-radio>
                            <van-radio name="2">女</van-radio>
                        </van-radio-group>
                    </template>
                </van-field>
                <van-field v-model="formData.relation" is-link readonly name="picker" label="成员关系" placeholder="选择成员关系"
                    @click="showPicker = true" />
                <van-popup v-model:show="showPicker" position="bottom">
                    <van-picker :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
                </van-popup>
                <van-field v-model="formData.birthday" is-link readonly name="datePicker" label="出生日期" placeholder="选择出生日期"
                    @click="showPickerDate = true" />
                <van-popup v-model:show="showPickerDate" position="bottom">
                    <van-date-picker @confirm="onConfirmDate" @cancel="showPickerDate = false" />
                </van-popup>
                <van-field v-model="formData.hospital" is-link readonly name="picker" label="所属医院" placeholder="选择医院"
                    @click="showPickerHospital = true" />
                <van-popup v-model:show="showPickerHospital" position="bottom">
                    <van-picker :columns="columnsHospital" @confirm="onConfirmHospital"
                        @cancel="showPickerHospital = false" />
                </van-popup>
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block color="#FF6100" native-type="submit">
                    确认保存
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

.title {
    padding: 40rpx;
    color: #999999;
    // background: white;
}
</style>
