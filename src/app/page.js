import Image from "next/image";

export default function Home() {
  return (
    <form
      action="/"
      className="flex flex-col justify-start my-3 mx-auto"
    >
      <section className="my-3">
        <h1 className="text-3xl text-background font-bold italic">
          Upload your own recipe!
        </h1>
      </section>
      <section className=" bg-(--section-two-bg) text-foreground px-10 max-w-[1400px] rounded-[15px] shadow-[7px_9px_4px_rgba(0,0,0,0.25)]">
        <div className="flex flex-col justify-center my-10">
          <div>
            <input
              className="text-xl px-1 py-1 mb-5 text-start border-b border-foreground outline-none text-foreground"
              type="text"
              placeholder="Name your recipe"
            />
          </div>
          <div className="flex flex-row gap-10 px-5 py-8 rounded-md text-background justify-between items-start">
            <div className="flex flex-col pb-10 text-foreground ">
              <label className="text-lg text-foreground font-semibold mb-3">
                Description
              </label>
              <textarea
                name="RecipeInstructions"
                placeholder="Text area about the recipe, talk about your mom or grandmom or whatever, doesnt matter, everyone is going to scroll right by it anyway, but you do you babe"
                rows={10}
                cols={40}
              />
            </div>
            {/* <label
              htmlFor="image"
              className="block text-foreground"
            >
              Upload a food picture
            </label>

            <input
              type="file"
              className="block text-foreground"
              name="Image"
              accept="image/png, image/jpeg"
            /> */}
            <Image
              src="/carbonara.jpg"
              width={280}
              height={20}
              alt="carbonara"
              className="self-end items-start"
            />
          </div>
          <div className="flex gap-10 justify-between mb-4">
            <input
              type="text"
              name="PrepTime"
              placeholder="add preptime.. e.g 1h"
              className="outline-none border-b border-foreground text-center"
            />

            <input
              type="text"
              name="CookingTime"
              placeholder="add cookingtime.. e.g 30min"
              className="outline-none border-b border-foreground text-center w-50"
            />

            <input
              type="text"
              name="Servings"
              placeholder="Servings.. e.g 2"
              className="outline-none border-b border-foreground text-center"
            />

            <input
              type="text"
              name="Mealtype"
              placeholder="Mealtype.. e.g Italian"
              className="outline-none border-b border-foreground text-center"
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col bg-(--section-three-bg) px-5 py-5 rounded-md">
              <label className="text-lg text-background font-semibold mb-3">
                Ingredients:
              </label>
              <div className="flex gap-3 mb-3">
                <input
                  type="checkbox"
                  name="ingredient1checkbox"
                  className="rounded-lg accent-(--new-background)"
                />
                <input
                  type="text"
                  name="ingredient1Name"
                  placeholder="Ingredient 1"
                  className="outline-none border-b-2 border-background text-background"
                />
              </div>
              <div className="flex gap-3 mb-3">
                <input
                  type="checkbox"
                  name="ingredient2checkbox"
                  className="rounded-lg accent-(--new-background)"
                />
                <input
                  type="text"
                  name="ingredient2Name"
                  placeholder="Ingredient 2"
                  className="outline-none border-b-2 border-background text-background"
                />
              </div>
              <div className="flex gap-3 mb-3">
                <input
                  type="checkbox"
                  name="ingredient3checkbox"
                  className="rounded-lg accent-(--new-background)"
                />
                <input
                  type="text"
                  name="ingredient3Name"
                  placeholder="Ingredient 3"
                  className="outline-none border-b-2 border-background text-background"
                />
              </div>
              <div className="flex gap-3 mb-3">
                <input
                  type="checkbox"
                  name="ingredient4checkbox"
                  className="rounded-lg accent-(--new-background)"
                />
                <input
                  type="text"
                  name="ingredient4Name"
                  placeholder="Ingredient 4"
                  className="outline-none border-b-2 border-background text-background"
                />
              </div>
              <div className="flex gap-3 mb-3">
                <input
                  type="checkbox"
                  name="ingredient5checkbox"
                  className="rounded-lg accent-(--new-background)"
                />
                <input
                  type="text"
                  name="ingredient5Name"
                  placeholder="Ingredient 5"
                  className="outline-none border-b-2 border-background text-background"
                />
              </div>
              <div className="flex gap-3 mb-3">
                <input
                  type="checkbox"
                  name="ingredient6checkbox"
                  className="rounded-lg accent-(--new-background)"
                />
                <input
                  type="text"
                  name="ingredient6Name"
                  placeholder="Ingredient 6"
                  className="outline-none border-b-2 border-background text-background"
                />
              </div>
              <div className="flex gap-3 mb-3">
                <input
                  type="checkbox"
                  name="ingredient7checkbox"
                  className="rounded-lg accent-(--new-background)"
                />
                <input
                  type="text"
                  name="ingredient7Name"
                  placeholder="Ingredient 7"
                  className="outline-none border-b-2 border-background text-background"
                />
              </div>
              <div className="flex gap-3 mb-3">
                <input
                  type="checkbox"
                  name="ingredient8checkbox"
                  className="rounded-lg accent-(--new-background)"
                />
                <input
                  type="text"
                  name="ingredient8Name"
                  placeholder="Ingredient 8"
                  className="outline-none border-b-2 border-background text-background"
                />
              </div>
              <div className="flex gap-3 mb-3">
                <input
                  type="checkbox"
                  name="ingredient9checkbox"
                  className="rounded-lg accent-(--new-background)"
                />
                <input
                  type="text"
                  name="ingredient9Name"
                  placeholder="Ingredient 9"
                  className="outline-none border-b-2 border-background text-background"
                />
              </div>
              <div className="flex gap-3 mb-3">
                <input
                  type="checkbox"
                  name="ingredient10checkbox"
                  className="rounded-lg accent-(--new-background)"
                />
                <input
                  type="text"
                  name="ingredient10Name"
                  placeholder="Ingredient 10"
                  className="outline-none border-b-2 border-background text-background"
                />
              </div>
            </div>
            <div className="flex flex-col flex-wrap bg-(--section-four-bg) px-5 py-5 rounded-md text-background outline-1">
              <label className="text-lg text-background font-semibold mb-3">
                Instructions:
              </label>
              <div className="border-background rounded-lg border p-5">
                <textarea
                  name="RecipeInstructions"
                  placeholder="Type your instructions here"
                  rows={20}
                  cols={40}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <button
        type="submit"
        className="py-3 px-15 text-lg bg-[#AAD0AF] self-end rounded-lg cursor-pointer mt-10 items-center"
      >
        Submit
      </button>
    </form>
  );
}
