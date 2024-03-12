import { useState } from "react";
import useWindowWidth from "../../../hooks/user-window-width";
import { StyledButton, StyledSpan, StyledStack } from "./style";
import { Each } from "../../../utils/render";

const Tabs = () => {
  const tabs = ["Today Attendance", "Attendance Sheet", "Employee Attendance"];
  const [active, setActive] = useState(0);
  const width = useWindowWidth();
  return (
    <StyledStack width={width}>
      <Each
        of={tabs}
        render={(item, key) => (
          <StyledButton
            key={key}
            active={active === key}
            onClick={() => setActive(key)}
          >
            {item}
          </StyledButton>
        )}
      />
      <StyledSpan active={active} width={width} />
    </StyledStack>
  );
};

export default Tabs;
