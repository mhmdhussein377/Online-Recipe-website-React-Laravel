<?php

namespace App\Http\Controllers;

use App\Models\ShoppingList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ShoppingListController extends Controller
{
    function createShoppingList(Request $request) {

        $user = Auth::user();

        $shoppingList = ShoppingList::create([
            "user_id" => $user->id,
            "name" => $request->name,
        ]);

        return response()->json([
            'status' => 'success',
            "shopping_list" => $shoppingList
        ]);
    }
}
