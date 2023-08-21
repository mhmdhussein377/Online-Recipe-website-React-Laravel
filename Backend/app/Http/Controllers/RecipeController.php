<?php

namespace App\Http\Controllers;

use App\Models\Ingredient;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RecipeController extends Controller
{
    function createRecipe(Request $request) {

        $user = Auth::user();

        $recipe = Recipe::create([
            "name" => $request->name,
            "cuisine" => $request->cuisine,
            "user_id" => $user->id
        ]);

        $ingredients = $request->ingredients;

        foreach($ingredients as $ingredient) {
            Ingredient::create([
                "name" => $ingredient,
                "recipe_id" => $recipe->id
            ]);
        }

        return response()->json([
            "message" => "success",
            "recipe" => $recipe,
            "ingredients" => $ingredients
        ]);
    }

    function deleteRecipe($RecipeId) {

        Recipe::find($RecipeId)->delete();

        return response()->json([
            "message" => "Recipe has been deleted successfully"
        ]);
    }

    function updateRecipe($RecipeId, Request $request) {

        $recipe = Recipe::find($RecipeId);

        $recipe->name = $request->name;
        $recipe->cuisine = $request->cuisine;
        $recipe->save();

        $ingredients = $request->ingredients;
        $newIngredients = [];

        foreach($ingredients as $ingredient) {

            if(isset($ingredient['id'])) {
                $existsIngredient = Ingredient::find($ingredient['id']);

                if($existsIngredient) {
                    $existsIngredient->name = $ingredient['name'];
                    $existsIngredient->save();
                    $newIngredients[] = $existsIngredient;
                }
            }else {
                $newIngredient = Ingredient::create([
                    "recipe_id" => $recipe->id,
                    "name" => $ingredient['name']
                ]);
                $newIngredients[] = $newIngredient;
            }
        }

        return response()->json([
            "status" => "success",
            "recipe" => $recipe,
            "ingredients" => $newIngredients
        ]);
    }
}
