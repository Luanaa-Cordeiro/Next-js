import Link from "next/link"


export function FormQuest(){

    
return(

 <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg">
  <h2 className="p-6 text-lg font-semibold">Cadastrar Questão Objetiva</h2>
  <hr className="w-full border-0 h-1 bg-[#D7D7D7]" />

      <form className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Autor da Questão:
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Ano da Questão:
            </label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Adaptada e Dificuldade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Adaptada:
            </label>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center space-x-1">
                <input type="radio" name="adaptada" className="text-blue-600" />
                <span>Sim</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="radio" name="adaptada" className="text-blue-600" />
                <span>Não</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Dificuldade: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Indeterminada"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Disciplina e Conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Disciplina: <span className="text-red-500">*</span>
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500">
              <option>-- Selecione uma Disciplina --</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Selecionar conteúdos entre os existentes:{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Adicionar novo conteúdo */}
       <div className="flex flex-col items-end">
  <span className="mb-2">Não achou o conteúdo desejado?</span>
  <button
    type="button"
    className="w-fit px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
  >
    + Adicionar novo conteúdo
  </button>
</div>
        {/* Enunciado */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Enunciado: <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="4"
            placeholder="Digite o enunciado da questão..."
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
      </form>
    </div>



)
}