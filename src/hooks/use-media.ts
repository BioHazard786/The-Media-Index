'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getMedia } from '@/server/actions';

export function useMedia({ searchTerm }: { searchTerm: string }) {
  return useInfiniteQuery({
    queryKey: ['media', searchTerm],
    queryFn: ({ pageParam }: { pageParam: number | undefined }) =>
      getMedia({ query: searchTerm, cursor: pageParam }),
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}
