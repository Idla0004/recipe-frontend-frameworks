import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-start my-3 mx-auto">
      <section className="my-3">
        <h1 className="text-3xl text-cyan-800 font-bold italic">
          Upload your own recipe!
        </h1>
      </section>
      <section className="grid grid-cols-2 bg-(--section-two-bg) text-foreground px-10 max-w-[1400px] rounded-[15px] shadow-[7px_9px_4px_rgba(0,0,0,0.25)]">
        <div className="flex flex-col justify-center my-10">
          <form>
            <input
              className="text-xl px-1 py-1 mb-5 text-start border-b border-foreground outline-none text-foreground"
              type="text"
              placeholder="Name your recipe"
            />
          </form>
          <div className="flex gap-10 justify-between mb-4">
            <form>
              <input
                type="text"
                name="PrepTime"
                placeholder="add preptime.. e.g 1h"
                className="outline-none border-b border-foreground text-center"
              />
            </form>
            <form>
              <input
                type="text"
                name="CookingTime"
                placeholder="add cookingtime.. e.g 30min"
                className="outline-none border-b border-foreground text-center w-50"
              />
            </form>
            <form>
              <input
                type="text"
                name="Servings"
                placeholder="Servings.. e.g 2"
                className="outline-none border-b border-foreground text-center"
              />
            </form>
            <form>
              <input
                type="text"
                name="Mealtype"
                placeholder="Mealtype.. e.g Italian"
                className="outline-none border-b border-foreground text-center"
              />
            </form>
          </div>
          <div className="flex flex-col bg-(--section-three-bg) px-5 py-5 rounded-md">
            <label className="text-lg text-background font-semibold mb-3">
              Ingredients:
            </label>
            <div className="flex gap-3 mb-3">
              <input
                type="checkbox"
                name="ingredient1checkbox"
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
              />
              <input
                type="text"
                name="ingredient10Name"
                placeholder="Ingredient 10"
                className="outline-none border-b-2 border-background text-background"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
