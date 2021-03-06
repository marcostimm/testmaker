<?php

namespace App\Http\Controllers\Question\Types;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Question\Types\QuestionType;
use App\Models\Question;
use App\Models\Tags;
use App\Models\Answer;

class Discursive extends Controller implements QuestionType
{
    /**
     * Method set
     *
     * @param string param description
     *
     * @return void return description
     * @throws exception 
     * @access public
     */
    public function set(array $data) : JsonResponse
    {

        // Create a new object Question with data
        $newQuestion = new Question($data);

        DB::transaction(function () use ($newQuestion, $data) {
            if($newQuestion->save()) {

                $data['tags'] = implode(', ',$data['tags']);
                $tags = new Tags($data);
                $newQuestion->tags()->save($tags);

                $answer = new Answer($data);
                $answer->selected = 1;
                $newQuestion->answer()->save($answer);

            } else {
                throw new Exception(
                    "Error saving a new Question of type Discursive"
                );
            }
        });

        return response()->json(
            [
            'errors'    => null,
            'success'   => true,
            'data'      => $newQuestion
            ]
        );
    }

}
