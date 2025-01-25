export interface Visit {
    visitId: number;
    stadiumId: number;
    visitDate: Date;
    modifyBy: string | null;
    modifyDate: Date | null;
    createBy: string;
    createDate: Date;
    isDeleted: boolean;
  }
  
  const visitModel = {
    tableName: 'visit',
    columns: [
      'visitId',
      'stadiumId',
      'visitDate',
      'modifyBy',
      'modifyDate',
      'createBy',
      'createDate',
      'isDeleted',
    ] as const,
  };
  
  export default visitModel;