<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Auth;

class Answer extends Model
{

    protected $fillable = [
        'user_id',
        'question_id',
        'answer',
        'order',
        'selected'
    ];

    /**
     * Get the question that owns the answer.
     */
    public function question()
    {
        return $this->belongsTo('App\Models\Question');
    }

    public function save(array $options = array())
    {
	    if(!$this->user_id)
        {
            $this->user_id = Auth::User()->id;
        }
	    return parent::save($options);
    }
}
