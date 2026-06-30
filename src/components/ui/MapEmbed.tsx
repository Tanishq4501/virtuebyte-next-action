/** Virtuebyte Private Limited — Sacred World, Wanowrie, Pune */
const MAP_PLACE_ID = "0x3bc2c11b81d1ae11:0x59bc1110ec77aa50";
const MAP_LAT = 18.4915195;
const MAP_LNG = 73.9002664;

const MAP_EMBED_SRC = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.826434319712!2d${MAP_LNG}!3d${MAP_LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17!3m3!1m2!1s${encodeURIComponent(MAP_PLACE_ID)}!2sVirtuebyte%20Private%20Limited!5e0!3m2!1sen!2sin!4v1738230554827!5m2!1sen!2sin`;

interface MapEmbedProps {
  className?: string;
  minHeight?: string;
}

export default function MapEmbed({
  className = "",
  minHeight = "320px",
}: MapEmbedProps) {
  return (
    <iframe
      src={MAP_EMBED_SRC}
      width="100%"
      height="100%"
      style={{ border: 0, minHeight }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="VirtueByte Office Location"
      className={className}
    />
  );
}
