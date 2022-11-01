export type TBANDS = TBANDITEM[];

export type TBANDITEM = {
  id: number;
  name: string;
  genreCode: string;
  year: number;
  country: string;
  members: {
    name: string;
  }[];
};

export type TGENRES = TGENREITEM[];

export type TGENREITEM = {
  code: string;
  name: string;
};

export type TALBUMS = TALBUMITEM[];

export type TALBUMITEM = {
  id: number;
  bandId: number;
  name: string;
  year: number;
};
