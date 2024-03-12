import { IconButton, ListItemIcon } from "@mui/material";
import { RiUserSettingsFill as user_manage } from "react-icons/ri";
import { LuLayoutDashboard as dasboard } from "react-icons/lu";
import {
  BiChevronDown,
  BiSolidCalendarCheck as attendance,
} from "react-icons/bi";
import { HiChartBarSquare as reports } from "react-icons/hi2";
import { IoMdListBox as forms } from "react-icons/io";
import { IconType } from "react-icons/lib";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  StyledIndicator,
  StyledList,
  StyledListItem,
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
} from "./style";
import { Each, Show } from "../../../utils/render";

interface Iprops {
  toggleClose: () => void;
}
interface Link {
  title: string;
  icon: IconType;
  route: string;
  submenu?: Link[];
  haveSubs?: boolean;
}
const links: Link[] = [
  { title: "Dashboard", icon: dasboard, route: "/" },
  { title: "User Management", icon: user_manage, route: "/user-management" },
  { title: "Attendance", icon: attendance, route: "/attendance" },
  { title: "Forms", icon: forms, route: "/forms", submenu: [], haveSubs: true },
  { title: "Reports", icon: reports, route: "/reports", haveSubs: true },
];

const LinksContainer = (props: Iprops) => {
  const location = useLocation();
  const topPosition = links.findIndex(
    (link) => link.route === location.pathname
  );
  const elementRef = useRef<HTMLElement>(null);
  const [scrollbarVisible, setScrollbarVisible] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = (route: string) => {
    navigate(route);
    props.toggleClose();
  };

  useEffect(() => {
    const element = elementRef.current;
    const checkScrollbar = () => {
      if (element) {
        setScrollbarVisible(element.scrollHeight > element.clientHeight);
      }
    };
    checkScrollbar();
    window.addEventListener("resize", checkScrollbar);
    return () => {
      window.removeEventListener("resize", checkScrollbar);
    };
  }, []);

  return (
    <StyledList ref={elementRef as any}>
      <Each
        of={links}
        render={(item) => (
          <StyledListItem
            selected={location.pathname === item.route}
            onClick={() => handleNavigate(item.route)}
          >
            <StyledListItemButton dense={false}>
              <StyledListItemIcon active={location.pathname === item.route}>
                <item.icon />
              </StyledListItemIcon>
              <StyledListItemText primary={item.title} />
              <Show>
                <Show.When isTrue={item.haveSubs!}>
                  <ListItemIcon>
                    <IconButton size="small">
                      <BiChevronDown color="white" />
                    </IconButton>
                  </ListItemIcon>
                </Show.When>
              </Show>
            </StyledListItemButton>
          </StyledListItem>
        )}
      />
      <StyledIndicator topPosition={topPosition} isLeft={scrollbarVisible} />
    </StyledList>
  );
};

export default LinksContainer;
