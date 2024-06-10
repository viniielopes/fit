export type SaveBookParams = {
  titulo: string;
  autor: string;
  descricao: string;
  dataPublicacao: string;
  imagemCapa: string;
};

export type GetBookParams = {
  page: number;
  size: number;
  query?: string;
};
