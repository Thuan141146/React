export const adminMenu = [
    { //Quản lý người dùng
        name: 'menu.admin.manage-user',
        menus: [
            {
                name: 'menu.admin.crud', link: '/system/redux'

            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux'

            },

            {
                name: 'menu.admin.manage-nv', link: '/system/user-nv'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                //      { name: 'menu.system.system-administrator.register-package-group-or-account', link: '/system/register-package-group-or-account' },
                // ]
            },
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
            {
                name: 'menu.admin.manage-admin', link: '/system/user-admin'

            },

        ]
    },
    { //Quản Lý sản phẩm
        name: 'menu.admin.manage-product',
        menus: [
            {
                name: 'menu.admin.manage-doanhmuc', link: '/system/danh-muc'
            },
            {
                name: 'menu.admin.manage-sp', link: '/system/san-pham'
            },
        ]
    },
    { //Quản lý sự kiện
        name: 'menu.admin.manage-event',
        menus: [
            {
                name: 'menu.admin.manage-dmsk', link: '/system/user-redux'
            },
            {
                name: 'menu.admin.manage-ctsk', link: '/system/user-redux'
            },
        ]
    },
    { //Quản lý đơn hàng
        name: 'menu.admin.manage-dh',
        menus: [
            {
                name: 'menu.admin.manage-vesk', link: '/system/user-redux'

            },

            {
                name: 'menu.admin.manage-db', link: '/system/user-nv'
            },
            {
                name: 'menu.admin.manage-dsp', link: '/system/user-admin'

            },
        ]
    },
    { //Quản lý doanh thu
        name: 'menu.admin.manage-dt',
        menus: [

            {
                name: 'menu.admin.manage-tc', link: '/system/user-nv'
            },
            {
                name: 'menu.admin.manage-ctdt', link: '/system/user-admin'

            },
        ]
    },

];