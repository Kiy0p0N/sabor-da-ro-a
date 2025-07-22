import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer () {
    return (
        <footer>
            {/* Informações adicionais */}
            <div className="bg-orange-900 text-white w-full flex justify-center py-6">
                <div className='w-full px-3 flex flex-col gap-8 md:w-5/6 md:flex-row'>
                    {/* Contato */}
                    <div className="flex flex-col gap-2 md:flex-1/3">
                        <div className="border-l-2 border-red-500 pl-1">
                            <h3 className='font-medium'>CONTATO</h3>
                        </div>
                        
                        <div className='flex flex-col gap-1.5'>
                            <p>
                                <a 
                                    href="https://www.instagram.com/emporio_saborroca/"
                                    target='__blank'
                                    className='flex items-center gap-1 hover:text-orange-500 duration-500 transition-colors'
                                >
                                    <InstagramIcon fontSize='small' />
                                    emporio_saborroca
                                </a>
                            </p>

                            <p>
                                <a 
                                    href=""
                                    target='__blank'
                                    className='flex items-center gap-1 hover:text-orange-500 duration-500 transition-colors'
                                >
                                    <WhatsAppIcon fontSize='small' />
                                    (99) 99999-9999
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Endereço */}
                    <div className="flex flex-col gap-2 md:flex-2/3">
                        <div className="border-l-2 border-red-500 pl-1">
                            <h3 className='font-medium'>ENDEREÇO</h3>
                        </div>

                        <div>
                            <p>
                                <a 
                                    href="https://maps.app.goo.gl/X5b7rTfC8hNkh5ij7"
                                    target="__blank"
                                    className='flex gap-1 hover:text-orange-500 duration-500 transition-colors'
                                >
                                    <LocationOnIcon fontSize='small' />
                                    Cantagalo, São Bento do Sapucaí - SP, 12490-000
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desenvolvedor */}
            <div className="bg-orange-950 w-full py-2 text-center">
                <p className="text-white text-[12px]">
                    Desenvolvido por {" "}
                    <a 
                        href="https://www.instagram.com/felp.zip/" 
                        target="__blank"
                        className="hover:text-blue-400 duration-500 transition-colors"
                    >
                        Felipe
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;