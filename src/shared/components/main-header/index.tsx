import Image from 'next/image';
import { Text } from 'thon-ui';
import profilePicture from './assets/gustavo-sales-profile-picture.png';

export default function MainHeader() {
  return (
    <header
      className={`lg:h-screen relative lg:fixed lg:w-[34.25rem]
      left-0 top-0
      pt-8 pb-6 px-7 lg:pt-0 lg:pb-0
      flex flex-col justify-center items-center 
      bg-gray-100`}
    >
      <div className="flex gap-3 items-center">
        <Image
          src={profilePicture}
          alt="Foto de Perfil do Gustavo Sales"
          className="w-[5.5rem] h-[5.5rem]"
        />
        <div>
          <Text as="h1" variant="2xl lg:3xl" className="text-gray-800">
            Gustavo Sales
          </Text>
          <Text as="div" variant="xs" className="text-gray-500 italic -mt-0.5">
            Frontend Engineer@BlastRadius
          </Text>
        </div>
      </div>

      <div className="w-[18rem] lg:w-[20rem] mt-6 lg:mt-12">
        <Text as="p" variant="sm" className="text-gray-500 italic">
          Criando coisas incríveis desde 2012, com muita atenção aos detalhes,
          sentimento de dono e exercendo o feedback.
        </Text>
        <div className="flex gap-1 items-center mt-2">
          <Text variant="sm" className="text-gray-500 italic">
            Você pode me chamar de Gus.
          </Text>
          <span>😁</span>
        </div>
      </div>
    </header>
  );
}
