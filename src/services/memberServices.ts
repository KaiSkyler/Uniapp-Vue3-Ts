import { apiMemberList } from '@/api/apiList';
export class memberServices {

    memberList: Array<Member.MemberInfo>;
    memberInfo: Member.MemberInfo;

    constructor(memberInfo: Member.MemberInfo = {} as Member.MemberInfo, memberList: Array<Member.MemberInfo> = []){
        this.memberInfo = memberInfo;
        this.memberList = memberList;
    }

    get currentMemberInfo(){
        return this.memberInfo;
    }

    get memberListInfo(){
        return this.memberList;
    }

    async getMemberList(){
        const res = await apiMemberList.GetMemberList({});
        this.memberList = (res.data as any[]).map((item,index) =>{
            item.tel = item.ageString
            return item;
        })
    }

    changeCurrentMemberInfo(memberInfo: Member.MemberInfo = {} as Member.MemberInfo,){
        this.memberInfo = memberInfo;
    }
}