import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
    @Prop({ required: true })
    genre: string;
    
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    duration: Number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);