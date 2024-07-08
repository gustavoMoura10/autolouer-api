import PaymentMethodEntity from "../../database/entities/PaymentMethodEntity";
import PaymentMethod from "../../types/PaymentMethod";

export default interface InterfacePaymentMethodRepository {
  createPaymentMethod(
    paymentMethod: PaymentMethod
  ): Promise<PaymentMethodEntity | null> | PaymentMethodEntity;
  findPaymentMethodById(
    id: number
  ): Promise<PaymentMethodEntity | null> | PaymentMethodEntity;
  findAllPaymentMethods():
    | Promise<PaymentMethodEntity[]>
    | PaymentMethodEntity[];
  updatePaymentMethodById(
    id: number,
    paymentMethod: PaymentMethod
  ): Promise<PaymentMethodEntity | null> | PaymentMethodEntity;
  deletePaymentMethodById(
    id: number
  ): Promise<PaymentMethodEntity | null> | PaymentMethodEntity;
}
