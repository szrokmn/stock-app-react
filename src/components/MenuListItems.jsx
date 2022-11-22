import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

const icons = [
    {
      icon: <DashboardIcon />,
      title: "Dashboard",
      url: "/stock/",
    },
    {
      title: "Purchase",
      icon: <ShoppingCartIcon />,
      url: "/stock/purchases/",
    },
    {
      title: "Sales",
      icon: <AttachMoneyIcon />,
      url: "/stock/sales/",
    },
    {
      title: "Firms",
      icon: <StoreIcon />,
      url: "/stock/firms/",
    },
    {
      title: "Brands",
      icon: <StarsIcon />,
      url: "/stock/brands/",
    },
    {
      title: "Products",
      icon: <InventoryIcon />,
      url: "/stock/products/",
    },
    {
      title: "Admin Panel",
      icon: <SupervisorAccountIcon />,
      url: "https://14163.fullstack.clarusway.com/admin",
    },
  ];

const MenuListItems = () => {
  return (
    <div>
      <List>
        {[].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>       
    </div>
  )
}

export default MenuListItems
