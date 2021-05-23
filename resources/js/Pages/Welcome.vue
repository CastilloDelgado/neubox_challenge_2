<template>
  <!-- Navbar -->
  <header class="lg:sticky lg:top-0 lg:z-50 p-1 bg-white">
    <nav class="flex flex-col lg:flex-row m-1 p-4  w-full">
      <div class="lg:w-1/3">
        <img
          src="https://i.ibb.co/HHPwVRV/emprend-logo.png"
          alt=""
          class="object-contain h-12 block lg:inline-block"
        />
      </div>
      <div
        class="flex flex-col lg:flex-row md:w-full lg:w-2/3 justify-between lg:pl-5 lg:mx-5 lg:pt-3"
      >
        <a
          href="#inicio"
          class="block mt-4 lg:inline-block lg:mt-0 text-red-emprend hover:text-red-emprend-dark mr-4 text-center"
          >Inicio</a
        >
        <a
          href="#nosotros"
          class="block mt-4 lg:inline-block lg:mt-0 text-red-emprend hover:text-red-emprend-dark mr-4 text-center"
          >Nosotros</a
        >
        <a
          href="#servicios"
          class="block mt-4 lg:inline-block lg:mt-0 text-red-emprend hover:text-red-emprend-dark mr-4 text-center"
          >Servicios</a
        >
        <a
          href="#caracteristicas"
          class="block mt-4 lg:inline-block lg:mt-0 text-red-emprend hover:text-red-emprend-dark mr-4 text-center"
          >Características</a
        >
        <a
          href="#equipo"
          class="block mt-4 lg:inline-block lg:mt-0 text-red-emprend hover:text-red-emprend-dark mr-4 text-center"
          >Equipo</a
        >
        <a
          href="#contacto"
          class="block mt-4 lg:inline-block lg:mt-0 text-red-emprend hover:text-red-emprend-dark mr-4 text-center"
          >Contacto</a
        >
        <inertia-link
          :href="route('login')"
          class="block mt-4 lg:inline-block lg:mt-0 text-red-emprend hover:text-red-emprend-dark mr-4 text-center"
        >
          Iniciar Sesión
        </inertia-link>
        <inertia-link
          v-if="canRegister"
          :href="route('register')"
          class="block mt-4 lg:inline-block lg:mt-0 text-red-emprend hover:text-red-emprend-dark mr-4 text-center"
        >
          Registrate
        </inertia-link>
      </div>
    </nav>
  </header>
  <!-- Inicio -->
  <div id="inicio" class="h-screen background-image w-full text-center flex">
    <span class="inline-block align-baseline mb-auto mt-auto w-full">
      <div class="text-white message content-center">
        <p class="text-3xl md:text-5xl lg:text-7xl font-bold uppercase">
          ¿Te gusta emprender?
        </p>
        <hr
          class="block w-1/2 ml-auto mr-auto border-5 my-5 border-red-emprend"
        />
        <p class="text-xl md:text-2xl lg:text-3xl">
          Nosotros te ayudamos a hacerlo
        </p>
      </div>
    </span>
  </div>

  <!-- Nosotros -->
  <div
    id="nosotros"
    class="h-auto lg:h-screen bg-gray-emprend grid grid-flow-col sm:grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1"
  >
    <span class="h-full inline-block align-baseline mb-auto mt-auto flex py-12">
      <div
        class="lg:w-full px-6 lg:pl-32 lg:pr-20 text-justify mt-auto mb-auto"
      >
        <p class="text-4xl font-bold">Nosotros</p>
        <hr
          class="block mr-auto border-5 my-5 border-red-emprend w-5/12 xl:w-auto"
        />
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
        class="object-cover h-full sm:w-full xl:w-auto"
      />
    </div>
  </div>

  <!-- Servicios -->
  <div id="servicios" class="lg:h-screen p-6 lg:px-32 flex w-full">
    <div class="my-auto w-full">
      <div class="w-full">
        <p class="text-4xl font-bold">Servicios</p>
        <hr class="block w-5/12 border-5 my-5 border-red-emprend" />
      </div>
      <div
        class="flex flex-col lg:flex-row justify-center w-full mt-5 lg:mt-24"
      >
        <div class="mt-10 lg:mx-5">
          <div class="flex justify-center">
            <DesktopComputerIcon class="h-16 w-16 text-red-emprend" />
          </div>
          <p class="text-center mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            perferendis earum accusamus quos officiis vitae.
          </p>
        </div>
        <div class="mt-10 lg:mx-5">
          <div class="flex justify-center">
            <ChatIcon class="h-16 w-16 text-red-emprend" />
          </div>
          <p class="text-center mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            perferendis earum accusamus quos officiis vitae.
          </p>
        </div>
        <div class="mt-10 lg:mx-5">
          <div class="flex justify-center">
            <FolderOpenIcon class="h-16 w-16 text-red-emprend" />
          </div>
          <p class="text-center mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            perferendis earum accusamus quos officiis vitae.
          </p>
        </div>
        <div class="mt-10 lg:mx-5">
          <div class="flex justify-center">
            <CalendarIcon class="h-16 w-16 text-red-emprend" />
          </div>
          <p class="text-center mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            perferendis earum accusamus quos officiis vitae.
          </p>
        </div>
        <div class="mt-10 lg:mx-5">
          <div class="flex justify-center">
            <PresentationChartBarIcon class="h-16 w-16 text-red-emprend" />
          </div>
          <p class="text-center mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            perferendis earum accusamus quos officiis vitae.
          </p>
        </div>
        <div class="mt-10 lg:mx-5">
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
  <div
    id="caracteristicas"
    class="py-12 lg:h-screen p-6 lg:px-32 flex w-full bg-gray-emprend"
  >
    <div class="lg:my-auto w-full">
      <div class="w-full">
        <p class="text-4xl font-bold">Características</p>
        <hr class="block w-5/12 border-5 my-5 border-red-emprend" />
      </div>
      <div class="w-full mt-5 lg:mt-16 flex flex-col lg:flex-row">
        <div class="w-full lg:w-2/3">
          <div class="grid grid-rows-3">
            <div
              class="px-5 mt-5 flex flex-col lg:flex-row text-center lg:text-left justify-center"
            >
              <div class="flex justify-center">
                <MusicNoteIcon class="w-20 h-20 mr-5 text-red-emprend" />
              </div>
              <div>
                <p class="text-red-emprend text-2xl font-bold">
                  Lorem ipsum dolor
                </p>
                <p class="text-justify mt-5 lg:mt-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore dolores cupiditate eius voluptates ipsa earum cum
                  eos, eligendi, fuga asperiores libero incidunt nemo optio!
                  Tempora est omnis earum fugiat nostrum? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div
              class="px-5 mt-5 flex flex-col lg:flex-row text-center lg:text-left justify-center"
            >
              <div class="flex justify-center">
                <CashIcon class="w-20 h-20 mr-5 text-red-emprend" />
              </div>
              <div>
                <p class="text-red-emprend text-2xl font-bold">
                  Lorem ipsum dolor
                </p>
                <p class="text-justify mt-5 lg:mt-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore dolores cupiditate eius voluptates ipsa earum cum
                  eos, eligendi, fuga asperiores libero incidunt nemo optio!
                  Tempora est omnis earum fugiat nostrum? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div
              class="px-5 mt-5 flex flex-col lg:flex-row text-center lg:text-left justify-center"
            >
              <div class="flex justify-center">
                <FolderOpenIcon class="w-20 h-20 mr-5 text-red-emprend" />
              </div>
              <div>
                <p class="text-red-emprend text-2xl font-bold">
                  Lorem ipsum dolor
                </p>
                <p class="text-justify mt-5 lg:mt-0">
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
        <div class="w-full lg:w-1/3 bg-gray-500 mt-12 lg:mt-0">
          <div class="h-96 lg:h-full">
            <!-- Content -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Equipo -->
  <div id="equipo" class="xl:h-screen p-6 lg:px-32 flex w-full xl:pb-12">
    <div class="my-auto w-full">
      <div class="w-full">
        <p class="text-4xl font-bold">Nuestro Equipo de Trabajo</p>
        <hr class="block w-5/12 border-5 my-5 border-red-emprend" />
      </div>
      <p class="text-justify">
        Nuestro equipo está compuesto por individuos guapos, ingeniosos, y
        superpoderosos que están comprometidos con la madre naturaleza y
        utilizar sus poderes sobrenaturales para el bien y no para el mal.
        Compartimos la pasión por innovar y mantenernos al día sobre los últimos
        acontecimientos del universo.
      </p>
      <div class="w-full flex flex-col lg:flex-row mt-6">
        <div v-for="i in [1, 2, 3]" class="w-full">
          <div
            class="bg-gray-200 lg:mr-5 flex flex-col px-12 py-6 card rounded-md mt-5"
          >
            <div class="w-full flex justify-center">
              <img
                src="https://i.ibb.co/xLRBp3K/perfil.png"
                alt=""
                class="w-1/2 rounded-full"
              />
            </div>
            <div class="flex flex-col justify-center">
              <div
                id="name"
                class="flex justify-center font-bold text-2xl mt-5"
              >
                Lorem ipsum dolor sit amet
              </div>
              <p id="description" class="text-justify mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                molestiae modi harum temporibus saepe eligendi, officiis ea.
                Aliquid, voluptatibus eum. Earum perferendis esse quidem
                provident quas, doloribus consequatur facere consectetur!
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
  </div>

  <!-- Contacto -->
  <div
    id="contacto"
    class="lg:h-screen p-6 lg:px-32 flex w-full bg-gray-emprend"
  >
    <div class="my-auto w-full">
      <div class="w-full">
        <p class="text-4xl font-bold">Contacto</p>
        <hr class="block w-5/12 border-5 my-5 border-red-emprend" />
      </div>
      <div class="flex flex-col lg:flex-row w-full">
        <div class="lg:w-1/2 lg:pl-12">
          <form action="" class="mt-6 lg:pr-12">
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
            <div class="w-full flex justify-end">
              <button
                class="bg-red-emprend rounded-sm px-16 py-3 mt-5 text-white hover:bg-red-emprend-dark"
              >
                <div class="flex">
                  Enviar
                  <ArrowRightIcon class="w-6 h-6 ml-3 text-white" />
                </div>
              </button>
            </div>
          </form>
        </div>
        <div class="lg:w-1/2 lg:p-5 bg-black-emprend mt-5 lg:mt-0">
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
              <div class="w-full text-white p-5">
                <p class="text-2xl font-bold">Ubicación</p>
                <hr class="block w-5/12 border-5 my-5 border-red-emprend" />
                <div class="pl-5 text-lg">
                  <div class="flex">
                    <PhoneIcon class="w-12 h-12 mr-5 text-red-emprend" />
                    <p>33 1234 5678</p>
                  </div>
                  <div class="flex">
                    <MailIcon class="w-12 h-12 mr-5 text-red-emprend" />
                    <p>info@emprend.com</p>
                  </div>
                  <div class="flex">
                    <LocationMarkerIcon
                      class="w-12 h-12 mr-5 text-red-emprend"
                    />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum veritatis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-gray-emprend-dark">
    <div class="pb-6 pt-3">
      <div class="w-full flex justify-center">
        <div class="w-3/12 flex justify-center">
          <img src="https://i.ibb.co/Sf3gdMf/logo-inverted.png" alt="" />
        </div>
      </div>
      <div class="w-full flex justify-center">
        <hr class="block w-2/3 border-5 mb-5 border-red-emprend" />
      </div>
      <div class="w-full flex flex-col lg:flex-row justify-center text-white">
        <div class="md:w-3/3 lg:w-2/3 flex flex-col lg:flex-row justify-center text-xl">
          <div class="w-full lg:w-1/3 flex justify-center">
            <PhoneIcon class="w-12 h-12 mr-5 text-white" />
            <div>
              <p class="font-bold">Teléfono:</p>
              <p>(33)1234 5678</p>
            </div>
          </div>
          <div class="w-full lg:w-1/3 flex justify-center mt-5 lg:mt-0">
            <div>
              <div class="w-full flex justify-center">
                <p class="font-bold mr-5">Aceptamos:</p>
              </div>
              <div class="flex mt-2">
                <CreditCardIcon class="w-6 h-6 mr-5 text-white" />
                <CreditCardIcon class="w-6 h-6 mr-5 text-white" />
                <CreditCardIcon class="w-6 h-6 mr-5 text-white" />
                <CreditCardIcon class="w-6 h-6 mr-5 text-white" />
                <CreditCardIcon class="w-6 h-6 mr-5 text-white" />
                <CreditCardIcon class="w-6 h-6 mr-5 text-white" />
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 flex justify-center mt-5 lg:mt-0">
            <MailIcon class="w-12 h-12 mr-5 text-white" />
            <div>
              <p class="font-bold">Contacto:</p>
              <p>info@emprend.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col lg:flex-row bg-red-emprend py-5">
      <div class="lg:w-1/2 flex justify-center text-white font-bold">
        NEUBOX 2019 ® - Derechos reservados
      </div>
      <div class="lg:w-1/2 flex justify-center ml-5">
        <CreditCardIcon class="w-6 h-6 mr-5 text-white" />
        <CreditCardIcon class="w-6 h-6 mr-5 text-white" />
        <CreditCardIcon class="w-6 h-6 mr-5 text-white" />
        <CreditCardIcon class="w-6 h-6 mr-5 text-white" />
        <CreditCardIcon class="w-6 h-6 mr-5 text-white" />
        <CreditCardIcon class="w-6 h-6 mr-5 text-white" />
        <CreditCardIcon class="w-6 h-6 mr-5 text-white" />
      </div>
    </div>
  </footer>
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
  LocationMarkerIcon,
  CreditCardIcon,
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
    LocationMarkerIcon,
    CreditCardIcon,
  },

  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
  },
};
</script>
