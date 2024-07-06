import React from "react";

export default class Form extends React.Component {
  render() {
    const { handleChange, form = {}, onSubmit } = this.props;
    return (
      <div className="flex justify-center items-center">
        <form className="w-2/5" onSubmit={onSubmit} method="POST">
          <div className="my-5">
            <h1 className="text-center text-lg font-bold text-stone-500">
              Nuevo Personaje: 
            </h1>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 mb-2"
            >
            </label>
            <input
              type="text"
              placeholder="NOMBRE DEL PERSONAJE"
              name="name"
              className="px-2 block w-full border border-gray-200 shadow-sm rounded-lg text-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              onChange={handleChange}
              value={form.name}
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="descri"
              className="block text-sm font-medium leading-6"
            >
            </label>
            <input
              type="text"
              placeholder="DESCRIBA EL PERSONAJE"
              name="descri"
              className="px-2 block w-full border border-gray-200 shadow-sm rounded-lg text-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              onChange={handleChange}
              value={form.descri}
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="img"
              className="block text-sm font-medium leading-6 text-stone-500">
              AVATAR
            </label>
            <input
              type="text"
              placeholder="URL de la imagen"
              name="img"
              className="px-2 block w-full border border-gray-200 shadow-sm rounded-lg text-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              onChange={handleChange}
              value={form.img}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-teal-900 hover:bg-teal-800 text-white font-bold py-2 px-4 mb-2 rounded"
              type="submit"
            >
              CREAR
            </button>
          </div>
        </form>
      </div>
    )
  }
}
