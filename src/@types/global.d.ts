declare namespace Types {
  type Query = {
    replace?: boolean
    [propName: string]: any
  }
}

declare namespace Hospital {
  interface HospitalInfo {
    hospitalName: string
    hospitalIcon: string
    hospitalId: number
    address?: string
    phone?: string
    code?: string
  }
}

declare namespace Member {
  interface MemberInfo {
    age?: number
    ageString?: string
    gender?: number
    id: number
    idcardNumber?: string
    manageUnitId?: number
    name?: string
    isDefault?: boolean
  }
}
