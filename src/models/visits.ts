export interface Visit {
  stadiumid: number;
  visitdate: Date;
  createby: string;
  createdate: Date;
  modifyby: string | null;
  modifydate: Date | null;
  isdeleted: boolean;
};