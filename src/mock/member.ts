import { MockMethod } from "vite-plugin-mock"

const mock: Array<MockMethod> = [
    {
        // 接口路径
        url: '/api/getMemberList',

        // 接口方法
        method: 'get',

        // 返回数据
        response: () => {
            return {
                errno: 0,
                statusCode: 200,
                message: 'success',
                data: [{ "id": 1478932, "gender": 2, "age": 37, "name": "杜少华", "ageString": "37岁0月", "manageUnitId": 101, "idcardNumber": "442000198610062947" }, { "id": 1478957, "gender": 2, "age": 36, "name": "郑颖欣", "ageString": "36岁6月", "manageUnitId": 101 }, { "id": 1484938, "gender": 1, "age": 26, "name": "陈", "ageString": "26岁7月", "idcardNumber": "442000199410181278" }, { "id": 1584928, "gender": 2, "age": 11, "name": "陈伟霆", "ageString": "11岁2月" }, { "id": 27061, "gender": 1, "age": 1, "name": "李立志", "ageString": "1岁1月" }, { "id": 11423, "gender": 1, "age": 1, "name": "杨天天", "ageString": "1岁1月", "idcardNumber": "431227199005210019" }, { "id": 1317708, "gender": 1, "age": 1, "name": "陈伟霆", "ageString": "1岁0月" }, { "id": 27004, "gender": 2, "age": 1, "name": "赵敏轩", "ageString": "1岁0月" }, { "id": 1374892, "gender": 1, "age": 0, "name": "XXXX", "ageString": "0岁11月" }]
            }
        }
    },
]


export default mock