// import background from "../../assets/biblioteca.jpg";
// import student from "../../assets/estudiante-cuadrado.jpg";

const StudentComponent = ({
  name,
  description,
  country,
  occupation,
  estado = "Patrocinado",
}) => {
  return (
    <div className="relative">
      <section className="relative block  p-5 bg-complementary">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words border-4 border-black bg-white w-full  shadow-xl rounded-lg">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  {
                    // <div className="relative">
                    //   <img
                    //     alt="..."
                    //     src={student}
                    //     className="shadow-xl bg-cover rounded-full h-64 w-64 align-middle border-4 border-black -mt-32 max-w-150-px"
                    //   />
                    // </div>
                  }
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-alert active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      {estado}
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  {
                    // <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    //   <div className="mr-4 p-3 text-center">
                    //     <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    //       5
                    //     </span>
                    //     <span className="text-sm text-blueGray-400">
                    //       Donadores
                    //     </span>
                    //   </div>
                    //   <div className="mr-4 p-3 text-center">
                    //     <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    //       10
                    //     </span>
                    //     <span className="text-sm text-blueGray-400">Cursos</span>
                    //   </div>
                    //   <div className="lg:mr-4 p-3 text-center">
                    //     <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    //       89
                    //     </span>
                    //     <span className="text-sm text-blueGray-400">
                    //       Estrellas
                    //     </span>
                    //   </div>
                    // </div>
                    //
                  }
                </div>
              </div>
              <div className="text-center mt-12">
                <p className="text-4xl font-semibold leading-normal text-black mb-2">
                  {name}
                </p>
                <div className="text-sm leading-normal mt-0 mb-2 text-black font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  {country}
                </div>
                <div className="mb-2 text-blueGray-600 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  {occupation}
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentComponent;
