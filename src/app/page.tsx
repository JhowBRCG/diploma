import { BiSolidCloudDownload } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[745px] rounded-lg bg-white p-9 shadow-md lg:w-[745px]">
      <div className="m-auto h-[88px] max-w-[300px] bg-[url(/images/unip-logo.svg)] bg-cover bg-center bg-no-repeat" />
      <h2 className="mt-5 text-center text-[20px] font-[900] text-[#07366a]">
        DOCUMENTOS DIGITAIS
      </h2>

      <div className="mt-5 bg-[#faf9f94f] p-4 lg:p-7">
        <div className="rounded-md bg-white p-4 text-center shadow-md">
          <p className="pb-[20px] text-[24px] font-[900] text-[#075ebd]">
            DIPLOMA
          </p>
          <p className="pb-[20px] text-[24px] font-[900] text-[#075ebd]">
            ALINE CARVALHO GUARINO
          </p>
          <p className="pb-[16px] text-[20px] font-[900] text-[#075ebd]">
            RA: F1685J3
          </p>
          <p className="pb-[16px] text-[20px] font-[900] text-[#075ebd]">
            Bacharel em Administração
          </p>
          <div className="flex flex-col items-center lg:flex-row">
            <Link
              target="_blank"
              href="diploma-unip-aline.pdf"
              download="diploma-unip-aline.pdf"
              type="application/pdf"
              className="m-[15px] w-full cursor-pointer rounded-md border py-[16px] shadow-md"
            >
              <p className="text-[#797979]">PDF</p>
              <BiSolidCloudDownload className="m-auto text-[65px] text-[#07366a]" />
              <p className="text-[18px] font-[900] text-[#075ebd]">BAIXAR</p>
            </Link>
            <Link
              target="_blank"
              href="diploma-xml.XML"
              className="m-[15px] w-full cursor-pointer rounded-md border py-[16px] shadow-md"
            >
              <p className="text-[#797979]">XML</p>
              <BiSolidCloudDownload className="m-auto text-[65px] text-[#07366a]" />
              <p className="text-[18px] font-[900] text-[#075ebd]">BAIXAR</p>
            </Link>
            <Link
              target="_blank"
              href="diploma-unip-aline.pdf"
              className="m-[15px] w-full cursor-pointer rounded-md border py-[16px] shadow-md"
            >
              <p className="text-[#797979]">PDF</p>
              <BsFillEyeFill className="m-auto text-[65px] text-[#07366a]" />
              <p className="text-[18px] font-[900] text-[#075ebd]">
                VISUALIZAR
              </p>
            </Link>
          </div>
        </div>
        <div className="w-full pb-3 pt-7 text-center">
          <Link
            href="https://www.unip.br/"
            className="max-w-[64px] rounded-md bg-[#07366a] px-4 py-2 text-[14px] font-bold text-white"
          >
            SAIR
          </Link>
        </div>
      </div>
    </main>
  );
}
