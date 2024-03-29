import { Schema, Types, model } from "mongoose";

const BrandSchema = new Schema(
  {
    name: {
      type: String,
      // unique: [true, "Brand Name already Exisit "], //two or more subCategoryId may have the same brand
      trim: true,
      required: true,
      minLength: [2, "too short of Brand Name "],
    },
    slug: {
      type: String,
      lowercase: true,
      required: true,
    },
    logo: {
      id: { type: String, required: true },
      url: { type: String, required: true },
    },
    folderId: {
      type: String,
      required: true,
      unique: true,
    },
    createdBy: {
      type: Types.ObjectId,
      ref: "user",
    },
    subCategoryId:{
      type:Types.ObjectId,
      ref:"subCategory"
    },
    categoryId:{
      type:Types.ObjectId,
      ref:"category"
    }
  },
  { timestamps: true, strictQuery: true } // filter only with this schema fields
);

const Brand = model("brand", BrandSchema);
export default Brand;
