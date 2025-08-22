import './loading.css';

function Loading() {
  return Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
    return (
      <div className="loading-animation" key={`loading-${num}`}>
        <div className="loading-cover" />
        <div className="loading-title" />
      </div>
    );
  });
}

export default Loading;
