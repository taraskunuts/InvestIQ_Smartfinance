import Background from "../assets/icons/Background.svg";

import Products from "../assets/icons/Products.svg";
import Alcohol from "../assets/icons/Alchohol.svg";
import Fun from "../assets/icons/Fun.svg";
import Health from "../assets/icons/Health.svg";
import Transport from "../assets/icons/Transport.svg";
import AllForHome from "../assets/icons/Allforhome.svg";
import Technician from "../assets/icons/Technician.svg";
import Komunalka from "../assets/icons/Komunalka.svg";
import Learning from "../assets/icons/Learning.svg";
import Other from "../assets/icons/Other.svg";
import Sport from "../assets/icons/Sport.svg";

export const expenseCategories = [
  {
    id: "products",
    title: "ПРОДУКТИ",
    icon: Products,
    background: Background,
    amount: 0,
  },
  {
    id: "alcohol",
    title: "АЛКОГОЛЬ",
    icon: Alcohol,
    background: Background,
    amount: 0,
  },
  {
    id: "fun",
    title: "РОЗВАГИ",
    icon: Fun,
    background: Background,
    amount: 0,
  },
  {
    id: "health",
    title: "ЗДОРОВ'Я",
    icon: Health,
    background: Background,
    amount: 0,
  },
  {
    id: "transport",
    title: "ТРАНСПОРТ",
    icon: Transport,
    background: Background,
    amount: 0,
  },
  {
    id: "home",
    title: "ВСЕ ДЛЯ ДОМУ",
    icon: AllForHome,
    background: Background,
    amount: 0,
  },
  {
    id: "tech",
    title: "ТЕХНІКА",
    icon: Technician,
    background: Background,
    amount: 0,
  },
  {
    id: "utilities",
    title: "КОМУНАЛКА,\nЗВ'ЯЗОК",
    icon: Komunalka,
    background: Background,
    amount: 0,
  },
  {
    id: "education",
    title: "НАВЧАННЯ",
    icon: Learning,
    background: Background,
    amount: 0,
  },
  {
    id: "other",
    title: "ІНШЕ",
    icon: Other,
    background: Background,
    amount: 0,
  },
  {
    id: "sport",
    title: "СПОРТ, ХОБІ",
    icon: Sport,
    background: Background,
    amount: 0,
  },
];

export const incomeCategories = expenseCategories.map(category => ({
  ...category,
}));