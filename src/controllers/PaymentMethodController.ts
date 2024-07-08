import { NextFunction, Request, Response } from "express";
import PaymentMethodRepository from "../repositories/PaymentMethodRepository";
import UserRepository from "../repositories/UserRepository";
import PaymentMethod from "../types/PaymentMethod";
import User from "../types/User";

export default class PaymentMethodController {
  constructor(
    private paymentMethodRepository: PaymentMethodRepository,
  ) {}
  async createPaymentMethod(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {} = <PaymentMethod>req.body;
    
      const paymentMethod = await this.paymentMethodRepository.createPaymentMethod({
       
      });
      return res.status(200).send(paymentMethod);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
