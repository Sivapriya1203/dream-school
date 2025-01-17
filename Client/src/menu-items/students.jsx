// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
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
  Groups2TwoToneIcon,
  GroupAddTwoToneIcon

};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const admindomains = {
  id: 'Entries',
  title: 'Domains',
  type: 'group',
  children: [
    {
      id: 'student-index',
      title: 'Students',
      type: 'item',
      url: '/allStudents',
      icon: icons.SchoolIcon
    },
   
    
    {
      id: 'staff-index',
      title: 'Teachers',
      type: 'item',
      url: '/allstaffs',
      icon: icons.Groups2TwoToneIcon,

    },
   
    
  ]
};
const teacherdomain={
  id: 'Entries',
  title: 'Fields',
  type: 'group',
  children: [
   
    {
      id: 'Classstudent',
      title: 'Class Students',
      type: 'item',
      url: '/classstudents',
      icon: icons.SchoolIcon
    },
    {
      id: 'Attendance',
      title: 'Attendance Detail',
      type: 'item',
      url: '/attendance',
      icon: icons.SchoolIcon
    },
    {
      id: 'Mark allocation',
      title: 'Mark Allocation',
      type: 'item',
      url: '/exams',
      icon: icons.SchoolIcon
    },
    {
      id: 'Profile',
      title: 'Profile',
      type: 'item',
      url: '/profile',
      icon: icons.SchoolIcon
    },
    
   
   
    
  ]
}
const domains = sessionStorage.getItem("admin") ? admindomains :
sessionStorage.getItem("employeeLoggedIn") ? teacherdomain :''
export default domains;
