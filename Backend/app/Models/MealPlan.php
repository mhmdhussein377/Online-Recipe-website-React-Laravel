<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealPlan extends Model
{
    use HasFactory;

    function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    function recipes() {
        return $this->belongsToMany(Recipe::class, 'meal_plan_recipes');
    }
}
