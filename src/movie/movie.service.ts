import { Injectable } from "@nestjs/common";

@Injectable()
export class MovieService{
    async findAll(){
        return "Iae Boy!";
    }
}