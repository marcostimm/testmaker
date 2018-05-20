<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::orderBy('id','desc')->paginate();
        $cat = $categories->toArray();
        unset($cat['last_page_url']);
        unset($cat['next_page_url']);
        unset($cat['prev_page_url']);
        unset($cat['first_page_url']);
        unset($cat['path']);

        return response()->json($cat);

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
        $subject = $request->input('subject');

        if (!$subject || empty(trim($subject))) {
            return response()->json(
                [
                'data' => null, 
                'errors' => 'Assunto é obrigatório'
                ]
            );
        }

        $cat        = new Category;
        $cat->name  = $subject;
        $res        = $cat->save();

        if ($res) {
            return response()->json(
                [
                'data' => $cat, 
                'errors' => null
                ]
            );
        } 
        
        return response()->json(
            [
            'data' => null, 
            'errors' => 'Erro ao salvar nova Categoria'
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
                'errors' => 'O ID da categoria é obrigatório'
                ]
            );
        }

        $res = Category::destroy($id);

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
            'errors' => 'Erro ao excluir categoria'
            ]
        );
    }
}
