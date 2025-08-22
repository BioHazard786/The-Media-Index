'use server';

import type { PipelineStage } from 'mongoose';
import dbConnect from '@/lib/db-connect';
import { type Media, MediaModel } from '@/model/media';

export async function getMedia({
  query = '',
  cursor = null,
}: {
  query?: string;
  cursor?: number | null;
}) {
  const limit = 20;
  let items: Media[];
  let pipeline: PipelineStage[];

  if (query.trim() === '') {
    // No search, just browse catalog
    pipeline = [
      { $sort: { _id: -1 } },
      ...(cursor ? [{ $match: { _id: { $lt: cursor } } }] : []),
      { $limit: limit },
    ];
  } else {
    // Search with Atlas $search
    pipeline = [
      {
        $search: {
          index: process.env.SEARCH_INDEX_NAME || 'title_search',
          text: {
            query,
            path: ['name', 'alt_name'],
          },
        },
      },
      { $sort: { _id: -1 } },
      ...(cursor ? [{ $match: { _id: { $lt: cursor } } }] : []),
      { $limit: limit },
    ];
  }

  try {
    await dbConnect();
    items = await MediaModel.aggregate(pipeline);

    const nextCursor = items.length === limit ? items.at(-1)?._id : null;

    return { data: items, nextCursor };
  } catch (error) {
    console.error('Failed to fetch media:', error);
    return {
      data: [],
      nextCursor: null,
      error: 'Failed to fetch media. Please try again.',
    };
  }
}
