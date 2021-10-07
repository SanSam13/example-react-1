/**
 * Arreglo de las opciones del menu de navegación
 */
export const MenuData = [
    {
      title: 'Home',
      path: '/',
      cName: 'nav-item',
      submenu : []
    },
    {
      title: 'Nosotros',
      path: '/us',
      cName: 'nav-item',
      submenu : []
    },
    {
      title: 'Productos',
      path: '/products',
      cName: 'nav-item',
      submenu : [
          {
            title: 'producto 1',
            path: '/product1',
            cName: 'dropdown-link'
          },
          {
            title: 'producto 2',
            path: '/product2',
            cName: 'dropdown-link'
          },
          {
            title: 'producto 3',
            path: '/product3',
            cName: 'dropdown-link'
          },
      ]
    },
    {
      title: 'Contacto',
      path: '/contact',
      cName: 'nav-item',
      submenu : []
    }
];