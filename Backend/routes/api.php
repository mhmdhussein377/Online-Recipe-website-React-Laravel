<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RecipeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login')->name('login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::group(['middleware' => 'jwt.auth'], function () {
    
    Route::post("/create-recipe", [RecipeController::class, 'createRecipe']);
    Route::delete("/delete-recipe/{RecipeId}", [RecipeController::class, 'deleteRecipe']);
    Route::post("update-recipe/{RecipeId}", [RecipeController::class, 'updateRecipe']);

    Route::get("/like-recipe/{RecipeId}", [RecipeController::class, 'likeRecipe']);
    Route::get("/recipes/{RecipeId?}", [RecipeController::class, 'getRecipes']);

    Route::post("/create-comment/{RecipeId}", [RecipeController::class, 'createComment']);
    Route::post("/delete-comment/{RecipeId}", [RecipeController::class, 'deleteComment']);
});
