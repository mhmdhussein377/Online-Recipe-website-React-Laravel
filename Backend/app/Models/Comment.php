<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'comment',
        'recipe_id',
    ];

    function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    function recipe() {
        return $this->belongsTo(Recipe::class, "recipe_id");
    }
}
