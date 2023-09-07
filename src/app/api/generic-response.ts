export interface GenericResponse<T> {
  data: T;
  success: boolean,
  message: string,
  errors?: T,
  statusCode?: number
}
