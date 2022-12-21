import * as FaIcons from "react-icons/fa"

  export const sidebarData = [
    {
      id: 1,
      name: "Главная",
      path: "",
      icon: <FaIcons.FaHome size={25}/>,
    },
    {
      id: 2,
      name: "Мои магазины",
      path: "myshops",
      icon: <FaIcons.FaShoppingCart size={25}/>,
    },
    {
      id: 3,
      name: "Промоматериалы",
      path: "promos",
      icon: <FaIcons.FaVolumeUp size={25}/>,
    },
    {
      id: 4,
      name: "Статистика",
      path: "stats",
      icon: <FaIcons.FaChartPie size={25}/>,
    },
    {
      id: 5,
      name: "Баланс",
      path: "balance",
      icon: <FaIcons.FaWallet size={25}/>,
    },
    {
      id: 6,
      name: "Персональные данные",
      path: "personal",
      icon: <FaIcons.FaRegUserCircle size={25}/>,
    },
    {
      id: 7,
      name: "FAQ",
      path: "FAQ",
      icon: <FaIcons.FaQuestionCircle size={25}/>,
    },
    {
      id: 8,
      name: "Техподдержка",
      path: "support",
      icon: <FaIcons.FaHeadset size={25}/>,
    },
    {
      id: 9,
      name: "Выход",
      path: "exit",
      icon: <FaIcons.FaDoorOpen size={25}/>,
    },
  ];
