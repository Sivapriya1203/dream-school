// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { FaTableCells } from "react-icons/fa6";
import { MdHail } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { LuHistory } from "react-icons/lu";
// icons
const icons = {
  CurrencyRupeeIcon,
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  FaTableCells,
  MdHail,
  CiDiscount1,
  LuHistory  
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const adminutilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    // {
    //   id: 'util-typography',
    //   title: 'Fees management',
    //   type: 'item',
    //   url: '/feespay',
    //   icon: icons.CurrencyRupeeIcon
    // },
    // {
    //   id: 'fees-logs',
    //   title: 'Fees Logs',
    //   type: 'item',
    //   url: '/allFeesLogIndex',
    //   icon: icons.LuHistory
    // },
    // {
    //   id: 'util-discount',
    //   title: 'Discount Index',
    //   type: 'item',
    //   url: '/discount',
    //   icon: icons.CiDiscount1 
    // },
    
    {
      id: 'time-table',
      title: 'Time Table ',
      type: 'item',
      url: '/timeTableIndex',
      icon: icons.FaTableCells 
    },
  
    // {
    //   id: 'Student-attenance',
    //   title: 'Student-attenance ',
    //   type: 'item',
    //   url: '/Studattenance',
    //   icon: icons.MdHail
    // },
  
  ]
};
 const utilities = sessionStorage.getItem("admin") ? adminutilities:''
export default utilities;
