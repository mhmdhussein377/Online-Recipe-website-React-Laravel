<?php

namespace App\Http\Controllers;

use App\Models\ShoppingList;
use App\Models\ShoppingListRecipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ShoppingListController extends Controller
{
    function createShoppingList(Request $request) {

        $user = Auth::user();

        $shoppingList = ShoppingList::create([
            "user_id" => $user->id,
            "name" => $request->name,
        ]);

        return response()->json([
            'status' => 'success',
            "shopping_list" => $shoppingList
        ]);
    }

    function deleteShoppingList($shoppingListId) {

        $shoppingList = ShoppingList::find($shoppingListId);

        if($shoppingList) {
            $shoppingList->delete();
            return response()->json([
                "status" => "success",
                "message" => "shopping list has been deleted successfully"
            ]);
        }

        return response()->json([
            "status" => "error",
            "message" => "shopping list does not exist"
        ]);
    }

    function updateShoppingList(Request $request, $shoppingListId) {

        $shoppingList = ShoppingList::find($shoppingListId);

        if($shoppingList) {
            $shoppingList->name = $request->name;
            $shoppingList->save();
            return response()->json([
                "status" => "success",
                "message" => "shopping list has been updated successfully",
                "shopping_list" => $shoppingList
            ]);
        }

        return response()->json([
            "status" => "error",
            "message" => "shopping list does not exist"
        ]);
    }

    function createShoppingListRecipe($recipeId) {

        $user = Auth::user();

        $shoppingListRecipe = ShoppingListRecipe::where([
            "user_id" => $user->id,
            "recipe_id" => $recipeId
        ])->first();

        if($shoppingListRecipe) {
            $shoppingListRecipe->delete();
            return response()->json([
            "status" => "success",
            "message" => "shopping list has been deleted successfully",
        ]);
        }

        $shoppingListRecipe = ShoppingListRecipe::create([
            "user_id" => $user->id,
            "recipe_id" => $recipeId
        ]);

        return response()->json([
            "status" => "success",
            "message" => "shopping list recipe has been created successfully",
            "shoppingListRecipe" => $shoppingListRecipe
        ]);
    }

    // function deleteShoppingListRecipe($recipeId) {

    //     $user = Auth::user();

    //     $shoppingListRecipe = ShoppingListRecipe::where([
    //         "recipe_id" => $recipeId,
    //         "user_id" => $user->id
    //     ])->first();

    //     if($shoppingListRecipe) {
    //         $shoppingListRecipe->delete();
    //         return response()->json([
    //             "status" => "success",
    //             "message" => "shopping list recipe has been deleted successfully"
    //         ]);
    //     }

    //     return response()->json([
    //         "status" => "error",
    //         "message" => "shopping list recipe does not exist"
    //     ]);
    // }

    function getShoppingListRecipes() {

        $user = Auth::user();

        $shoppingListRecipes = ShoppingListRecipe::where("user_id", $user->id)->with('recipe')->get();

        foreach($shoppingListRecipes as $shoppingListRecipe) {
            $recipe = $shoppingListRecipe->recipe;

            $isLiked = $recipe->likes->where("user_id", $user->id)->count() > 0 ? true : false;
            $shoppingListRecipe->recipe->isLiked = $isLiked;
        }
        
        return response()->json([
            "status" => "success",
            "shoppingListRecipes" => $shoppingListRecipes
        ]);
    }
}
