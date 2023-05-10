import useToggle from "@ast/hooks/toggle";
import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

import { BookmarkIcon as DefaultIcon } from "@heroicons/react/outline";

const Button = styled.button`
  font-size: 2rem;
  all: unset;
  cursor: pointer;
`;

type Props = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  width: string;
  iconBack?: ReactNode;
  defaultColor?: string;
  assentColor?: string;
  onHandleClick: () => void;
};

const BtnWithIcon: FC<Props> = ({
  icon: Icon = DefaultIcon,
  width,
  iconBack,
  defaultColor = "#adadad",
  assentColor = "#a04f4f",
  onHandleClick,
}) => {
  const [toggle, setToggle] = useToggle();

  return (
    <Button
      onClick={() => {
        setToggle();
        onHandleClick();
      }}
    >
      <Icon
        style={{
          width: width,
          color: toggle ? assentColor : defaultColor,
        }}
      />
    </Button>
  );
};

export default BtnWithIcon;
