export interface Item {
  id: number;
  title: string;
  svg: string;
  isActive: boolean;
}

export interface Props {
  cartGame: Item[];
  setCartGame: React.Dispatch<React.SetStateAction<Item[]>>;
}
