<?php

namespace App\Http\Controllers\Question;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Type;

class TypeController extends Controller
{
    /**
     * Method index
     *
     * @return string return description
     * @throws exception 
     * @access public
     */
    public function index()
    {
        $questType = Type::orderBy('name')->paginate();
        return response()->json($this->conformPagination($questType));

    }
}
