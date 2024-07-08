import { NextFunction, Request, Response } from "express";
import BrandRepository from "../repositories/BrandRepository";
import UserRepository from "../repositories/UserRepository";
import Brand from "../types/Brand";
import User from "../types/User";

export default class BrandController {
  constructor(
    private brandRepository: BrandRepository,
  ) {}
  async createBrand(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {} = <Brand>req.body;
    
      const brand = await this.brandRepository.createBrand({
       
      });
      return res.status(200).send(brand);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
