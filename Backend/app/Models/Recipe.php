<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Recipe extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "cuisine",
        "user_id",
        "images"
    ];

    function user() {
        return $this->belongsTo(User::class, "user_id");
    }

    function likes() {
        return $this->hasMany(Like::class, "recipe_id");
    }

    function isLiked() {
        $user = Auth::user();
        return $this->hasMany(Like::class)->where("user_id", $user->id)->count() > 0;
    }

    function likesCount() {
        return $this->hasMany(Like::class, "recipe_id");
    }

    function comments() {
        return $this->hasMany(Comment::class, "recipe_id")->with('user');
    }

    function shoppingListRecipe() {
        return $this->belongsToMany(ShoppingListRecipe::class, 'shopping_list_recipes', 'user_id', 'recipe_id');
    }

    function mealPlans() {
        return $this->belongsToMany(MealPlan::class, 'meal_plan_recipes', "meal_plan_id". "recipe_id");
    }

    function ingredients() {
        return $this->hasMany(Ingredient::class, 'recipe_id');
    }
}
