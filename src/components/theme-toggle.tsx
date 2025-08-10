import {
  Box,
  Divider,
  IconButton,
  MenuItem,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { TbContrast, TbMoon, TbSun } from "react-icons/tb";
import useThemeStore from "../store/theme-store";
import { useEffect, useState } from "react";

const options: {
  icon: any;
  value: "light" | "dark" | "system";
  name: string;
}[] = [
  {
    icon: <TbSun />,
    value: "light",
    name: "Light Mode",
  },
  {
    icon: <TbMoon />,
    value: "dark",
    name: "Dark Mode",
  },
  {
    icon: <TbContrast />,
    value: "system",
    name: "System",
  },
];

export const ColorPicker = ({
  color,
  setColor,
  label,
}: {
  color: string;
  setColor: (color: string) => void;
  label?: string;
}) => {
  const [currentColor, setCurrentColor] = useState(color);

  const handleChangeCurrentColor = (
    newColor: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentColor(newColor.target.value);
  };

  useEffect(() => {
    const handleChangeColor = setTimeout(() => {
      setColor(currentColor);
    }, 1000);

    return () => {
      clearTimeout(handleChangeColor);
    };
  }, [currentColor]);

  return (
    <Stack>
      {label && (
        <Typography variant="body2" fontWeight={500}>
          {label}
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid",
          borderColor: "background.300",
          borderRadius: 1,
          px: 1,
          py: 0.5,
          background: "background.200",
        }}
      >
        {/* Color preview and picker */}
        <Box sx={{ position: "relative", mr: 2 }}>
          <Box
            sx={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              bgcolor: currentColor,
              border: "1px solid #bbb",
            }}
          />
          <TextField
            type="color"
            size="small"
            value={currentColor}
            onChange={handleChangeCurrentColor}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 18,
              height: 18,
              opacity: 0,
              cursor: "pointer",
            }}
            tabIndex={-1}
            aria-label="Pick color"
          />
        </Box>
        <TextField
          variant="standard"
          value={currentColor}
          onChange={handleChangeCurrentColor}
          sx={{ width: 80, mr: 5 }}
          InputProps={{
            disableUnderline: true,
            inputProps: { maxLength: 7, style: { fontFamily: "monospace" } },
          }}
          placeholder="#000000"
        />
      </Box>
    </Stack>
  );
};

const ThemeToggle = () => {
  const { mode, setMode } = useThemeStore();

  const selected = options.find((option) => option.value === mode);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton
        sx={{
          backgroundColor: "background.100",
        }}
        onClick={handleClick}
      >
        {mode === "system" ? (
          <TbContrast size={16} />
        ) : mode === "dark" ? (
          <TbMoon size={16} />
        ) : (
          <TbSun size={16} />
        )}
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ ".MuiPaper-root": { borderRadius: 2 } }}
      >
        <Box sx={{ p: 2, minWidth: 250 }}>
          <Typography variant="body2" fontWeight={500}>
            Select Theme
          </Typography>
        </Box>
        <Divider />
        <Stack direction="row">
          <Box sx={{ p: 2 }} flex={1}>
            <ColorPicker
              color={useThemeStore.getState().primary}
              setColor={(color) => useThemeStore.getState().setPrimary(color)}
              label="Primary Color"
            />
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ p: 2 }} flex={1}>
            <ColorPicker
              color={useThemeStore.getState().secondary}
              setColor={(color) => useThemeStore.getState().setSecondary(color)}
              label="Secondary Color"
            />
          </Box>
        </Stack>
        <Divider />
        <Stack>
          {options.map((option) => {
            return (
              <MenuItem
                key={option.value}
                onClick={() => {
                  setMode(option.value);
                  handleClose();
                }}
                sx={{
                  p: 1,
                  px: 2,
                  backgroundColor:
                    selected?.value === option.value
                      ? "primary.main"
                      : "transparent",
                  color:
                    selected?.value === option.value
                      ? "primary.contrastText"
                      : "text.primary",
                }}
              >
                <Stack direction="row" alignItems="center" gap={2}>
                  {option.icon}
                  {option.name}
                </Stack>
              </MenuItem>
            );
          })}
        </Stack>
      </Popover>
    </>
  );
};

export default ThemeToggle;
