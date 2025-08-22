import mongoose, { type Document, type Schema } from "mongoose";

export interface Media extends Document {
  _id: number;
  name: string;
  alt_name: string;
  anilist_id: string;
  tmdb_movie_id: string;
  image_link: string;
  tmdb_series_id: string;
  tmdb_season: string;
  average_color: string;
  background_color: string;
  text_color: string;
  type: string;
}

const MediaSchema: Schema<Media> = new mongoose.Schema(
  {
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    alt_name: { type: String, required: true },
    anilist_id: { type: String, required: true },
    tmdb_movie_id: { type: String, required: true },
    image_link: { type: String, required: true },
    tmdb_series_id: { type: String, required: true },
    tmdb_season: { type: String, required: true },
    average_color: { type: String, required: true },
    background_color: { type: String, required: true },
    text_color: { type: String, required: true },
    type: { type: String, required: true },
  },
  { collection: "INDEX" }
);

export const MediaModel =
  (mongoose.models.Media as mongoose.Model<Media>) ||
  mongoose.model<Media>("Media", MediaSchema);
