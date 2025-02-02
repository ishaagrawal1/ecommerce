export const items: Array<any> = [
  { label: 'Home', icon: 'pi pi-home text-cyan-500', routerLink: '/' },
  { label: 'Search', icon: 'pi pi-search' },
  {
    label: 'Products',
    icon: 'pi pi-box text-amber-600 ',
    routerLink: '/products',
  },
  {
    label: 'Cart',
    icon: 'pi pi-shopping-cart text-green-500',
    routerLink: '/cart',
  },
  {
    label: 'Favorites',
    icon: 'pi pi-heart text-red-500',
    routerLink: '/favorites',
  },
  {
    label: 'My Orders',
    icon: 'pi pi-truck text-purple-600',
    routerLink: '/orders',
  },
];
export const ItemsAdmin: Array<any> = [
  {
    label: 'Dashboard',
    icon: 'pi pi-objects-column text-cyan-500',
    routerLink: '/admin/dashboard',
  },
  { label: 'Search', icon: 'pi pi-search' },
  {
    label: 'Products',
    icon: 'pi pi-box text-amber-600 ',
    routerLink: '/products',
  },
  {
    label: 'General Links',
    icon: 'pi pi-desktop text-rose-500',
    items: [
      {
        label: 'Cart',
        icon: 'pi pi-shopping-cart text-green-500',
        routerLink: '/cart',
      },
      {
        label: 'Favorites',
        icon: 'pi pi-heart text-red-500',
        routerLink: '/favorites',
      },
      {
        label: 'My Orders',
        icon: 'pi pi-truck text-purple-600',
        routerLink: '/orders',
      },
    ],
  },
  {
    label: 'AdminPanel',
    icon: 'pi pi-crown text-blue-500',
    items: [
      {
        label: 'Manage Users',
        icon: 'pi pi-users ',
        routerLink: 'admin/users',
      },
      {
        label: 'Fullfilment Orders',
        icon: 'pi pi-truck ',
        routerLink: 'admin/fulfilment',
      },
      {
        label: 'Manage Products',
        icon: 'pi pi-box ',
        routerLink: 'admin/products',
      },
      {
        label: 'Manage Brands',
        icon: 'pi pi-tags ',
        routerLink: 'admin/brands',
      },
      {
        label: 'Manage Categories',
        icon: 'pi pi-sort-alpha-down ',
        routerLink: 'admin/categories',
      },
      {
        label: 'Manage Sub-Categories ',
        icon: 'pi pi-sitemap',
        routerLink: 'admin/sub-categories',
      },
      {
        label: 'Manage Units',
        icon: 'pi pi-calculator ',
        routerLink: 'admin/units',
      },
      {
        label: 'Manage Taxes',
        icon: 'pi pi-indian-rupee ',
        routerLink: 'admin/taxes',
      },
      {
        label: 'Manage Variations ',
        icon: 'pi pi-palette',
        routerLink: 'admin/variations',
      },
    ],
  },
];
export const ItemsSeller: Array<any> = [
  {
    label: 'Dasdboard',
    icon: 'pi pi-objects-column text-cyan-500',
    routerLink: '/seller/dashboard',
  },
  { label: 'Search', icon: 'pi pi-search' },
  {
    label: 'Products',
    icon: 'pi pi-box text-amber-600 ',
    routerLink: '/products',
  },
  {
    label: 'General Links',
    icon: 'pi pi-desktop text-rose-500',
    items: [
      {
        label: 'Cart',
        icon: 'pi pi-shopping-cart text-green-500',
        routerLink: '/cart',
      },
      {
        label: 'Favorites',
        icon: 'pi pi-heart text-red-500',
        routerLink: '/favorites',
      },
      {
        label: 'My Orders',
        icon: 'pi pi-truck text-purple-600',
        routerLink: '/orders',
      },
    ],
  },
  {
    label: 'SellerPanel',
    icon: 'pi pi-shop text-blue-500',
    items: [
      {
        label: 'Fullfilment Orders',
        icon: 'pi pi-truck ',
        routerLink: 'seller/fulfilment',
      },
      {
        label: 'Manage Products',
        icon: 'pi pi-box ',
        routerLink: 'seller/products',
      },
    ],
  },
];
