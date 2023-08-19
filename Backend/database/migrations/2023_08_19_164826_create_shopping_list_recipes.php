<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::dropIfExists('shopping_list_items');
        Schema::create('shopping_list_recipes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('shopping_list_id');
            $table->unsignedBigInteger('recipe_id');
            $table->timestamps();

            $table->foreign('recipe_id')->references('id')->on('recipes')->onDelete('cascade');
            $table->foreign('shopping_list_id')->references('id')->on('shopping_lists')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('shopping_list_recipes');
    }
};
