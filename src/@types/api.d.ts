declare namespace Http {
  type Response<T> = Promise<{
    data?: T
  }>
}

declare namespace GetTest {
  interface params {
    a: number
  }
  interface data {
    name: string
    age: number
  }
}

declare namespace PostTest {
  interface params {
    a: number
  }
  interface data {
    val: string
  }
}

declare namespace GetHospitalList {
  interface params {

  }
  interface data {

  }
}

declare namespace PostHospitalList {
  interface params {

  }
  interface data {

  }
}

declare namespace GetHospitalInfo {
  interface params {
    id?: number
  }
  interface data {
    id?: number,
    name?: string,
    logoUrl?: string,
  }
}

declare namespace PostHospitalInfo {
  interface params {
    id?: number
  }
  interface data {
    id?: number,
    name?: string,
    logoUrl?: string,
  }
}

declare namespace GetMemberList {
  interface params {

  }
  interface data extends Array<Member.MemberInfo>{
   
  }
}
