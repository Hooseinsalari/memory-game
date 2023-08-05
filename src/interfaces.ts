export interface Item {
  id: number;
  title: string;
  svg: string;
  isActive: boolean;
}

export interface MainProps {
  setStartTimer: React.Dispatch<React.SetStateAction<boolean>>;
  countClick: number;
  setCountClick: React.Dispatch<React.SetStateAction<number>>;
}

export interface FooterProps {
  startTimer: boolean;
  countClick: number;
}

export interface CartGameContext {
  children: React.ReactNode;
}

export interface CartGameContextValue {
  cartGame: Item[];
  setCartGame: React.Dispatch<React.SetStateAction<Item[]>>;
}
