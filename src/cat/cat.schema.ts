import { HydratedDocument, model, Schema } from 'mongoose';

export const CatSchema = new Schema(
  {
    name: { type: 'string', required: true },
    age: Number,
    breed: String,
  },
  {
    timestamps: true,
    query: {
      byName(name: string) {
        return this.where({ name });
      },
    },
    virtuals: {
      fullName: {
        get() {
          return this.name + ' ' + this.age;
        },
      },
    },
  },
);

export const CatModel = model('Cat', CatSchema);

export type CatModelType = typeof CatModel;

export type CatDocument = HydratedDocument<CatModelType>;
