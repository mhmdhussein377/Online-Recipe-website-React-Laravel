<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShoppingListRecipe extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'recipe_id',
    ];

    function recipe() {
        return $this->belongsTo(Recipe::class);
    }

    function user() {
        return $this->belongsTo(User::class);
    }
}
