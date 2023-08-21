<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "cuisine",
        "user_id"
    ];

    function user() {
        return $this->belongsTo(User::class, "user_id");
    }

    function likes() {
        return $this->hasMany(Like::class, "recipe_id");
    }

    function likesNumber() {
        return $this->hasMany(Like::class, "recipe_id")->count();
    }

    function comments() {
        return $this->hasMany(Comment::class, "recipe_id");
    }

    function shoppingLists() {
        return $this->belongsToMany(ShoppingList::class, 'shopping_list_recipes', 'shopping_list_id', 'recipe_id');
    }

    function mealPlans() {
        return $this->belongsToMany(MealPlan::class, 'meal_plan_recipes', "meal_plan_id". "recipe_id");
    }

    function ingredients() {
        return $this->hasMany(Ingredient::class, 'recipe_id');
    }
}
