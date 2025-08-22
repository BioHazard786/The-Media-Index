import './media-grid.css';
import Loading from '@/components/loading';
import MediaCard from '@/components/media-card';
import NoResults from '@/components/no-results';
import { useDebouncedSearchParam } from '@/hooks/use-debounceed-search-param';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useMedia } from '@/hooks/use-media';

function MediaGrid({ searchTerm }: { searchTerm: string }) {
  const debouncedSearchTerm = useDebouncedSearchParam(
    searchTerm,
    300,
    'search'
  );

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useMedia({ searchTerm: debouncedSearchTerm });

  const lastItemRef = useIntersectionObserver<HTMLDivElement>(
    { threshold: 0.5 },
    () => {
      // We only want to fetch the next page if there is one and we're not already fetching it.
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }
  );

  if (isLoading) {
    return (
      <div className="media-grid">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="media-grid">
        <p>Error ; {error.message}</p>
      </div>
    );
  }

  const mediaData = data?.pages.flatMap((page) => page.data) || [];

  if (mediaData.length === 0) {
    return <NoResults />;
  }

  return (
    <div className="media-grid">
      {mediaData.map((media, index) => (
        <MediaCard
          index={index}
          key={`media-card-${media._id}`}
          media={media}
        />
      ))}

      <div ref={lastItemRef} style={{ height: '1px' }} />
      {isFetchingNextPage && <Loading />}
    </div>
  );
}

export default MediaGrid;
