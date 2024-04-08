export interface NavigationLink {
  name: string;
  href: string;
  icon?: string;
}

export interface DrawGrid {
  maxNumbers: number;
  maxFields: number;
  additional?: boolean;
  additionalMaxNumber?: number;
  additionalMaxFields?: number;
}

export interface NumberCircle {
  number: Number;
  isMatched?: Boolean;
  isAdditional?: Boolean;
}
