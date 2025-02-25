
import Image  from 'next/image';

export default function Hero() {
    return (
        <section>
            <div>
            < Image 
            src="/slide1.png"
            alt='foto de fundo'
            width={1640}
            height={600}
            objectFit='cover'
            className='m-auto'
            />
        </div>
        </section>
        
    );
}