export type ClientDataColumnType = 'firstName' | 'lastName' | 'email' | 'phoneNumber' | 'employer' | 'accessCode' | 'isActive';

export interface ColumnType {
  id: ClientDataColumnType
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: any) => string;
}
