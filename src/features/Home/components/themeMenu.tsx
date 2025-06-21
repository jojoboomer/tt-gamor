import Button from "@components/ui/buttom";
import Menu from "@components/ui/menu";
import useGamorStore, { type Theme } from "@store/ui.store";
import { Computer, Lightbulb, Moon, Sun } from "lucide-react";

type MenuItem = {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const items: MenuItem[] = [
  { label: "Light", value: "light", icon: <Sun/>  },
  { label: "Dark", value: "dark", icon: <Moon/> },
  { label: "System", value: "system", icon: <Computer/>  },
];

const ThemeMenuButton = () => {
  return (
    <Button variant="icon" className="bg-accent" >
      <Lightbulb />
    </Button>
  );
};

//TODO MEJORAR PARA NO PASARLE EL CLOSE COMO PROP
const ThemeMenuOption = ({opt, handleClose}: {opt: MenuItem, handleClose: () => void}) => {
    const { setTheme } = useGamorStore();

  const handleChangeTheme = (e: Theme) => {
    setTheme(e);
    handleClose();
  };

  return (
    <div className="relative flex gap-2" onClick={()=> handleChangeTheme(opt.value as Theme)}>
      {opt.icon}
      {opt.label}</div>
  );
};

const ThemeMenu = () => {
  return (
      <Menu
        trigger={
          <ThemeMenuButton/>
        }
        options={items}
        renderOption={(opt, handleCloseMenu) => <ThemeMenuOption opt={opt} handleClose={handleCloseMenu}/>}
      />
  );
};

export default ThemeMenu;
