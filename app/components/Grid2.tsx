import { BentoGrid, BentoGridItem } from './ui/BentoGrid2';
import { gridItems } from '@/data';

const Grid2 = () => {
  return (
    <section id='about-section'>
        <BentoGrid>
            {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg})=>(
                <BentoGridItem id={id} key={id} title={title} description={description} 
                className={className} img={img} imgClassName={imgClassName} titleClassName={titleClassName} spareImg={spareImg}/>
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid2