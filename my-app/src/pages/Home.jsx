import { useNavigate } from 'react-router-dom';

import Carousel from '../components/Carousel';
import Button from '../components/Button';
import { carousel } from '../utils/carousel';
import { apresentationText } from '../utils/apresentation';

import Cerveja from '../assets/images/cervejinha-gelada.png';

function Home () {
    const navigate = useNavigate();

    return (
        <div className="bg-white w-full min-h-dvh flex flex-col items-center py-2">
            {/* Corpo principal */}
            <div className="w-full md:w-5/6 flex flex-col gap-4">

                {/* Carrossel */}
                <Carousel items={carousel} />

                {/* Container */}
                <div className='flex flex-col px-3 md:grid md:grid-cols-3 md:auto-rows-auto md:px-0 gap-6 mb-8'>
                    {/* Texto de apresentação */}
                    <div className='col-start-2 col-end-4 row-start-1 row-end-1 mb-6'>
                        <h1 className='text-2xl md:text-3xl font-semibold my-8'>
                            Bem vindo ao
                            <br />
                            <span className='text-3xl font-extrabold text-orange-800 md:text-5xl'>
                                Empório Sabor da Roça
                            </span>
                        </h1>

                        <div className='w-full h-[1px] bg-black' />

                        <div className='mt-8 flex flex-col gap-4'>
                            {apresentationText.map((paragraph) => (
                                <p className='text-gray-600' key={paragraph.id}>
                                    {paragraph.text}
                                </p>
                            ))}  
                        </div>
                    </div>

                    {/* Imagem */}
                    <div className='col-start-1 col-end-2 row-start-1 row-end-3 w-full max-h-dvh flex justify-start'>
                        <img src={Cerveja} alt="Cervejinha gelada" className='rounded-lg h-auto' />
                    </div>

                    {/* Botão */}
                    <div className='col-start-2 col-end-3 row-start-2 row-end-3'>
                        <Button
                            onClick={() => navigate('/cardapio')}
                            text='SAIBA MAIS'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;