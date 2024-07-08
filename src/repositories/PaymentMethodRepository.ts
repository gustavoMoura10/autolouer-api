import { Repository } from "typeorm";
import PaymentMethodEntity from "../database/entities/PaymentMethodEntity";
import PaymentMethod from "../types/PaymentMethod";
import InterfacePaymentMethodRepository from "./interfaces/InterfacePaymentMethodRepository";

export default class PaymentMethodRepository implements InterfacePaymentMethodRepository {
  private repository: Repository<PaymentMethodEntity>;
  constructor(repository: Repository<PaymentMethodEntity>) {
    this.repository = repository;
  }
  createPaymentMethod(paymentMethod: PaymentMethod): Promise<PaymentMethodEntity | null> | PaymentMethodEntity {
    throw new Error("Method not implemented.");
  }
  findPaymentMethodById(id: number): Promise<PaymentMethodEntity | null> | PaymentMethodEntity {
    throw new Error("Method not implemented.");
  }
  findAllPaymentMethods(): Promise<PaymentMethodEntity[]> | PaymentMethodEntity[] {
    throw new Error("Method not implemented.");
  }
  updatePaymentMethodById(
    id: number,
    paymentMethod: PaymentMethod
  ): Promise<PaymentMethodEntity | null> | PaymentMethodEntity {
    throw new Error("Method not implemented.");
  }
  deletePaymentMethodById(id: number): Promise<PaymentMethodEntity | null> | PaymentMethodEntity {
    throw new Error("Method not implemented.");
  }
}
