import { Box, colors, styled } from "@mui/material";
import { Icons } from "../../../assets";
import { IconButton } from "../Button/IconButton";

export const Header = () => {
  return (
    <Wrapper>
      <Box>
        <IconButton>
          <Icons.Logo />
        </IconButton>
      </Box>
      <WrapperNavigate>
        <p>Каталог</p>
        <p>Галерея</p>
        <p>О лаборатории</p>
        <p>Контакты</p>
      </WrapperNavigate>
      <WrapperIcons>
        <IconButton>
          <Icons.Search />
        </IconButton>
        <IconButton>
          <Icons.LogIn />
        </IconButton>
      </WrapperIcons>
    </Wrapper>
  );
};

const Wrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "rgba(29, 47, 48, 1)",
  padding: "0px 150px",
});
const WrapperNavigate = styled(Box)({
  display: "flex",
  gap: "64px",
  p: {
    color: "#ffffff",
  },
});
const WrapperIcons = styled(Box)({
  display: "flex",
  gap: "64px",
});
