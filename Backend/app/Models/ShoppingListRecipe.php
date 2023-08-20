<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShoppingListRecipe extends Model
{
    use HasFactory;

    function recipe() {
        return $this->belongsTo(Recipe::class);
    }

    function shoppingList() {
        return $this->belongsTo(ShoppingList::class);
    }
}
