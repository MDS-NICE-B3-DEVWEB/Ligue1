<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Http\Response; // Import the Response class

class ClassementController extends Controller
{
    public function classementApi(Request $request)
    {
        $client = new Client();
    
        $id_saison = $request->id_saison;
        // Faites l'appel à l'API
        $response = $client->get("https://api.statorium.com/api/v1/standings/{$id_saison}/?apikey=12238dbb87bf7233b8ab70b36192a3ec");
        


            return response()->json([
                'status_code' => 200, 
                'success' => true,
                'message' => 'Liste des equipes',
                'items' => $reponse,
            ], 200); // Use the response helper function with the correct status code
        }

        return response()->json([
            'status_code' => 404, 
            'success' => false,
            'message' => 'Aucun participant trouvé',
            'items' => null,
        ], 404); // Use the response helper function with the correct status code
    }
}