import { MockMethod } from "vite-plugin-mock"

const mock: Array<MockMethod> = [
    {
        // 接口路径
        url: '/api/getHospitalList',

        // 接口方法
        method: 'get',

        // 返回数据
        response: () => {
            return {
                errno: 0,
                statusCode: 200,
                message: 'success',
                data: [{ "id": 161, "name": "珠海市人民医院院区狮山社区健康服务中心（山峰路8号）", "code": "4404021101", "logoUrl": "/uploads/pictures/hospital/WX20200430-100652@2x.png?v=1206", "stateStr": "" }, { "id": 2, "name": "珠海市妇幼保健院", "code": "4404021201", "logoUrl": "/uploads/pictures/hospital/fyxin.png?v=1206", "stateStr": "" }, { "id": 3, "name": "三灶镇卫生院", "code": "4404040101", "logoUrl": "/uploads/pictures/hospital/default8.jpg", "stateStr": "" }, { "id": 1, "name": "横琴社区卫生服务中心", "code": "4404021701", "logoUrl": "/uploads/pictures/hospital/default8.jpg", "stateStr": "" }, { "id": 81, "name": "中山市三乡镇社区卫生服务中心", "code": "4420011901", "logoUrl": "/uploads/pictures/hospital/sanxiang.png", "stateStr": "" }, { "id": 121, "name": "蓬江区北街社区卫生服务中心", "logoUrl": "/uploads/pictures/hospital/default8.jpg", "stateStr": "" }, { "id": 141, "name": "蓬江区兴盛社区卫生服务中心", "logoUrl": "/uploads/pictures/hospital/yiyuanlogo.jpg", "stateStr": "" }, { "id": 261, "name": "测试医院(预约无效)", "code": "01", "logoUrl": "/uploads/pictures/hospital/新妈fm001副本副本0副本.png", "stateStr": "" }, { "id": 503, "name": "沙洲尾社区卫生服务中心", "code": "4402030101", "logoUrl": "/uploads/pictures/hospital/default8.jpg", "stateStr": "" }, { "id": 564, "name": "广东省中医院珠海医院", "code": "4404020502", "logoUrl": "/uploads/pictures/hospital/中医院logo.png?v=1206", "stateStr": "" }, { "id": 408, "name": "金鼎社区卫生服务中心", "code": "4404020801", "logoUrl": "/uploads/pictures/hospital/default8.jpg", "stateStr": "" }, { "id": 363, "name": "中山市坦洲人民医院", "code": "4420230101", "logoUrl": "/uploads/pictures/hospital/坦洲医院logo.png", "stateStr": "" }, { "id": 383, "name": "珠海市第五人民医院（平沙医院）", "code": "4404040401", "logoUrl": "/uploads/pictures/hospital/平沙医院LOGO.png", "stateStr": "" }, { "id": 604, "name": "弥勒市朋普中心卫生院", "code": "53252601", "logoUrl": "/uploads/pictures/hospital/pengpu.jpg", "stateStr": "" }, { "id": 644, "name": "西区街道卫康街预防接种门诊", "code": "4420010301", "logoUrl": "/uploads/pictures/hospital/default8.jpg", "stateStr": "" }, { "id": 283, "name": "开平市长沙社区卫生服务中心(总部)", "logoUrl": "/uploads/pictures/hospital/社区医院logo.png", "stateStr": "" }, { "id": 463, "name": "大涌镇社区卫生服务中心", "code": "4420011401", "logoUrl": "/uploads/pictures/hospital/default8.jpg", "stateStr": "" }, { "id": 624, "name": "云南省昭通市仁安医院", "logoUrl": "/uploads/pictures/hospital/renan.jpg", "stateStr": "" }, { "id": 201, "name": "开平市水口医院", "logoUrl": "/uploads/pictures/hospital/开平水口医院logo.jpg", "stateStr": "" }, { "id": 221, "name": "梅州市江南社区卫生服务中心", "logoUrl": "/uploads/pictures/hospital/社区医院logo.png", "stateStr": "" }, { "id": 181, "name": "鹤山市沙坪街道卫生院", "logoUrl": "/uploads/pictures/hospital/鹤山市沙坪街道卫生院.jpg", "stateStr": "" }, { "id": 584, "name": "中山市宝元医院", "logoUrl": "/uploads/pictures/hospital/11.jpg", "stateStr": "" }, { "id": 444, "name": "中山大学附属第五医院", "code": "4404021301", "logoUrl": "/uploads/pictures/hospital/蓝色带白色描边副本.png", "stateStr": "" }, { "id": 423, "name": "沙溪社区卫生服务中心", "code": "4420011301", "logoUrl": "/uploads/pictures/hospital/default8.jpg", "stateStr": "" }, { "id": 409, "name": "湾仔社区卫生服务中心", "code": "4404020701", "logoUrl": "/uploads/pictures/hospital/default8.jpg", "stateStr": "" }, { "id": 282, "name": "开平市长沙社区卫生服务中心(东兴)", "logoUrl": "/uploads/pictures/hospital/社区医院logo.png", "stateStr": "" }, { "id": 262, "name": "开平市三埠社区卫生服务中心(荻海)", "logoUrl": "/uploads/pictures/hospital/社区医院logo.png", "stateStr": "" }, { "id": 764, "name": "珠海市鹤洲民兴社区卫生服务中心", "code": "4404230719", "logoUrl": "/uploads/pictures/hospital/default8.jpg", "stateStr": "" }, { "id": 784, "name": "珠海市桂山镇中心卫生院", "code": "4404230811", "logoUrl": "/uploads/pictures/hospital/gsz.jpg", "stateStr": "" }, { "id": 443, "name": "中山市沙溪隆都医院", "code": "4420011302", "logoUrl": "/uploads/pictures/hospital/ldlogo.jpg", "stateStr": "" }, { "id": 483, "name": "红旗卫生院医院", "code": "4404040201", "logoUrl": "/uploads/pictures/hospital/default8.jpg", "stateStr": "" }]
            }
        }
    },
    {
        // 接口路径
        url: '/api/getHospitalInfo',

        // 接口方法
        method: 'get',

        // 返回数据
        response: () => {
            return {
                errno: 0,
                statusCode: 200,
                message: 'success',
                data: {
                    address: "三乡镇金谷大道366号岚彩名苑16栋11卡6楼",
                    code: "4420011901",
                    grade: "二级甲等",
                    id: 81,
                    logoUrl: "/uploads/pictures/hospital/sanxiang.png",
                    name: "中山市三乡镇社区卫生服务中心",
                    phone: "0760-28176229",
                    stateStr: "",
                }
            }
        }
    }
]



export default mock