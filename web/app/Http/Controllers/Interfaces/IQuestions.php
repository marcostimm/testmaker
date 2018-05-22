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
interface IQuestions
{
    /**
     * Method getQuestions
     *
     * @param int $question_id Should return a object question
     *
     * @return Question return 
     * @throws exception 
     * @access public
     */
    function getQuestion(int $question_id) : Question;

    /**
     * Method setQuestion
     *
     * @param Question $question Set a new question
     *
     * @return bool return description
     * @throws exception 
     * @access public
     */
    public function setQuestion(Question $question) : bool;


}