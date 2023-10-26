import { apiHospitalList, apiHospitalInfo } from '@/api/apiList';
export class hospitalServices {

    hospitalList: Array<Hospital.HospitalInfo>;

    hospitalInfo: Hospital.HospitalInfo;

    constructor(hospitalList: Array<Hospital.HospitalInfo> = [], hospitalInfo: Hospital.HospitalInfo = {} as Hospital.HospitalInfo) {
        // console.log('hospitalServices构造方法调用')
        this.hospitalList = hospitalList;
        this.hospitalInfo = hospitalInfo;
    }

    get hospitalListInfo() {
        return this.hospitalList;
    }

    get currentHospitalInfo() {
        return this.hospitalInfo;
    }

    async getHospitalList() {
        const res = await apiHospitalList.getHospitalList({});
        this.hospitalList = (res.data as any[]).map(item => {
            return {
                hospitalIcon: item.logoUrl,
                hospitalName: item.name,
                hospitalId: item.id,
            };
        });
        //console.log(this.hospitalList)
    }

    async getHospitalInfoById(id: number) {
        const res = await apiHospitalInfo.getHospitalInfo({ id: id });
        this.hospitalInfo = {
            hospitalIcon: res.data?.logoUrl as string,
            hospitalName: res.data?.name as string,
            hospitalId: res.data?.id as number,
        }
    }
}

