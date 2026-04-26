Opret en Markdown-fil (med endelsen .md, som du kender fra f.eks. README.md), hvor du: Identificere relevante fejlscenarier, fx:

Manglende input
For kort tekst
Forkert datatype

---

1. Ville gerne have et input felt hvor bruger kan uploade billede af opskrift
2. Nogle placeholder tekster er meget korte eller lange
3. Har måske misforstået opgaven og lavet det for statisk, der er indtil videre intet dynamisk
4. Ville gerne have fundet ud af, hvordan man rent faktisk kan få det uploadet, evt via local storage eller andet.
5. Text input til preptime, cookingtime og servings kunne måske have været number i stedet?

---

Relevante fejlbeskeder:

- "Ingredient not found! did you mean (lignende ingrediens)?"
- "Image type not supported, try .jpg or .png"
- "1000 word limit"
- "numeric needed, no letters"

---

Input felter:

- Type: Text - Name: recipeName
- Type: TextArea - Name: RecipeInstructions
- Type: Text - Name: PrepTime
- Type: Text - Name: CookingTime
- Type: Text - Name: Servings
- Type: Text - Name: Mealtype
- Type: Checkbox (10 i alt) - Name: Ingredient1checkbox (eller 2,3,4 osv)
- Text (10 i alt) - Name Ingredient1Name (eller 2, 3, 4 osv)
- TextArea - Name: RecipeInstructions
- Type: Submit button - Name: SubmitButton
