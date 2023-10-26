import http from '@/utils/request';

export const apiHospitalList = {
  getHospitalList: (params: GetHospitalList.params) => http.get<GetHospitalList.data>('/getHospitalList', params),
  postHospitalList: (params: PostHospitalList.params) => http.post<PostHospitalList.data>('/getHospitalList', params)
};

export const apiHospitalInfo = {
  getHospitalInfo: (params: GetHospitalInfo.params) => http.get<GetHospitalInfo.data>('/getHospitalInfo', params),
  postHospitalInfo: (params: PostHospitalInfo.params) => http.post<PostHospitalInfo.data>('/getHospitalInfo', params)
};

export const apiMemberList = {
  GetMemberList: (params: GetMemberList.params) => http.get<GetMemberList.data>('/getMemberList', params)
};

