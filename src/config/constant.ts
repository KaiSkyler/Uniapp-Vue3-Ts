const indexPageConstant = {
    menuNav: [
        // {
        //     icon: 'location',
        //     text: '现场取号',
        // },
        {
            icon: 'friends',
            text: '儿童预约',
        },
        {
            icon: 'like',
            text: 'HPV预约',
        },
        {
            icon: 'user',
            text: '成人预约',
        },
        {
            icon: 'todo-list',
            text: '儿保预约',
        },
        {
            icon: 'column',
            text: '体检计划',
        },
        {
            icon: 'diamond',
            text: '会员服务',
        },
    ],
    images: [
        'https://img.yzcdn.cn/2.jpg',
        'https://img.yzcdn.cn/2.jpg'
    ],
};

const hospitalPageConstant = {
    menuNav: [
        {
            icon: 'location',
            text: '现场取号',
        },
        {
            icon: 'friends',
            text: '儿童预约',
        },
        {
            icon: 'like',
            text: 'HPV预约',
        },
        {
            icon: 'user',
            text: '成人预约',
        },
        {
            icon: 'todo-list',
            text: '儿保预约',
        },
        {
            icon: 'clock',
            text: '我的预约',
        },
        {
            icon: 'shop',
            text: '我的一家',
        },
        {
            icon: 'volume',
            text: '通知公告',
        },
    ],
    images: [
        'https://img.yzcdn.cn/2.jpg',
        'https://img.yzcdn.cn/2.jpg'
    ],
};

const profilePageConstant = {
    menuNav: [
        {
            icon: 'diamond-o',
            text: '会员服务',
            pageName: '',
        },
        {
            icon: 'friends-o',
            text: '我的一家',
            pageName: 'member',
        },
        {
            icon: 'clock-o',
            text: '我的预约',
            pageName: '',
        },
        {
            icon: 'edit',
            text: '修改密码',
            pageName: '',
        },
        {
            icon: 'phone-o',
            text: '修改手机',
            pageName: '',
        },
        {
            icon: 'todo-list-o',
            text: '违约记录',
            pageName: '',
        },
    ],
    images: [
        'https://img.yzcdn.cn/2.jpg',
        'https://img.yzcdn.cn/2.jpg'
    ],
};

export function getConstant() {
    return {
        indexPageConstant,
        hospitalPageConstant,
        profilePageConstant
    }
}

