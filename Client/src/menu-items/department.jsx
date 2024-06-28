// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import { FcDepartment } from "react-icons/fc";
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import { PiStudentFill } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';
// icons
const icons = {
  SchoolIcon,
  GroupIcon,
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  FcDepartment,
  PiStudentFill,
  MdOutlinePayment,
  GroupAddTwoToneIcon
 
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const admindepartment = {
  id: 'department',
  title: 'Allocation',
  type: 'group',
  children: [
    {
      id: 'Department Allocation',
      title: 'Department Allocation',
      type: 'item',
      url: '/department',
      icon: icons.FcDepartment
    },
    {
      id: 'staff-allocation',
      title: 'Teacher Allocation',
      type: 'item',
      url: '/staffAllocationIndex',
      icon: icons.GroupAddTwoToneIcon,

    },
    {
      id: 'Student Allocation',
      title: 'Student Allocation',
      type: 'item',
      url: '/allocation',
      icon: icons.PiStudentFill 
    },
    {
      id: 'Fees Allocation',
      title: 'Fees Allocation',
      type: 'item',
      url: '/feescomponents',
      icon: icons. MdOutlinePayment
    },
    
    
  ]
};
const department = sessionStorage.getItem("admin") ? admindepartment:''
export default department;
