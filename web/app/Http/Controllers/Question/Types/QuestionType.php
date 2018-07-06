<?php

/**
 * PHP Version 7
 * IQuestions.php
 *
 * @category Interfaces
 * @package  TestMaker
 * @author   Marcos Timm <timm@marcos.im>
 * @license  Copyright (C)
 * @link     https://marcos.im
 */

namespace App\Http\Controllers\Question\Types;

use App\Models\Question;
use Illuminate\Http\JsonResponse;


 /**
  * IQuestions Interface
  *
  * Interface for Questions
  *
  * @category Interfaces
  * @package  TestMaker
  * @author   Marcos Timm <timm@marcos.im>
  * @license  Copyright (C)
  * @link     https://marcos.im
  */  
interface QuestionType
{

    /**
     * Method set
     *
     * @param array $data data of a new question
     *
     * @return bool return description
     * @throws exception 
     * @access public
     */
    public function set(array $data) : JsonResponse;


}