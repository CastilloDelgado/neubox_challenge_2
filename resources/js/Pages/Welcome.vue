<template>
  <!-- Navbar -->
  <header class="sticky p-1 top-0 z-50 bg-white">
    <nav class="flex m-1 p-4 w-full">
      <div class="w-1/3">
        <img
          src="https://i.ibb.co/HHPwVRV/emprend-logo.png"
          alt=""
          class="object-contain h-12 block lg:inline-block"
        />
      </div>
      <div class="flex w-2/3 justify-between pl-5 mx-5 pt-3">
        <a
          href="#inicio"
          class="block mt-4 lg:inline-block lg:mt-0 text-red-emprend hover:text-red-emprend-dark mr-4"
          >Inicio</a
        >
        <a
          href="#nosotros"
          class="block mt-4 lg:inline-block lg:mt-0 text-red-emprend hover:text-red-emprend-dark mr-4"
          >Nostros</a
        >
        <a
          href="#servicios"
          class="block mt-4 lg:inline-block lg:mt-0 text-red-emprend hover:text-red-emprend-dark mr-4"
          >Servicios</a
        >
        <a
          href="#caracteristicas"
          class="block mt-4 lg:inline-block lg:mt-0 text-red-emprend hover:text-red-emprend-dark mr-4"
          >Características</a
        >
        <a
          href="#equipo"
          class="block mt-4 lg:inline-block lg:mt-0 text-red-emprend hover:text-red-emprend-dark mr-4"
          >Equipo</a
        >
        <a
          href="#contacto"
          class="block mt-4 lg:inline-block lg:mt-0 text-red-emprend hover:text-red-emprend-dark mr-4"
          >Contacto</a
        >
        <a
          href="#"
          class="block mt-4 lg:inline-block lg:mt-0 text-red-emprend hover:text-red-emprend-dark mr-4"
          >Iniciar Sesión</a
        >
      </div>
    </nav>
  </header>
  <!-- Inicio -->
  <div id="inicio" class="h-screen background-image w-full text-center flex">
    <span class="inline-block align-baseline mb-auto mt-auto w-full">
      <div class="text-white message content-center">
        <p class="text-7xl font-bold uppercase">¿Te gusta emprender?</p>
        <hr
          class="block w-1/2 ml-auto mr-auto border-5 my-5 border-red-emprend"
        />
        <p class="text-3xl">Nosotros te ayudamos a hacerlo</p>
      </div>
    </span>
  </div>

  <!-- Nosotros -->
  <div
    id="nosotros"
    class="h-screen bg-gray-emprend grid grid-flow-col grid-cols-2"
  >
    <span class="inline-block align-baseline mb-auto mt-auto">
      <div class="w-full pl-32 pr-20 text-justify">
        <p class="text-4xl font-bold">Nosotros</p>
        <hr class="block ml-auto mr-auto border-5 my-5 border-red-emprend" />
        <p class="mt-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          accusamus, cum quisquam odit minima et delectus molestiae doloribus
          aliquam maxime illum in quam, earum ad facere voluptatibus neque.
          Minima, perferendis? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Ullam autem dicta beatae veniam ex suscipit eius
          recusandae deserunt blanditiis, eos culpa distinctio ab magni
          quibusdam cupiditate molestias consequatur explicabo totam!
        </p>
        <p class="mt-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          accusamus, cum quisquam odit minima et delectus molestiae doloribus
          aliquam maxime illum in quam, earum ad facere voluptatibus neque.
          Minima, perferendis?
        </p>
        <button
          class="bg-red-emprend rounded-sm px-16 py-3 text-white mt-10 hover:bg-red-emprend-dark"
        >
          <div class="flex">
            <ArrowRightIcon class="w-6 h-6 mr-3 text-white" />
            Soy un botón
          </div>
        </button>
      </div>
    </span>
    <div class="w-full">
      <img
        src="https://i.ibb.co/0GSw04X/office-3.jpg"
        alt=""
        class="object-cover h-full"
      />
    </div>
  </div>

  <!-- Servicios -->
  <div id="servicios" class="h-screen px-32 flex w-full">
    <div class="my-auto">
      <div class="w-full">
        <p class="text-4xl font-bold">Servicios</p>
        <hr class="block w-5/12 border-5 my-5 border-red-emprend" />
      </div>
      <div class="flex justify-center w-full mt-24">
        <div class="container mx-5">
          <div class="flex justify-center">
            <DesktopComputerIcon class="h-16 w-16 text-red-emprend" />
          </div>
          <p class="text-center mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            perferendis earum accusamus quos officiis vitae.
          </p>
        </div>
        <div class="container mx-5">
          <div class="flex justify-center">
            <ChatIcon class="h-16 w-16 text-red-emprend" />
          </div>
          <p class="text-center mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            perferendis earum accusamus quos officiis vitae.
          </p>
        </div>
        <div class="container mx-5">
          <div class="flex justify-center">
            <FolderOpenIcon class="h-16 w-16 text-red-emprend" />
          </div>
          <p class="text-center mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            perferendis earum accusamus quos officiis vitae.
          </p>
        </div>
        <div class="container mx-5">
          <div class="flex justify-center">
            <CalendarIcon class="h-16 w-16 text-red-emprend" />
          </div>
          <p class="text-center mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            perferendis earum accusamus quos officiis vitae.
          </p>
        </div>
        <div class="container mx-5">
          <div class="flex justify-center">
            <PresentationChartBarIcon class="h-16 w-16 text-red-emprend" />
          </div>
          <p class="text-center mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            perferendis earum accusamus quos officiis vitae.
          </p>
        </div>
        <div class="container mx-5">
          <div class="flex justify-center">
            <SaveAsIcon class="h-16 w-16 text-red-500" />
          </div>
          <p class="text-center mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            perferendis earum accusamus quos officiis vitae.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Características -->
  <div id="caracteristicas" class="h-screen px-32 flex w-full bg-gray-emprend">
    <div class="my-auto w-full">
      <div class="w-full">
        <p class="text-4xl font-bold">Características</p>
        <hr class="block w-5/12 border-5 my-5 border-red-emprend" />
      </div>
      <div class="w-full mt-16 flex">
        <div class="w-2/3">
          <div class="grid grid-rows-3">
            <div class="px-5 mt-5 flex">
              <MusicNoteIcon class="w-20 h-20 mr-5 text-red-emprend" />
              <div>
                <p class="text-red-emprend text-2xl font-bold">
                  Lorem ipsum dolor
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore dolores cupiditate eius voluptates ipsa earum cum
                  eos, eligendi, fuga asperiores libero incidunt nemo optio!
                  Tempora est omnis earum fugiat nostrum? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div class="px-5 mt-5 flex">
              <CashIcon class="w-20 h-20 mr-5 text-red-emprend" />
              <div>
                <p class="text-red-emprend text-2xl font-bold">
                  Lorem ipsum dolor
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore dolores cupiditate eius voluptates ipsa earum cum
                  eos, eligendi, fuga asperiores libero incidunt nemo optio!
                  Tempora est omnis earum fugiat nostrum? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div class="px-5 mt-5 flex">
              <FolderOpenIcon class="w-20 h-20 mr-5 text-red-emprend" />
              <div>
                <p class="text-red-emprend text-2xl font-bold">
                  Lorem ipsum dolor
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore dolores cupiditate eius voluptates ipsa earum cum
                  eos, eligendi, fuga asperiores libero incidunt nemo optio!
                  Tempora est omnis earum fugiat nostrum? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/3 bg-gray-500">
          <div class="h-full">
            <!-- Content -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Equipo -->
  <div id="equipo" class="h-screen px-32 flex w-full">
    <div class="my-auto w-full">
      <div class="w-full">
        <p class="text-4xl font-bold">Nuestro Equipo de Trabajo</p>
        <hr class="block w-5/12 border-5 my-5 border-red-emprend" />
      </div>
      <p>
        Nuestro equipo está compuesto por individuos guapos, ingeniosos, y
        superpoderosos que están comprometidos con la madre naturaleza y
        utilizar sus poderes sobrenaturales para el bien y no para el mal.
        Compartimos la pasión por innovar y mantenernos al día sobre los últimos
        acontecimientos del universo.
      </p>
      <div class="w-full flex mt-6">
        <div class="bg-gray-200 w-1/3 mr-5 flex flex-col px-12 py-6 card">
          <div class="w-full flex justify-center">
            <img
              src="https://i.ibb.co/xLRBp3K/perfil.png"
              alt=""
              class="w-1/2 rounded-full"
            />
          </div>
          <div class="flex flex-col justify-center">
            <div id="name" class="flex justify-center font-bold text-2xl mt-5">
              Lorem ipsum dolor sit amet
            </div>
            <p id="description" class="text-justify mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              molestiae modi harum temporibus saepe eligendi, officiis ea.
              Aliquid, voluptatibus eum. Earum perferendis esse quidem provident
              quas, doloribus consequatur facere consectetur!
            </p>
          </div>
          <div class="grid grid-cols-4 gap-3 mt-8">
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
          </div>
        </div>
        <div class="bg-gray-200 w-1/3 mr-5 flex flex-col px-12 py-6 card">
          <div class="w-full flex justify-center">
            <img
              src="https://i.ibb.co/xLRBp3K/perfil.png"
              alt=""
              class="w-1/2 rounded-full"
            />
          </div>
          <div class="flex flex-col justify-center">
            <div id="name" class="flex justify-center font-bold text-2xl mt-5">
              Lorem ipsum dolor sit amet
            </div>
            <p id="description" class="text-justify mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              molestiae modi harum temporibus saepe eligendi, officiis ea.
              Aliquid, voluptatibus eum. Earum perferendis esse quidem provident
              quas, doloribus consequatur facere consectetur!
            </p>
          </div>
          <div class="grid grid-cols-4 gap-3 mt-8">
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
          </div>
        </div>
        <div class="bg-gray-200 w-1/3 mr-5 flex flex-col px-12 py-6 card">
          <div class="w-full flex justify-center">
            <img
              src="https://i.ibb.co/xLRBp3K/perfil.png"
              alt=""
              class="w-1/2 rounded-full"
            />
          </div>
          <div class="flex flex-col justify-center">
            <div id="name" class="flex justify-center font-bold text-2xl mt-5">
              Lorem ipsum dolor sit amet
            </div>
            <p id="description" class="text-justify mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              molestiae modi harum temporibus saepe eligendi, officiis ea.
              Aliquid, voluptatibus eum. Earum perferendis esse quidem provident
              quas, doloribus consequatur facere consectetur!
            </p>
          </div>
          <div class="grid grid-cols-4 gap-3 mt-8">
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
            <div class="logo flex justify-center rounded-md">
              <TwitterLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Contacto -->
  <div id="contacto" class="h-screen px-32 flex w-full bg-gray-emprend">
    <div class="my-auto w-full">
      <div class="w-full">
        <p class="text-4xl font-bold">Contacto</p>
        <hr class="block w-5/12 border-5 my-5 border-red-emprend" />
      </div>
      <div class="flex w-full">
        <div class="w-1/2 pl-12">
          <form action="" class="mt-6">
            <p class="font-bold text-4xl">Escríbenos</p>
            <p class="font-bold text-base text-red-emprend mt-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="flex mt-5">
              <EmojiHappyIcon class="w-12 h-12 mr-5 text-red-emprend" />
              <input
                class="text-gray-300 border-none w-full"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div class="flex mt-5">
              <MailIcon class="w-12 h-12 mr-5 text-red-emprend" />
              <input
                class="text-gray-300 border-none w-full"
                type="text"
                placeholder="Correo Electrónico"
              />
            </div>
            <div class="flex mt-5">
              <PhoneIcon class="w-12 h-12 mr-5 text-red-emprend" />
              <input
                class="text-gray-300 border-none w-full"
                type="text"
                placeholder="Teléfono"
              />
            </div>
            <div class="flex mt-5">
              <CalendarIcon class="w-12 h-12 mr-5 text-red-emprend" />
              <input
                class="text-gray-300 border-none w-full"
                type="text"
                placeholder="Fecha"
              />
            </div>
            <div class="flex mt-5">
              <ChatIcon class="w-12 h-12 mr-5 text-red-emprend" />
              <input
                class="text-gray-300 border-none w-full"
                type="text"
                placeholder="Mensaje"
              />
            </div>
          </form>
        </div>
        <div class="w-1/2 p-12 bg-black-emprend">
          <div class="">
            <div style="width: 100%">
              <iframe
                width="100%"
                height="400"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
            <p class="text-gray-emprend-dark">Heeeeeeeeeeeey</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-image {
  position: relative;
}
.background-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(https://i.ibb.co/MGHMgy2/main-image.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  filter: contrast(80%) brightness(35%);
}

.message {
  position: relative;
}

.card:hover {
  background-color: #333333;
}

.card:hover #name {
  color: #fe6261;
}

.card:hover #description {
  color: white;
}

.card:hover .logo {
  background-color: #fe6261;
}
</style>

<script>
import {
  DesktopComputerIcon,
  ChatIcon,
  FolderOpenIcon,
  CalendarIcon,
  PresentationChartBarIcon,
  SaveAsIcon,
  ArrowRightIcon,
  MusicNoteIcon,
  CashIcon,
  EmojiHappyIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/vue/solid";

import TwitterLogo from "@/Pages/Logos/TwitterLogo";
import FacebookLogo from "@/Pages/Logos/FacebookLogo";

export default {
  components: {
    DesktopComputerIcon,
    ChatIcon,
    FolderOpenIcon,
    CalendarIcon,
    PresentationChartBarIcon,
    SaveAsIcon,
    ArrowRightIcon,
    MusicNoteIcon,
    CashIcon,
    TwitterLogo,
    FacebookLogo,
    EmojiHappyIcon,
    MailIcon,
    PhoneIcon,
  },

  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
  },
};
</script>
