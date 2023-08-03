export interface Item {
  id: number;
  title: string;
  svg: string;
  isActive: boolean;
}

export interface MainProps {
  cartGame: Item[];
  setCartGame: React.Dispatch<React.SetStateAction<Item[]>>;
  setStartTimer: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FooterProps {
  startTimer: boolean;
}
