import { compDarkRGB, compLightRGB, rgbDataURL } from '@/lib/color-utils';
import './media-card.css';
import Image from 'next/image';
import type { Media } from '@/model/media';

function MediaCard({ media, index }: { media: Media; index: number }) {
  return (
    <div
      className="media-container"
      style={
        {
          '--media-background-text': media.text_color,
          '--media-background': media.background_color,
          '--media-text-dark': compDarkRGB(
            media.text_color,
            media.background_color
          ),
          '--media-text-light': compLightRGB(
            media.text_color,
            media.background_color
          ),
        } as React.CSSProperties
      }
    >
      <div
        className="rank circle"
        style={{
          height: `${
            (index + 1).toString().length <= 1
              ? ((index + 1).toString().length + 3) * 10 - 5
              : ((index + 1).toString().length + 2) * 10 - 5
          }px`,
          width: `${
            (index + 1).toString().length <= 1
              ? ((index + 1).toString().length + 3) * 10 - 5
              : ((index + 1).toString().length + 2) * 10 - 5
          }px`,
        }}
      >
        <span className="hash">#</span>
        {index + 1}
      </div>
      <a
        className="image-container"
        href={`${process.env.NEXT_PUBLIC_CHANNEL_LINK}/${media._id}`}
        target="_blank"
      >
        <Image
          alt="no-image"
          blurDataURL={rgbDataURL(media.background_color)}
          className="image"
          fill={true}
          placeholder="blur"
          src={media.image_link}
        />
        <div className="overlay">
          <div className="overlay-name">
            {media.alt_name !== 'none' ? media.alt_name : null}
          </div>
          <div className="overlay-type">{media.type}</div>
        </div>
      </a>
      <a
        className="title"
        href={`${process.env.NEXT_PUBLIC_CHANNEL_LINK}/${media._id}`}
        target="_blank"
      >
        {media.name !== 'none' ? media.name : media.alt_name}
      </a>
    </div>
  );
}

export default MediaCard;
