import './no-results.css';

function NoResults() {
  return (
    <div className="no-results-wrapper">
      <svg
        className="no-results-emoji"
        fill="none"
        viewBox="0 0 176 176"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>No results marshmallow emoji</title>
        <path className="marshmallow-emoji" d="M12 12L62 62" />
        <path className="marshmallow-emoji" d="M62 12L12 62" />
        <path className="marshmallow-emoji" d="M114 12L164 62" />
        <path className="marshmallow-emoji" d="M164 12L114 62" />
        <path
          className="marshmallow-emoji marshmallow-emoji-face"
          d="M26 160.615C59.2824 120.132 121.506 123.631 149 164.613"
        />
      </svg>
      <div className="no-results">No Results</div>
    </div>
  );
}

export default NoResults;
