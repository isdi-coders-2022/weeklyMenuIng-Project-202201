# My Weekly Menu app

## Listado de componentes (V1 7feb)

## Lista de componentes:

Button

Header

> Navbar

> > Logo

> > LinksNav

> > BurguerIcon

> Infoblock

> MenuMobile

> > LinksNav

Recipe

> RecipeDays

> Button (edit) (en funció del path)

> Button (toggle cor)

Week

> Day

> > Recipes

> > > Recipe

SearchForm

> SearchBar

> Button (submit)

> SearchFilters (checkboxes)

RecipeForm (with 5 label/input)

> Button (submit)

## Page Struture

- My Menu Page
- Search Recies Page
- Recipe Page
- New Recipe Page
- Edit Recipe Page
- About Page

# Capa de datos app

## Datos de los cuales se alimentará la app:

### Datos externos provenientes de dos API's:

- Un objeto json con un array de objetos (recetas) de la API pública Edamam.

- Un objeto json con un array de objetos (recetas) de la API en Heroku.

- Un objeto json con un array de objetos (week) de la API en Heroku.

## Datos que generará la app

- [] _recipes_ (con los datos recibidos de la API pública)

- [] _myRecipes_ (con los datos recibidos de la API Heroku)

- booleano _mobileMenu_
- booleano _isLoaded_
- booleano _hasError_

## Qué componente albergará los datos y en qué tipo de objeto

- array _recipes_ --> [recipe, recipe....] --> variable de estado SÍ --> en context RecipeContext (contexto global de la app)

> Modificaciones:

> > sustituir array en cada carga y/o filtrado.

- array _myRecipes_ --> [recipe, recipe, ...] --> variable de estado SÍ --> en context RecipeContext

> Modificaciones:

> > añadir recipe

> > borrar recipe

> > update recipe

(sustituir myRecipes con un nuevo array myRecipes con el elemento nuevo, con el modificado o sin el borrado.)

- booleano _mobileMenu_ --> variable de estado SÍ --> en Header

Modificaciones:

> > activar menuMobile

> > descativar menuMobile

- booleano _isLoaded_ --> variable de estado SÍ --> en APIContext

Modificaciones:

> > setear isLoaded a false (en el inicio de llamadas API)

> > setear isLoaded a true (cuando llega la response en la request API)

- booleano _hasError_ --> variable de estado SÍ --> en APIContext

Modificaciones:

> > setear hasError a false (en el inicio de llamadas API)

> > setear hasError a true (cuando se produce un error en la request. NOTA: llamar desde el catch)
