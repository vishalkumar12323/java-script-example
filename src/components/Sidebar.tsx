"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, Home, Settings, User } from "lucide-react";

const sidebarMenu = [
  {
    title: "Dashboard",
    icon: Home,
    items: ["Overview", "Analytics", "Reports"],
  },
  {
    title: "Settings",
    icon: Settings,
    items: ["Profile", "Account", "Security"],
  },
  {
    title: "Users",
    icon: User,
    items: ["All Users", "Permissions", "Roles"],
  },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar toggle state
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <aside
      className={cn(
        "h-screen bg-gray-900 text-white w-64 p-4",
        !isOpen && "w-20"
      )}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2">
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Sidebar Menu */}
      <nav className="mt-4 space-y-2">
        {sidebarMenu.map(({ title, icon: Icon, items }) => (
          <Collapsible
            key={title}
            open={!!openSections[title]}
            onOpenChange={() => toggleSection(title)}>
            {/* Collapsible Trigger */}
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full flex justify-between items-center text-left p-2">
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  {isOpen && <span>{title}</span>}
                </div>
                {isOpen && (
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      openSections[title] && "rotate-180"
                    )}
                  />
                )}
              </Button>
            </CollapsibleTrigger>

            {/* Collapsible Content */}
            <CollapsibleContent className="ml-6 space-y-1">
              {items.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="w-full text-left p-2 pl-4">
                  {isOpen ? item : "•"}
                </Button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </nav>
    </aside>
  );
}
