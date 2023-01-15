import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    duration: Number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);