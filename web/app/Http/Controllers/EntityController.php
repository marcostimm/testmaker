<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Entity;

class EntityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $entities = Entity::orderBy('id','desc')->paginate();
        return response()->json($this->conformPagination($entities));

    }

    /**
     * Method create
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return string return description
     * @throws exception 
     * @access public
     */
    public function create(Request $request)
    {
        $entity = $request->input('entity');

        if (!$entity || empty(trim($entity))) {
            return response()->json(
                [
                'data' => null, 
                'errors' => 'Entidade é obrigatório'
                ]
            );
        }

        $ent        = new Entity;
        $ent->name  = $entity;
        $res        = $ent->save();

        if ($res) {
            return response()->json(
                [
                'data' => $ent, 
                'errors' => null
                ]
            );
        } 
        
        return response()->json(
            [
            'data' => null, 
            'errors' => 'Erro ao salvar nova Entidade'
            ]
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        if (!$id) {
            return response()->json(
                [
                'data' => null, 
                'errors' => 'O ID da Entidade é obrigatório'
                ]
            );
        }

        $res = Entity::destroy($id);

        if ($res) {
            return response()->json(
                [
                'data' => $id, 
                'errors' => null
                ]
            );
        } 

        return response()->json(
            [
            'data' => null, 
            'errors' => 'Erro ao excluir Entidade'
            ]
        );
    }
}
