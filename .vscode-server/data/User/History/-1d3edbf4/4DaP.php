<?php

use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\EquipeController;
use App\Http\Controllers\Api\ClassementController;
use App\Http\Controllers\Api\JoueurController;
use App\Http\Controllers\Api\StatJoueurController;
use App\Http\Controllers\Api\MatchController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('posts', [PostController::class, 'index']);


//Inscrire  un nouvelle utilisateur
Route::post('/register', [UserController::class, 'register']);

//Connexion d'un utilisateur
Route::get('/login', [UserController::class, 'login']);

//Recup les equipes
Route::get('/classement', [ClassementController::class, 'classementApi']);

Route::get('/equipe', [EquipeController::class, 'equipeApi']);

Route::get('/joueur', [JoueurController::class, 'joueurApi']);

Route::get('/stat', [StatJoueurController::class, 'joueurStatApi']);

Route::get('/match', [MatchController::class, 'matchApi']);

Route::get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    
    // retourne les infos de l'utilisateur connecté


    // Route pour créer un post
    Route::post('posts/create', [PostController::class, 'store']);

    // Route pour Modifier un post
    Route::put('posts/{post}', [PostController::class, 'update']);

    // Route pour supprimer un post
    Route::delete('posts/{post}', [PostController::class, 'destroy']);
});