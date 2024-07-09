import { NextFunction, Request, Response } from "express";
import PaymentMethodRepository from "../repositories/PaymentMethodRepository";
import PaymentMethod from "../types/PaymentMethod";

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
  async findPaymentMethodById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const paymentMethod = await this.paymentMethodRepository.findPaymentMethodById(Number(id));
      return res.status(200).send(paymentMethod);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllPaymentMethods(req: Request, res: Response, next: NextFunction) {
    try {
      const paymentMethods = await this.paymentMethodRepository.findAllPaymentMethods();
      return res.status(200).send(paymentMethods);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async updatePaymentMethodById(req: Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;
      const {} = <PaymentMethod>req.body;

      const paymentMethod = await this.paymentMethodRepository.updatePaymentMethodById(Number(id), {
       
      });
      return res.status(200).send(paymentMethod);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deletePaymentMethodById(req: Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;

      const paymentMethod = await this.paymentMethodRepository.deletePaymentMethodById(Number(id));
      return res.status(200).send(paymentMethod);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
