import BackwardButton from '../../shared/ui/button/backward_button/BackwardButton';
import { Link } from 'react-router-dom';
import projectCards from '../../shared/ui/cards';

import './TiledLayout.css';

const TiledLayout = () => {
  return (
    <section className='tiled-layout-section'>

      <Link to={'/'}>
        <BackwardButton />
      </Link>

      <div className="tiled-layout">
        {projectCards.map((item) => (
          <Link to={item.url} key={item.id}>
            <div className="tile">
              <img className='tile-project-img' src={item.img} alt='MoonAI project image'/>
              <h3 className='tiled-project-h3'>{item.title}</h3>
              <p className='tiled-project-p'>{item.description}</p>
              
              <div class='flex flex-wrap gap-3 text-center tracking-wider'>
                {item.tech_stack.map((technology, index) => (
                  <span key={index} className='tiled-project-span'>{technology}</span>
                ))}
              </div>

              <div id='view-project' class='block w-full text-right text-1-3xl'>View Project ➡</div>

            </div>
          </Link>
        ))}
      </div>

    </section>
  );
};

export default TiledLayout;
