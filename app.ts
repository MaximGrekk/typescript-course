enum PaymentStatus {
  Success = "success",
  Failed = "failed",
}

interface IPayment {
  sum: number;
  from: number;
  to: number;
}

interface IPaymentsRequest extends IPayment {}

interface IDataSuccess extends IPayment {
  databaseId: number;
}
interface IDataError {
  errorMessage: string;
  errorCode: number;
}

interface IResponse {
  status: PaymentStatus;
  data: IDataSuccess | IDataError;
}

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IDataSuccess;
}
