<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $exams = [
            [1, "Prova muito difícil", "01/01/2018", "FAESA", "X"],
            [2, "Prova fácil", "02/01/2018", "FAESA", "X"],
            [3, "Prova médio", "03/01/2018", "FAESA", "X"],
            [4, "Prova médio", "03/01/2018", "FAESA", "X"],
            [5, "Prova médio", "03/01/2018", "FAESA", "X"],
            [6, "Prova médio", "03/01/2018", "FAESA", "X"],
            [7, "Prova médio", "03/01/2018", "FAESA", "X"],
            [8, "Prova médio", "03/01/2018", "FAESA", "X"],
            [9, "Prova médio", "03/01/2018", "FAESA", "X"]
        ];

        return response()->json($exams);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
