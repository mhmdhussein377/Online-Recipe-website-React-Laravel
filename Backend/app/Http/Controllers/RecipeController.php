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
    }
}
