import LoadingAnimation from '@/components/loading';
import '@/components/media-grid.css';

const Loading = () => {
  return (
    <div className="container" style={{ marginTop: '9rem' }}>
      <div className="media-grid">
        <LoadingAnimation />
      </div>
    </div>
  );
};

export default Loading;
