import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  return (
    <footer>

      {/* Informações adicionais */}
      <div className="flex w-full justify-center bg-orange-900 py-6 text-white">
        <div className="flex w-full flex-col gap-8 px-3 md:w-5/6 md:flex-row">
        
          {/* Contato */}
          <div className="flex flex-col gap-2 md:flex-1/3">
            <div className="border-l-2 border-red-500 pl-1">
              <h3 className="font-medium">CONTATO</h3>
            </div>

            <div className="flex flex-col gap-1.5">
              <p>
                <a
                  href="https://www.instagram.com/emporio_saborroca/"
                  target="__blank"
                  className="flex items-center gap-1 transition-colors duration-500 hover:text-orange-500"
                >
                  <InstagramIcon fontSize="small" />
                  emporio_saborroca
                </a>
              </p>

              <p>
                <a
                  href=""
                  target="__blank"
                  className="flex items-center gap-1 transition-colors duration-500 hover:text-orange-500"
                >
                  <WhatsAppIcon fontSize="small" />
                  (99) 99999-9999
                </a>
              </p>
            </div>
          </div>

          {/* Endereço */}
          <div className="flex flex-col gap-2 md:flex-2/3">
            <div className="border-l-2 border-red-500 pl-1">
              <h3 className="font-medium">ENDEREÇO</h3>
            </div>

            <div>
              <p>
                <a
                  href="https://maps.app.goo.gl/X5b7rTfC8hNkh5ij7"
                  target="__blank"
                  className="flex gap-1 transition-colors duration-500 hover:text-orange-500"
                >
                  <LocationOnIcon fontSize="small" />
                  Cantagalo, São Bento do Sapucaí - SP, 12490-000
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desenvolvedor */}
      <div className="w-full bg-orange-950 py-2 text-center">
        <p className="text-[12px] text-white">
          Desenvolvido por{" "}
          <a
            href="https://www.instagram.com/felp.zip/"
            target="__blank"
            className="transition-colors duration-500 hover:text-blue-400"
          >
            Felipe
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
