<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealPlanRecipe extends Model
{
    use HasFactory;

    function mealPlan() {
        return $this->belongsTo(MealPlan::class);
    }

    function recipe() {
        return $this->belongsTo(Recipe::class);
    }
}
