<?php

namespace App\Models;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    function recipes() {
        return $this->hasMany(Recipe::class, 'user_id');
    }

    function shoppingLists() {
        return $this->hasMany(ShoppingList::class, 'user_id');
    }

    function mealPlans() {
        return $this->hasMany(MealPlan::class, 'user_id');
    }

    function likes() {
        return $this->hasMany(Likes::class, 'user_id');
    }

    function comments() {
        return $this->hasMany(Comment::class, 'user_id');
    }

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

}