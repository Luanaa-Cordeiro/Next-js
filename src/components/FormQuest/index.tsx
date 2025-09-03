import Link from "next/link"
import App from "./App"


export function FormQuest(){

    
return(

 <div className="mt-10 max-w-6xl mx-auto bg-white shadow-md rounded-lg">
  <h2 className="p-6 text-lg font-semibold">Cadastrar Questão Objetiva</h2>
  <hr className="w-full border-0 h-0.5 bg-[rgba(215,215,215,0.5)]" />

      <form className="p-6 space-y-4">
  {/* Linha única: Autor, Ano, Adaptada, Dificuldade */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Autor da Questão:
      </label>
      <input
        type="text"
        className="h-10 mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">
        Ano da Questão:
      </label>
      <input
        type="date"
        className="h-10 mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    <div className="flex flex-col items-en">
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
      <select className="mt-1 h-10 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500">
        <option>Indeterminado</option>
        <option>Muito Difícil</option>
        <option>Difícil</option>
        <option>Intermediário</option>
        <option>Fácil</option>
        <option>Muito Fácil</option>
      </select>
    </div>
  </div>

        {/* Disciplina e Conteúdo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
  {/* Disciplina */}
  <div>
    <label className="block text-sm font-medium text-gray-700">
      Disciplina: <span className="text-red-500">*</span>
    </label>
    <select className="mt-1 h-10 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500">
      <option>-- Selecione uma Disciplina --</option>
    </select>
    <div className="mt-3 flex items-center mb-4">
      <input
        id="checkbox-disciplina"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
      />
      <label htmlFor="checkbox-disciplina" className="ms-2 text-sm font-medium text-gray-900">
        Manter disciplina selecionada.
      </label>
    </div>
  </div>

  {/* Conteúdos existentes */}
  <div>
    <label className="block text-sm font-medium text-gray-700">
      Selecionar conteúdos entre os existentes: <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      className="h-10 mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
    />
    <div className="mt-3 flex items-center mb-4">
      <input
        id="checkbox-conteudo"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
      />
      <label htmlFor="checkbox-conteudo" className="ms-2 text-sm font-medium text-gray-900">
        Manter conteúdos selecionados.
      </label>
    </div>
  </div>

  {/* Botão Adicionar novo conteúdo */}
  <div className="flex flex-col items-end">
    <span className="mb-2">Não achou o conteúdo desejado?</span>
    <button
      type="button"
      className="w-fit px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      + Adicionar novo conteúdo
    </button>
  </div>
</div>
        {/* Enunciado */}
        <div>
          <label className="mb-3 block text-sm font-medium text-gray-700">
            Enunciado: <span className="text-red-500">*</span>
          </label>
          <App />
        </div>
      </form>
    </div>



)
}