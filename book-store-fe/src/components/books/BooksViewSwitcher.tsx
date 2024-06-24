import { FaList, FaTh } from "react-icons/fa";
import styled from "styled-components";
import Button from "../common/Button";
import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "../../constants/querystring";
import { useEffect } from "react";

const viewOptions = [
  {
    value: "list",
    icon: <FaList />,
  },
  {
    value: "grid",
    icon: <FaTh />,
  },
];

export type ViewMode = "grid" | "list";

function BooksViewSwitcher() {
  const [searhcParams, setSearchParams] = useSearchParams();

  const handleSwitch = (value: ViewMode) => {
    const newSearchParams = new URLSearchParams(searhcParams);

    newSearchParams.set(QUERYSTRING.VIEW, value);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    if (!searhcParams.get(QUERYSTRING.VIEW)) {
      handleSwitch("grid");
    }
  });
  return (
    <BooksViewSwitcherStyle>
      {viewOptions.map((option) => (
        <Button
          size='medium'
          scheme={
            searhcParams.get(QUERYSTRING.VIEW) === option.value
              ? "primary"
              : "normal"
          }
          onClick={() => handleSwitch(option.value as ViewMode)}
        >
          {option.icon}
        </Button>
      ))}
    </BooksViewSwitcherStyle>
  );
}
const BooksViewSwitcherStyle = styled.div`
  display: flex;
  gap: 8px;
  svg {
    fill: #fff;
  }
`;

export default BooksViewSwitcher;
