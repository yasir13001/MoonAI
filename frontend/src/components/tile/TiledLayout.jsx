
import { Link } from 'react-router-dom';

import './TiledLayout.css';

// URL-prop added to each item-object so we can proceed to them
const items = [
  { id: 1, title: 'Moon Report Generator', description: 'Details of the first item', url: 'moon_report_generator' },
  { id: 2, title: 'Moon Data API', description: 'Details of the second item', url: 'moon_data_api' },
  { id: 3, title: 'Shopping Assistant', description: 'Details of the third item', url: 'shopping_assistant' },
  { id: 4, title: 'Another One Assistant', description: 'Details of the fourth item', url: 'another_one_assistant' },
 ];

const TiledLayout = () => {
  return (
    <div className="tiled-layout">
      {items.map((item) => (
        <Link to={item.url} key={item.id}>
          <div className="tile">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TiledLayout;
