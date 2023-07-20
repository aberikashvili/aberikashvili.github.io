import { ArticleEntry } from '../../../../models/ArticleEntry';
import Card from '../../../shared/Card/Card';

const Publication = ({ title, caption, featuredImage, channel, date, url }: ArticleEntry) => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const publicationDate = `${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`;

  return (
    <Card
      title={title}
      meta={{ left: publicationDate, right: channel }}
      caption={caption}
      image={featuredImage}
      url={url}
    />
  );
};

export default Publication;
