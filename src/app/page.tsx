import { QueryClient } from '@tanstack/react-query';
import Header from '@/components/header';
import Search from '@/components/search';
import { getMedia } from '@/server/actions';

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: PageProps) {
  const { search = '' } = await searchParams;

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['media', search],
    queryFn: ({ pageParam }: { pageParam: number | undefined }) =>
      getMedia({
        query: search as string | undefined,
        cursor: pageParam,
      }),
    initialPageParam: undefined as number | undefined,
  });

  return (
    <div className="container">
      <Header />
      <Search />
    </div>
  );
}
