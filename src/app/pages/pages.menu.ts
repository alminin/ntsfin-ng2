export const PAGES_MENU = [
    {
        path: 'pages',
        children: [
            // array of children menu objects, each of them can have it's own children
            {
                path: 'dashboard',
                data: {
                    menu: {
                        title: 'Dashboard',
                        icon: 'ion-android-home',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            }
        ]
    }

]
