<?php

namespace App\Http\Controllers\Question;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Question\Types\{QuestionType, Discursive};
use Illuminate\Http\Request;
use App\Models\Type;
use App\Models\Question;
use Exception;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $quest = Question::with(['tags', 'answer', 'type', 'category'])->orderBy('id','desc')->paginate();
        return response()->json($this->conformPagination($quest));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $data = $request->only(
            'type_id', 
            'subject', 
            'category_id',
            'tags', 
            'internal_notes', 
            'answer', 
            'reference', 
            'description',
            'question'
        );

        // Verify if Type exists
        $type = Type::find($data['type_id']);
        if(!$type) {
            throw new Exception(
                "Question type does not exists"
            );
        }

        // Normalize the name of a question and give a scope
        $typeClassName = $this->normalizeQuestionType($type->slug);
        $typeClass = 'App\Http\Controllers\Question\Types\\' . $typeClassName;

        // Check if the class exists and implements the contract QuestionType
        if(!class_exists($typeClass) || !(new $typeClass() instanceof QuestionType)) {
            throw new Exception(
                "Class $type does not exists or does not fulfill the required contract"
            );
        }

        // Instantiate de Class type and set a new Question
        $question = new $typeClass();
        $response = $question->set($data);

        return $response;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id) : bool
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(int $id) : bool
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) : bool
    {
        //
    }

    /**
     * Method normalizeQuestionType
     *
     * @param string $slug slug of a question type
     *
     * @return string question type name
     * @throws exception 
     * @access private
     */
    private function normalizeQuestionType(string $slug) : string
    {
        return str_replace(' ','',ucfirst(str_replace("-"," ", $slug)));
    }
}
