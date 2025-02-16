"use client";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";

const NAVIGATION = [
  { kind: "header", title: "Main items" },
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  { segment: "orders", title: "Orders", icon: <ShoppingCartIcon /> },
  { kind: "divider" },
  { kind: "header", title: "Analytics" },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      { segment: "sales", title: "Sales", icon: <DescriptionIcon /> },
      { segment: "traffic", title: "Traffic", icon: <DescriptionIcon /> },
    ],
  },
  { segment: "integrations", title: "Integrations", icon: <LayersIcon /> },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  const toggleSidebar = () => setExpanded((prev) => !prev);

  return (
    <Box
      className="bg-gray-900 text-white h-full flex flex-col justify-between transition-all duration-300 top-0 sticky flex-[0 20%] px-3"
      style={{ width: expanded ? "300px" : "72px" }}
    >
      {/* Navegación */}
      <Box className="p-2 space-y-2">
        {NAVIGATION.map((item, index) => {
          switch (item.kind) {
            case "header":
              return (
                <Box
                  key={index}
                  className={`text-xs font-bold uppercase text-white ${
                    expanded ? "block" : "hidden"
                  }`}
                >
                  {item.title}
                </Box>
              );

            case "divider":
              return <Box key={index} className="h-[1px] bg-white/30" />;

            default:
              return (
                <Tooltip
                  key={index}
                  title={item.title}
                  placement="right"
                  disableHoverListener={expanded}
                >
                  <Box
                    className={`flex items-center cursor-pointer hover:bg-white/20 rounded-md p-2 ${
                      expanded ? "" : "justify-center"
                    }`}
                  >
                    <span className="text-white">{item.icon}</span>
                    {expanded && (
                      <span className="ml-3 text-white font-medium">
                        {item.title}
                      </span>
                    )}
                  </Box>
                </Tooltip>
              );
          }
        })}
      </Box>

      <Box className="p-1 flex justify-center items-center cursor-pointer border-t border-white">
        <IconButton onClick={toggleSidebar} sx={{ color: "white" }}>
          {expanded ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Box>
    </Box>
  );
}
