import { useRouter } from "next/router";
import React, { ReactNode, ReactElement } from "react";
import { useState } from "react";
import {} from "react";
import { useLayer, UseLayerProps } from "react-laag";
import { useTheme } from "../theme/theme.provider";
import Button, { buttonProps } from "./Button";
import { Paragraph } from "./Typography";

export type dropdownItem = {
  icon: ReactNode;
  name: string;
  link?: string;
  isAction?: boolean;
  onClick?: () => void;
};

export interface dropdownProps {
  items: dropdownItem[];
  anchor: ReactNode;
}

export interface dropdownBoxProps {
  children: ReactElement | Element | Element[] | ReactElement[];
}

export const DropdownBox: React.FC<dropdownBoxProps> = ({ children }) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;
  return (
    <div
      className={`bg-${theme}-default flex flex-col rounded-md max-w-xs w-40 z-20 shadow-lg`}
    >
      {children}
    </div>
  );
};

const Dropdown: React.FC<dropdownProps> = ({ items, anchor }) => {
  const [open, setOpen] = useState(false);
  const { push } = useRouter();
  const themeCtx = useTheme();
  const theme = themeCtx.theme;

  const onClose = () => {
    setOpen(false);
  };

  const routeLink = (link: string) => {
    push(link);
  };

  const renderItems = (items: dropdownItem[]) => {
    return items.map((item, index) => {
      return (
        <a
          key={`${index} ${item.name}`}
          onClick={() => {
            item.onClick();
            onClose();
          }}
          className={`w-full flex flex-row items-center px-3 py-2 cursor-pointer hover:bg-${theme}-box-box1 
          ${index === 0 && `rounded-t-md`} 
          ${index === items.length - 1 && `rounded-b-md`} 
          ${item.isAction && `bg-${theme}-box-box3`}`}
        >
          <span className={`flex items-center`}>
            <span className={`mr-2 items-center text-tny text-${theme}-text`}>
              {item.icon}
            </span>
          </span>
          <Paragraph>{item.name}</Paragraph>
        </a>
      );
    });
  };

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen: open,
    onOutsideClick: onClose,
    onDisappear: onClose,
    overflowContainer: false,
    placement: `bottom-end`,
    triggerOffset: 15,
    containerOffset: 100,
  });

  return (
    <>
      <span
        {...triggerProps}
        className={`flex align-middle`}
        onClick={() => setOpen(!open)}
      >
        {anchor}
      </span>
      {open &&
        renderLayer(
          <div ref={layerProps.ref} style={layerProps.style} className={`z-50`}>
            <DropdownBox>{renderItems(items)}</DropdownBox>
          </div>
        )}
    </>
  );
};

export default Dropdown;
