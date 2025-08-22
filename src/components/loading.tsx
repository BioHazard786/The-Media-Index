import './loading.css';

function Loading() {
  const randomMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return randomMap.map((num) => {
    return (
      <div className="loading-animation" key={`loading-${num}`}>
        <div className="loading-cover" />
        <div className="loading-title" />
      </div>
    );
  });
}

export default Loading;
