<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Ingredient;
use App\Models\Like;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class RecipeController extends Controller
{
    function createRecipe(Request $request) {

        $user = Auth::user();

        $base64Image = $request->image;
        $decodedImage = base64_decode($base64Image);

        $filename = 'post_' . time() . '.jpg';
        $path = Storage::disk('public')->put('images/' . $filename, $decodedImage);

        $recipe = Recipe::create([
            "name" => $request->name,
            "cuisine" => $request->cuisine,
            "user_id" => $user->id,
            "images" => 'images/' . $filename
        ]);

        $imageUrl = Storage::url('images/' . $filename);

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
            "image_url" => $imageUrl,
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

    function likeRecipe($RecipeId) {

        $user = Auth::user();
        $isLiked = Like::where([
            "recipe_id" => $RecipeId,
            "user_id" => $user->id,
        ])->first();

        if($isLiked) {
            $isLiked->delete();
            return response()->json([
                "status" => "success",
                "message" => "Recipe has been unliked successfully"
            ]);
        }else {
            Like::create([
                "user_id" => $user->id,
                "recipe_id" => $RecipeId
            ]);
            return response()->json([
                "status" => "success",
                "message" => "Recipe has been liked successfully"
            ]);
        }
    }

    function getRecipes($RecipeId = null) {

        $user = Auth::user();

        if($RecipeId) {
            $recipe = Recipe::with(['ingredients', 'user', 'comments'])->find($RecipeId);
            return response()->json([
                "status" => "success",
                "recipe" => $recipe
            ]);
        }else {
            $recipes = Recipe::withCount('likesCount')->get();
            foreach ($recipes as $recipe) {
                $isLiked = $recipe->likes->where("user_id", $user->id)->count() > 0 ? true : false;
                $recipe->isLiked = $isLiked;
            }
            return response()->json([
                "status" => "success",
                "recipes" => $recipes
            ]);
        }
    }

    function myRecipes() {

        $user = Auth::user();

        $recipes = Recipe::withCount('likesCount')->where('user_id', $user->id)->get();
            foreach ($recipes as $recipe) {
                $isLiked = $recipe->likes->where("user_id", $user->id)->count() > 0 ? true : false;
                $recipe->isLiked = $isLiked;
            }
            return response()->json([
                "status" => "success",
                "recipes" => $recipes
            ]);
    }

    function likedRecipes() {

        $user = Auth::user();
        // $recipes = Like::where("user_id", $user->id)->with('recipe')->withCount('recipe.likes as likesCount')->get();
        $recipes = Recipe::whereHas('likes', function ($query) use ($user) {
            $query->where('user_id', $user->id);
        })
        ->withCount('likesCount')
        ->get();
        foreach ($recipes as $recipe) {
                $recipe->isLiked = true;
                // $recipe::withCount("likesCount");
            }

        return response()->json([
                "status" => "success",
                "recipes" => $recipes
            ]);
    }

    function createComment(Request $request, $RecipeId) {

        $user = Auth::user();

        $comment = Comment::create([
            "comment" => $request->comment,
            "user_id" => $user->id,
            "recipe_id" => (int)$RecipeId
        ]);

        return response()->json([
            'status' => 'success',
            "comment" => $comment
        ]);
    }

    // ask charbel if it's better to use Auth::user to delete a comment
    function deleteComment($CommmentId) {

        $comment = Comment::find($CommmentId);

        if($comment) {
            $comment->delete();
            return response()->json([
                'status' => "success",
                'message' => "comment has been deleted successfully",
            ]);
        }

        return response()->json([
            'status' => 'error',
            'message' => "comment does not exist"
        ]);
    }

    function getComments($RecipeId) {

        $recipe = Recipe::find($RecipeId);

        if($recipe) {
            $comments = $recipe->comments()->with('user', function ($query) {
                return $query->select('name');
            })->get();
            return response()->json([
                "status" => "success",
                "comments" => $comments
            ]);
        }

        return response()->json([
            "status" => "error",
            "message" => "recipe does not exist"
        ]);
    }
}
