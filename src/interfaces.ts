export interface Item {
  id: number;
  title: string;
  svg: string;
  isActive: boolean;
}

export interface MainProps {
  setStartTimer: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FooterProps {
  startTimer: boolean;
}

export interface CartGameContext {
  children: React.ReactNode;
}

export interface CartGameContextValue {
  cartGame: Item[];
  setCartGame: React.Dispatch<React.SetStateAction<Item[]>>;
}
