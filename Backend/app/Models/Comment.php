<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    function recipe() {
        return $this->belongsTo(Recipe::class, "recipe_id");
    }
}
